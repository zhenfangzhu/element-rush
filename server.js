const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const os = require('os');

const PORT = 8000;
const ROOT = __dirname;

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  const candidates = [];
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) candidates.push(iface.address);
    }
  }
  const privateIP = candidates.find(ip =>
    /^10\./.test(ip) ||
    /^192\.168\./.test(ip) ||
    /^172\.(1[6-9]|2[0-9]|3[01])\./.test(ip)
  );
  return privateIP || candidates[0] || '127.0.0.1';
}

const rooms = new Map();
let playerCounter = 1;

function randomCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let s = '';
  for (let i = 0; i < 4; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
}

function serializeRoom(r) {
  return {
    code: r.code,
    range: r.range,
    submode: r.submode,
    seed: r.seed,
    started: r.started,
    startTime: r.startTime,
    timeLimit: r.timeLimit,
    ended: r.ended,
    endTime: r.endTime,
    winnerId: r.winnerId,
    players: r.players.map(p => ({
      id: p.id,
      name: p.name,
      score: p.score,
      correct: p.correct,
      current: p.current,
      lives: p.lives,
      finished: p.finished,
      finishTime: p.finishTime,
      ready: p.ready
    }))
  };
}

function broadcast(room, event) {
  const data = JSON.stringify({ ...event, room: serializeRoom(room) });
  room.conns.forEach(conn => {
    try { conn.write(`data: ${data}\n\n`); } catch (e) { }
  });
}

function checkEnd(room) {
  if (room.ended) return;
  const now = Date.now();
  const someoneFinished = room.players.length >= 2 && room.players.some(p => p.finished);
  const timeUp = room.started && (now - room.startTime >= room.timeLimit * 1000);
  if (someoneFinished || timeUp) {
    room.ended = true;
    room.endTime = now;
    const sorted = [...room.players].sort((a, b) => {
      const at = a.finishTime || Infinity;
      const bt = b.finishTime || Infinity;
      if (at !== bt) return at - bt;
      return b.score - a.score;
    });
    room.winnerId = sorted[0].id;
    broadcast(room, { type: 'end' });
    setTimeout(() => {
      const r = rooms.get(room.code);
      if (r && r.ended) rooms.delete(room.code);
    }, 30000);
  }
}

function readBody(req, cb) {
  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    try { cb(JSON.parse(body || '{}')); } catch (e) { cb({}); }
  });
}

function handleApi(req, res, pathname) {
  const parts = url.parse(req.url, true);

  if (pathname === '/api/events') {
    const qs = parts.query;
    const room = rooms.get((qs.code || '').toUpperCase());
    if (!room) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    });
    res.write(`data: ${JSON.stringify({ type: 'hello', room: serializeRoom(room) })}\n\n`);
    const key = qs.playerId || ('guest-' + Date.now());
    room.conns.set(key, res);
    req.on('close', () => { room.conns.delete(key); });
    return;
  }

  readBody(req, data => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    if (pathname === '/api/ip') {
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.end(JSON.stringify({ ip: getLocalIP(), port: PORT }));
      return;
    }

    if (pathname === '/api/create') {
      const code = randomCode();
      const player = {
        id: playerCounter++,
        name: data.name || '玩家1',
        score: 0, correct: 0, current: 0, lives: 3,
        finished: false, finishTime: null, ready: false
      };
      const room = {
        code,
        range: data.range || 20,
        submode: data.submode || 'symbol',
        seed: null,
        started: false,
        startTime: null,
        timeLimit: 60,
        ended: false,
        endTime: null,
        winnerId: null,
        players: [player],
        conns: new Map()
      };
      rooms.set(code, room);
      res.end(JSON.stringify({ ok: true, code, playerId: player.id, room: serializeRoom(room) }));
      return;
    }

    if (pathname === '/api/join') {
      const room = rooms.get((data.code || '').toUpperCase());
      if (!room) { res.end(JSON.stringify({ ok: false, error: '房间不存在' })); return; }
      if (room.started) { res.end(JSON.stringify({ ok: false, error: '对战已开始' })); return; }
      if (room.players.length >= 2) { res.end(JSON.stringify({ ok: false, error: '房间已满' })); return; }
      const player = {
        id: playerCounter++,
        name: data.name || '玩家2',
        score: 0, correct: 0, current: 0, lives: 3,
        finished: false, finishTime: null, ready: false
      };
      room.players.push(player);
      res.end(JSON.stringify({ ok: true, playerId: player.id, room: serializeRoom(room) }));
      broadcast(room, { type: 'join' });
      return;
    }

    if (pathname === '/api/ready') {
      const room = rooms.get((data.code || '').toUpperCase());
      if (!room) { res.end(JSON.stringify({ ok: false, error: '房间不存在' })); return; }
      const p = room.players.find(x => x.id === data.playerId);
      if (p) p.ready = true;
      if (room.players.length >= 2 && room.players.every(x => x.ready) && !room.started) {
        room.seed = Date.now() + Math.floor(Math.random() * 1000000);
        room.started = true;
        room.startTime = Date.now();
        broadcast(room, { type: 'start' });
        setTimeout(() => checkEnd(room), room.timeLimit * 1000);
      } else {
        broadcast(room, { type: 'ready' });
      }
      res.end(JSON.stringify({ ok: true, room: serializeRoom(room) }));
      return;
    }

    if (pathname === '/api/update') {
      const room = rooms.get((data.code || '').toUpperCase());
      if (!room) { res.end(JSON.stringify({ ok: false, error: '房间不存在' })); return; }
      const p = room.players.find(x => x.id === data.playerId);
      if (p) {
        p.score = data.score ?? p.score;
        p.correct = data.correct ?? p.correct;
        p.current = data.current ?? p.current;
        p.lives = data.lives ?? p.lives;
        if (data.finished && !p.finished) {
          p.finished = true;
          p.finishTime = Date.now();
        }
        broadcast(room, { type: 'update' });
        checkEnd(room);
      }
      res.end(JSON.stringify({ ok: true }));
      return;
    }

    res.writeHead(404); res.end();
  });
}

function openBrowser() {
  if (process.platform !== 'win32') return;
  try {
    require('child_process').exec(`start "" http://localhost:${PORT}`);
  } catch (e) { }
}

const server = http.createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(url.parse(req.url).pathname);
  } catch (e) {
    res.writeHead(400); res.end('bad request'); return;
  }

  if (pathname.startsWith('/api/')) {
    handleApi(req, res, pathname);
    return;
  }

  const relativePath = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  const filePath = path.resolve(ROOT, relativePath);
  if (filePath !== ROOT && !filePath.startsWith(ROOT + path.sep)) {
    res.writeHead(403); res.end('forbidden'); return;
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404); res.end('not found');
      return;
    }
    const ext = path.extname(filePath);
    const ct = ext === '.js' ? 'application/javascript' : ext === '.css' ? 'text/css' : 'text/html';
    res.writeHead(200, {
      'Content-Type': ct + '; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'no-referrer'
    });
    res.end(data);
  });
});

server.on('error', e => {
  if (e.code === 'EADDRINUSE') {
    console.log(`\n端口 ${PORT} 已被占用（服务器可能已在运行）。`);
    console.log('直接为你打开游戏页面...\n');
    openBrowser();
  } else {
    console.error('启动失败：', e.message);
  }
  process.exit(0);
});

server.listen(PORT, '0.0.0.0', () => {
  const ip = getLocalIP();
  console.log(`\n双人服务器已启动：http://localhost:${PORT}`);
  console.log(`局域网好友可通过 http://${ip}:${PORT} 加入`);
  console.log('按 Ctrl+C 关闭\n');
  openBrowser();
});
