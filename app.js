const elements = [
  [1,'H','氢',1,1,'nonmetal','qīng'],[2,'He','氦',1,18,'noble','hài'],[3,'Li','锂',2,1,'alkali','lǐ'],[4,'Be','铍',2,2,'alkali','pí'],[5,'B','硼',2,13,'other','péng'],[6,'C','碳',2,14,'nonmetal','tàn'],[7,'N','氮',2,15,'nonmetal','dàn'],[8,'O','氧',2,16,'nonmetal','yǎng'],[9,'F','氟',2,17,'nonmetal','fú'],[10,'Ne','氖',2,18,'noble','nǎi'],
  [11,'Na','钠',3,1,'alkali','nà'],[12,'Mg','镁',3,2,'alkali','měi'],[13,'Al','铝',3,13,'alkali','lǚ'],[14,'Si','硅',3,14,'other','guī'],[15,'P','磷',3,15,'nonmetal','lín'],[16,'S','硫',3,16,'nonmetal','liú'],[17,'Cl','氯',3,17,'nonmetal','lǜ'],[18,'Ar','氩',3,18,'noble','yà'],[19,'K','钾',4,1,'alkali','jiǎ'],[20,'Ca','钙',4,2,'alkali','gài'],
  [21,'Sc','钪',4,3,'alkali','kàng'],[22,'Ti','钛',4,4,'alkali','tài'],[23,'V','钒',4,5,'alkali','fán'],[24,'Cr','铬',4,6,'alkali','gè'],[25,'Mn','锰',4,7,'alkali','měng'],[26,'Fe','铁',4,8,'alkali','tiě'],[27,'Co','钴',4,9,'alkali','gǔ'],[28,'Ni','镍',4,10,'alkali','niè'],[29,'Cu','铜',4,11,'alkali','tóng'],[30,'Zn','锌',4,12,'alkali','xīn'],[31,'Ga','镓',4,13,'alkali','jiā'],[32,'Ge','锗',4,14,'other','zhě'],[33,'As','砷',4,15,'other','shēn'],[34,'Se','硒',4,16,'nonmetal','xī'],[35,'Br','溴',4,17,'nonmetal','xiù'],[36,'Kr','氪',4,18,'noble','kè'],
  [37,'Rb','铷',5,1,'alkali','rú'],[38,'Sr','锶',5,2,'alkali','sī'],[39,'Y','钇',5,3,'alkali','yǐ'],[40,'Zr','锆',5,4,'alkali','gào'],[41,'Nb','铌',5,5,'alkali','ní'],[42,'Mo','钼',5,6,'alkali','mù'],[43,'Tc','锝',5,7,'alkali','dé'],[44,'Ru','钌',5,8,'alkali','liǎo'],[45,'Rh','铑',5,9,'alkali','lǎo'],[46,'Pd','钯',5,10,'alkali','bǎ'],[47,'Ag','银',5,11,'alkali','yín'],[48,'Cd','镉',5,12,'alkali','gé'],[49,'In','铟',5,13,'alkali','yīn'],[50,'Sn','锡',5,14,'alkali','xī'],[51,'Sb','锑',5,15,'other','tī'],[52,'Te','碲',5,16,'other','dì'],[53,'I','碘',5,17,'nonmetal','diǎn'],[54,'Xe','氙',5,18,'noble','xiān'],
  [55,'Cs','铯',6,1,'alkali','sè'],[56,'Ba','钡',6,2,'alkali','bèi'],[57,'La','镧',6,3,'alkali','lán'],[72,'Hf','铪',6,4,'alkali','hā'],[73,'Ta','钽',6,5,'alkali','tǎn'],[74,'W','钨',6,6,'alkali','wū'],[75,'Re','铼',6,7,'alkali','lái'],[76,'Os','锇',6,8,'alkali','é'],[77,'Ir','铱',6,9,'alkali','yī'],[78,'Pt','铂',6,10,'alkali','bó'],[79,'Au','金',6,11,'alkali','jīn'],[80,'Hg','汞',6,12,'alkali','gǒng'],[81,'Tl','铊',6,13,'alkali','tā'],[82,'Pb','铅',6,14,'alkali','qiān'],[83,'Bi','铋',6,15,'alkali','bì'],[84,'Po','钋',6,16,'other','pō'],[85,'At','砹',6,17,'other','ài'],[86,'Rn','氡',6,18,'noble','dōng'],
  [87,'Fr','钫',7,1,'alkali','fāng'],[88,'Ra','镭',7,2,'alkali','léi'],[89,'Ac','锕',7,3,'alkali','ā'],[104,'Rf','𬬻',7,4,'alkali','lú'],[105,'Db','𬭊',7,5,'alkali','dù'],[106,'Sg','𬭳',7,6,'alkali','xǐ'],[107,'Bh','𬭛',7,7,'alkali','bō'],[108,'Hs','𬭶',7,8,'alkali','hēi'],[109,'Mt','鿏',7,9,'alkali','mài'],[110,'Ds','𫟼',7,10,'alkali','dá'],[111,'Rg','𬬭',7,11,'alkali','lún'],[112,'Cn','鿔',7,12,'alkali','gē'],[113,'Nh','鉨',7,13,'alkali','nǐ'],[114,'Fl','𫓧',7,14,'alkali','fū'],[115,'Mc','镆',7,15,'alkali','mò'],[116,'Lv','𫟷',7,16,'alkali','lì'],[117,'Ts','鿬',7,17,'other','tián'],[118,'Og','鿫',7,18,'noble','ào'],
  [58,'Ce','铈',8,4,'alkali','shì'],[59,'Pr','镨',8,5,'alkali','pǔ'],[60,'Nd','钕',8,6,'alkali','nǚ'],[61,'Pm','钷',8,7,'alkali','pǒ'],[62,'Sm','钐',8,8,'alkali','shān'],[63,'Eu','铕',8,9,'alkali','yǒu'],[64,'Gd','钆',8,10,'alkali','gá'],[65,'Tb','铽',8,11,'alkali','tè'],[66,'Dy','镝',8,12,'alkali','dī'],[67,'Ho','钬',8,13,'alkali','huǒ'],[68,'Er','铒',8,14,'alkali','ěr'],[69,'Tm','铥',8,15,'alkali','diū'],[70,'Yb','镱',8,16,'alkali','yì'],[71,'Lu','镥',8,17,'alkali','lǔ'],[90,'Th','钍',9,4,'alkali','tǔ'],[91,'Pa','镤',9,5,'alkali','pú'],[92,'U','铀',9,6,'alkali','yóu'],[93,'Np','镎',9,7,'alkali','ná'],[94,'Pu','钚',9,8,'alkali','bù'],[95,'Am','镅',9,9,'alkali','méi'],[96,'Cm','锔',9,10,'alkali','jú'],[97,'Bk','锫',9,11,'alkali','péi'],[98,'Cf','锎',9,12,'alkali','kāi'],[99,'Es','锿',9,13,'alkali','āi'],[100,'Fm','镄',9,14,'alkali','fèi'],[101,'Md','钔',9,15,'alkali','mén'],[102,'No','锘',9,16,'alkali','nuò'],[103,'Lr','铹',9,17,'alkali','láo']
].map(([number,symbol,name,row,col,type,py])=>({number,symbol,name,row,col,type,py})).sort((a,b)=>a.number-b.number);

const $ = id => document.getElementById(id);
let mode='symbol', pool=[], questions=[], current=0, score=0, combo=0, maxCombo=0, correct=0, lives=3, locked=false, soundOn=true;
let mastered = new Set(JSON.parse(localStorage.getItem('elementMastered') || '[]'));

function renderMap(){
  const table=$('periodicTable'); table.innerHTML='';
  elements.forEach(e=>{
    const cell=document.createElement('div');
    cell.className=`element-cell ${e.type} ${mastered.has(e.number)?'mastered':''}`;
    cell.style.gridColumn=e.col; cell.style.gridRow=e.row;
    cell.innerHTML=`<small>${e.number}</small><b>${e.symbol}</b><i class="cell-py">${e.py}</i>`;
    cell.title=`${e.number} ${e.name} ${e.symbol}`;
    cell.setAttribute('aria-label', mastered.has(e.number)?`${e.name}，已点亮`:`${e.number}号元素，尚未点亮`);
    table.appendChild(cell);
  });
  $('masteredCount').textContent=mastered.size;
  $('mapProgress').textContent=`${mastered.size} / 118`;
}

function updateHomeStats(){
  $('bestScore').textContent=localStorage.getItem('elementBest')||0;
  const last=localStorage.getItem('elementLastDay'); const today=new Date().toISOString().slice(0,10);
  let days=Number(localStorage.getItem('elementDays')||1);
  if(last!==today){
    if(last && Math.round((new Date(today)-new Date(last))/86400000)===1) days++;
    else if(last) days=1;
    localStorage.setItem('elementDays',days); localStorage.setItem('elementLastDay',today);
  }
  $('dayStreak').textContent=days;
}

document.querySelectorAll('.mode-card').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.mode-card').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active'); mode=btn.dataset.mode;
  $('levelNumber').textContent=mode==='symbol'?'01':mode==='number'?'02':mode==='position'?'03':'VS';
}));

function shuffle(arr){return [...arr].sort(()=>Math.random()-.5)}
function startGame(){
  const limit=Number($('rangeSelect').value); pool=elements.filter(e=>e.number<=limit);
  questions=shuffle(pool).slice(0,10); current=score=combo=maxCombo=correct=0; lives=3; locked=false; roundStart=Date.now();
  $('quizModal').hidden=false; document.body.style.overflow='hidden'; renderQuestion(); $('closeQuiz').focus();
}

function renderLives(){ $('lives').innerHTML=Array.from({length:3},(_,i)=>`<i class="life ${i>=lives?'lost':''}"></i>`).join('') }
function getDistractors(answer){
  const cand=pool.filter(e=>e.number!==answer.number);
  return (optRng?seededShuffle(cand,optRng):shuffle(cand)).slice(0,3);
}
function effMode(){return duoMode?(duoSubmode||'symbol'):mode}
function displayValue(e){
  const m=effMode();
  if(m==='symbol') return `${e.name} ${e.py}`;
  if(m==='number') return `${e.symbol} · ${e.name} ${e.py}`;
  if(e.row===8) return `镧系元素 · 第 ${e.number-57} 位`;
  if(e.row===9) return `锕系元素 · 第 ${e.number-89} 位`;
  return `第 ${e.row} 周期 · 第 ${e.col} 族`;
}
function renderQuestion(){
  if(current>=questions.length || lives<=0){if(duoMode)return;endGame();return}
  locked=false; const e=questions[current];
  $('round').textContent=current+1; $('score').textContent=score; $('combo').textContent=`连击 × ${combo}`; $('quizProgress').style.width=`${(current+1)*10}%`; renderLives();
  $('questionNumber').textContent=e.number;
  $('quizHeading').textContent='选出正确答案';
  const m=effMode();
  if(m==='symbol'){$('questionHint').textContent='这个元素符号代表什么？';$('questionMain').textContent=e.symbol;$('questionSub').textContent='?';}
  if(m==='number'){$('questionHint').textContent='原子序号对应哪个元素？';$('questionMain').textContent=e.number;$('questionSub').textContent='原子序号';}
  if(m==='position'){$('questionHint').textContent='它藏在周期表的哪里？';$('questionMain').textContent=e.symbol;$('questionSub').textContent=`${e.name} ${e.py}`;}
  optRng=duoMode?new SeededRandom(duoSeed+current*7919):null;
  const opts=optRng?seededShuffle([e,...getDistractors(e)],optRng):shuffle([e,...getDistractors(e)]);
  $('answers').innerHTML=''; $('feedback').textContent='';
  opts.forEach((opt,i)=>{const b=document.createElement('button');b.type='button';b.className='answer-button';b.innerHTML=`<span class="opt-badge">${String.fromCharCode(65+i)}</span><span class="opt-text">${displayValue(opt)}</span>`;b.dataset.number=opt.number;b.addEventListener('click',()=>chooseAnswer(b,opt,e));$('answers').appendChild(b)});
  $('questionTile').hidden=false;
  applyCheatMark();
}

function chooseAnswer(button,chosen,answer){
  if(locked)return; locked=true; document.querySelectorAll('.answer-button').forEach(b=>b.disabled=true);
  if(chosen.number===answer.number){
    combo++; correct++; maxCombo=Math.max(maxCombo,combo); score+=100+Math.min(combo-1,5)*20; button.classList.add('correct');
    mastered.add(answer.number); $('feedback').textContent=combo>=3?`漂亮！连续答对 ${combo} 题`:'答对了！元素已点亮'; playTone(620);
  }else{
    combo=0;lives--;button.classList.add('wrong');const right=[...document.querySelectorAll('.answer-button')].find(b=>Number(b.dataset.number)===answer.number);right.classList.add('correct');$('feedback').textContent=`正确答案：${displayValue(answer)}`;playTone(190);
  }
  $('score').textContent=score;$('combo').textContent=`连击 × ${combo}`;renderLives();current++;renderDuoHudSelf();
  if(duoMode){
    if(current>=questions.length || lives<=0){localFinished=true;showDuoWaiting();}
    sendDuoUpdate();
    if(!localFinished)nextQTimer=setTimeout(renderQuestion,1050);
  }else{
    nextQTimer=setTimeout(renderQuestion,1050);
  }
}

function endGame(){
  localStorage.setItem('elementMastered',JSON.stringify([...mastered])); const best=Math.max(score,Number(localStorage.getItem('elementBest')||0)); localStorage.setItem('elementBest',best);
  const time=Math.round((Date.now()-roundStart)/100)/10; recordRound(score,correct,time);
  $('quizModal').hidden=true;$('resultModal').hidden=false;$('finalScore').textContent=score;$('correctCount').textContent=`${correct} / 10`;$('maxCombo').textContent=maxCombo;$('resultTime').textContent=time;
  const grade=correct>=9?'S':correct>=7?'A':correct>=5?'B':'C';$('resultBadge').textContent=grade;
  $('resultTitle').textContent=correct>=9?'元素大师，太强了！':correct>=7?'这一轮很稳！':correct>=5?'渐入佳境！':'再来一轮就记住了';
  $('resultCopy').textContent=lives<=0?'生命值用完了，但刚才的错题已经更熟悉了。':`你答对了 ${correct} 题，点亮进度已保存。`;
  renderMap();updateHomeStats();$('againButton').focus();
}

function closeModal(id){$(id).hidden=true;document.body.style.overflow='';if(id==='quizModal'&&duoMode){duoMode=false;localFinished=false;stopDuoCountdown();if(nextQTimer){clearTimeout(nextQTimer);nextQTimer=null;}$('duoHud').hidden=true;if(eventSource){eventSource.close();eventSource=null;}}}
function playTone(freq){
  if(!soundOn)return; const Ctx=window.AudioContext||window.webkitAudioContext;if(!Ctx)return;const ctx=new Ctx(),osc=ctx.createOscillator(),gain=ctx.createGain();osc.frequency.value=freq;osc.type='sine';gain.gain.setValueAtTime(.08,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.14);osc.connect(gain);gain.connect(ctx.destination);osc.start();osc.stop(ctx.currentTime+.14);
}

$('startButton').addEventListener('click',()=>{mode==='duo'?openDuoModal():startGame()});$('againButton').addEventListener('click',()=>{closeModal('resultModal');mode==='duo'?openDuoModal():startGame()});$('resultClose').addEventListener('click',()=>closeModal('resultModal'));$('closeQuiz').addEventListener('click',()=>closeModal('quizModal'));
$('howButton').addEventListener('click',()=>{$('howModal').hidden=false;document.body.style.overflow='hidden';$('closeHow').focus()});$('closeHow').addEventListener('click',()=>closeModal('howModal'));$('gotItButton').addEventListener('click',()=>{closeModal('howModal');$('startButton').focus()});
$('soundButton').addEventListener('click',()=>{soundOn=!soundOn;$('soundButton').setAttribute('aria-label',soundOn?'关闭音效':'开启音效');$('soundButton').style.opacity=soundOn?'1':'.45'});
$('resetMapButton').addEventListener('click',()=>{
  const btn=$('resetMapButton');
  if(btn.dataset.confirm==='1'){
    mastered.clear();
    localStorage.removeItem('elementMastered');
    renderMap();
    btn.dataset.confirm='';
    btn.textContent='已重置';
    setTimeout(()=>{btn.textContent='重置点亮'},1500);
  }else{
    btn.dataset.confirm='1';
    btn.textContent='再点一次确认';
    setTimeout(()=>{btn.dataset.confirm='';btn.textContent='重置点亮'},3000);
  }
});
/* 排行榜 (支持 Supabase 全网实时同步 + 本地 localStorage 兜底) */
const SUPABASE_URL = 'https://njthlbrqdpcxhonfushu.supabase.co';
const SUPABASE_KEY = 'sb_publishable_IJ45ZThvMVZeaWwTG46TAw_Elk9Neqd';

const records = JSON.parse(localStorage.getItem('elementRecords') || '[]');
let roundStart = 0, recordsTab = 'speed', recordsModeTab = 'symbol';

function saveRecords() {
  localStorage.setItem('elementRecords', JSON.stringify(records));
}

async function recordRound(score, correct, time) {
  const name = localStorage.getItem('elementPlayerName') || '神秘玩家';
  const mode = currentMode || 'symbol';
  const localEntry = { name, score, correct, time, mode, date: new Date().toISOString().slice(0, 10) };
  records.push(localEntry);
  if (records.length > 100) records.splice(0, records.length - 100);
  saveRecords();

  // 异步上传至 Supabase 全网公共排行榜
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/leaderboard`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        player_name: name,
        score: Number(score),
        correct: Number(correct),
        time_seconds: Number(time),
        mode: mode
      })
    });
  } catch (e) {
    console.warn('Supabase record failed:', e);
  }
}

async function fetchCloudRecords(tab, mode = 'symbol') {
  try {
    const modeFilter = `mode=eq.${mode}`;
    let query = '';
    if (tab === 'speed') {
      query = `select=*&${modeFilter}&correct=gte.8&order=time_seconds.asc,correct.desc&limit=10`;
    } else if (tab === 'accuracy') {
      query = `select=*&${modeFilter}&order=correct.desc,time_seconds.asc&limit=10`;
    } else {
      query = `select=*&${modeFilter}&order=score.desc,time_seconds.asc&limit=10`;
    }
    const res = await fetch(`${SUPABASE_URL}/rest/v1/leaderboard?${query}`, {
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`
      },
      cache: 'no-store'
    });
    if (!res.ok) throw new Error(`Cloud fetch failed with status ${res.status}`);
    const data = await res.json();
    return data.map(d => ({
      name: d.player_name,
      score: d.score,
      correct: d.correct,
      time: Number(d.time_seconds),
      mode: d.mode || 'symbol'
    }));
  } catch (e) {
    console.warn('Cloud fetch error:', e);
    return null;
  }
}

function renderList(top, list, empty) {
  list.innerHTML = '';
  if (!top || top.length === 0) {
    empty.hidden = false;
    const modeNames = { symbol: '符号速答', number: '序号侦探', position: '位置拼图' };
    const modeLabel = modeNames[recordsModeTab] || '当前模式';
    empty.textContent = recordsTab === 'speed' 
      ? `暂无【${modeLabel}】速度记录：答对 8 题以上进入最快榜` 
      : `暂无【${modeLabel}】记录，去挑战一轮吧！`;
    return;
  }
  empty.hidden = true;
  top.forEach((r, i) => {
    const li = document.createElement('li');
    const medal = document.createElement('i');
    medal.className = `rank-medal${i < 3 ? ` rank-${i + 1}` : ''}`;
    medal.textContent = String(i + 1);
    const player = document.createElement('span');
    player.className = 'rname';
    player.textContent = String(r.name || '神秘玩家');
    const value = document.createElement('span');
    value.className = 'rval';
    const detail = document.createElement('span');
    detail.className = 'rsub';
    if (recordsTab === 'speed') { value.textContent = `${r.time} 秒`; detail.textContent = `答对 ${r.correct}/10`; }
    if (recordsTab === 'accuracy') { value.textContent = `${r.correct}/10 题`; detail.textContent = `用时 ${r.time} 秒`; }
    if (recordsTab === 'score') { value.textContent = `${r.score} 分`; detail.textContent = `答对 ${r.correct}/10`; }
    li.append(medal, player, value, detail);
    list.appendChild(li);
  });
}

async function renderRecords(showLoading = false) {
  const list = $('recordsList'), empty = $('recordsEmpty'), status = $('cloudSyncStatus');
  if (showLoading && status) {
    status.innerHTML = '<i class="sync-dot loading"></i> 正在拉取全网最新榜单...';
  }

  // 1. 先用本地对应模式的数据秒开
  const all = records.filter(r => (r.mode || 'symbol') === recordsModeTab);
  let localTop = [];
  if (recordsTab === 'speed') localTop = all.filter(r => r.correct >= 8).sort((a, b) => a.time - b.time).slice(0, 10);
  else if (recordsTab === 'accuracy') localTop = all.sort((a, b) => b.correct - a.correct || a.time - b.time).slice(0, 10);
  else localTop = all.sort((a, b) => b.score - a.score || a.time - b.time).slice(0, 10);
  renderList(localTop, list, empty);

  // 2. 异步拉取 Supabase 对应模式的全网实时排行榜刷新
  const cloudData = await fetchCloudRecords(recordsTab, recordsModeTab);
  if (cloudData && cloudData.length > 0) {
    renderList(cloudData, list, empty);
    if (status) status.innerHTML = `<i class="sync-dot"></i> 全网数据已同步 (${cloudData.length}条)`;
  } else if (cloudData && cloudData.length === 0) {
    renderList([], list, empty);
    if (status) status.innerHTML = '<i class="sync-dot"></i> 全网数据已同步 (暂无数据)';
  } else if (status) {
    status.innerHTML = '<i class="sync-dot offline"></i> 本地记录已载入';
  }
}

$('recordsButton').addEventListener('click', () => {
  $('recordsModal').hidden = false;
  document.body.style.overflow = 'hidden';
  if (['symbol', 'number', 'position'].includes(currentMode)) {
    recordsModeTab = currentMode;
    document.querySelectorAll('.record-mode-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.mode === recordsModeTab);
    });
  }
  renderRecords(true);
  $('closeRecords').focus();
});
$('refreshRecordsBtn')?.addEventListener('click', () => renderRecords(true));
$('closeRecords').addEventListener('click', () => closeModal('recordsModal'));
$('recordsDone').addEventListener('click', () => {
  const v = $('playerNameInput').value.trim().slice(0, 6);
  localStorage.setItem('elementPlayerName', v);
  $('playerNameInput').value = v;
  closeModal('recordsModal');
});
$('playerNameInput').value = localStorage.getItem('elementPlayerName') || '';
$('playerNameInput').addEventListener('change', () => {
  const v = $('playerNameInput').value.trim().slice(0, 6);
  localStorage.setItem('elementPlayerName', v);
  $('playerNameInput').value = v;
});
$('playerNameInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const v = $('playerNameInput').value.trim().slice(0, 6);
    localStorage.setItem('elementPlayerName', v);
    $('playerNameInput').value = v;
    closeModal('recordsModal');
  }
});
document.querySelectorAll('.record-mode-tab').forEach(t => t.addEventListener('click', () => {
  document.querySelectorAll('.record-mode-tab').forEach(x => x.classList.remove('active'));
  t.classList.add('active');
  recordsModeTab = t.dataset.mode;
  renderRecords(true);
}));
document.querySelectorAll('.records-tab').forEach(t => t.addEventListener('click', () => {
  document.querySelectorAll('.records-tab').forEach(x => x.classList.remove('active'));
  t.classList.add('active');
  recordsTab = t.dataset.tab;
  renderRecords(true);
}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){['quizModal','resultModal','howModal','recordsModal','duoModal'].forEach(id=>{if(!$(id).hidden)closeModal(id)})}if(! $('quizModal').hidden && /^[1-4]$/.test(e.key)){document.querySelectorAll('.answer-button')[Number(e.key)-1]?.click()}});

/* 双人对战 */
let duoMode=false,duoCode='',duoPlayerId=null,eventSource=null,opponent=null,localFinished=false,duoSubmode='symbol',duoTimerId=null,duoSeed=0,duoRng=null,optRng=null,nextQTimer=null;

function openDuoModal(){
  $('duoModal').hidden=false;document.body.style.overflow='hidden';
  $('duoIntro').hidden=false;$('duoWait').hidden=true;
  $('duoCodeInput').value='';
  $('duoReady').textContent='准备';$('duoReady').disabled=true;
  $('duoStatus').textContent='等待对手加入…';
  fetch('/api/ip').then(r=>r.json()).then(d=>{
    $('duoIpDisplay').textContent=`好友加入地址：http://${d.ip}:${d.port}`;
  }).catch(()=>{
    $('duoIpDisplay').textContent='好友加入地址：请先运行 start-duo-server.bat';
  });
  $('closeDuo').focus();
}

function duoApi(path,body){
  return fetch(path,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}).then(r=>r.json());
}

function connectEvents(code,playerId){
  if(eventSource)eventSource.close();
  eventSource=new EventSource(`/api/events?code=${code}&playerId=${playerId}`);
  eventSource.onmessage=e=>{handleDuoEvent(JSON.parse(e.data));};
  eventSource.onerror=()=>{};
}

function handleDuoEvent(msg){
  const r=msg.room;
  if(msg.type==='hello'||msg.type==='join'||msg.type==='ready'){
    const other=r.players.find(p=>p.id!==duoPlayerId);
    $('duoStatus').textContent=other?`${other.name} 已加入，请准备`:'等待对手加入…';
    $('duoReady').disabled=!other;
  }
  if(msg.type==='start'){
    closeModal('duoModal');
    startDuoGame(r.seed,r.range,r.submode);
  }
  if(msg.type==='update'||msg.type==='end'){
    opponent=r.players.find(p=>p.id!==duoPlayerId)||null;
    renderDuoHud();
  }
  if(msg.type==='end'){
    showDuoResult(r);
  }
}

function startDuoGame(seed,range,submode){
  duoMode=true;localFinished=false;opponent=null;
  duoSubmode=(submode==='number')?'number':'symbol';
  duoSeed=Number(seed)||0;duoRng=new SeededRandom(duoSeed);
  const limit=Number(range);
  pool=elements.filter(e=>e.number<=limit);
  questions=seededShuffle([...pool],duoRng).slice(0,10);
  current=score=combo=maxCombo=correct=0;lives=3;locked=false;roundStart=Date.now();
  $('duoHud').hidden=false;
  $('quizModal').hidden=false;document.body.style.overflow='hidden';
  startDuoCountdown();
  renderDuoHudSelf();renderQuestion();$('closeQuiz').focus();
}

function startDuoCountdown(){
  let left=60;
  $('duoTimer').textContent=left;
  clearInterval(duoTimerId);
  duoTimerId=setInterval(()=>{
    left--;
    if(left<=0){left=0;clearInterval(duoTimerId);duoTimerId=null;}
    $('duoTimer').textContent=left;
  },1000);
}

function stopDuoCountdown(){
  if(duoTimerId){clearInterval(duoTimerId);duoTimerId=null;}
}

function SeededRandom(seed){this.seed=seed;}
SeededRandom.prototype.next=function(){this.seed=(this.seed*9301+49297)%233280;return this.seed/233280;};

function seededShuffle(arr,rng){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(rng.next()*(i+1));
    const t=a[i];a[i]=a[j];a[j]=t;
  }
  return a;
}

function sendDuoUpdate(){
  if(!duoMode)return;
  duoApi('/api/update',{code:duoCode,playerId:duoPlayerId,score,correct,current,lives,finished:localFinished});
}

function renderDuoHudSelf(){
  if(!$('duoHud').hidden){
    $('selfScoreDuo').textContent=score;
    $('selfProgressDuo').style.width=`${Math.min(current/10,1)*100}%`;
  }
}

function renderDuoHud(){
  renderDuoHudSelf();
  if(opponent){
    $('opponentName').textContent=opponent.name||'对手';
    $('opponentScore').textContent=opponent.score||0;
    $('opponentProgress').style.width=`${Math.min(opponent.current/10,1)*100}%`;
  }
}

function showDuoWaiting(){
  stopDuoCountdown();
  $('questionHint').textContent='你已答完，等待对手…';
  $('questionTile').hidden=true;
  $('quizHeading').textContent='对战结算中';
  $('answers').innerHTML='';
  $('feedback').textContent='';
}

function showDuoResult(room){
  stopDuoCountdown();
  if(nextQTimer){clearTimeout(nextQTimer);nextQTimer=null;}
  const me=room.players.find(p=>p.id===duoPlayerId);
  const op=room.players.find(p=>p.id!==duoPlayerId);
  if(!me||!op){cleanupDuo();return;}
  const start=room.startTime||Date.now();
  const fmtT=t=>t?Math.round((t-start)/100)/10:null;
  const meTime=fmtT(me.finishTime);
  const opTime=op?fmtT(op.finishTime):null;
  const isWin=room.winnerId===me.id;
  const isLose=room.winnerId&&room.winnerId!==me.id;
  $('quizModal').hidden=true;
  $('resultModal').hidden=false;document.body.style.overflow='hidden';
  $('resultBadge').textContent=isWin?'WIN':(isLose?'LOSE':'TIE');
  $('resultTitle').textContent=isWin?`你赢了！用时 ${meTime} 秒`:(isLose?'对手先完成':'平局');
  $('resultCopy').textContent=`你 ${me.score} 分（${meTime!=null?meTime+' 秒':'未完成'}）vs ${op?op.name:'对手'} ${op?op.score:0} 分（${opTime!=null?opTime+' 秒':'未完成'}）`;
  $('finalScore').textContent=me.score;
  $('correctCount').textContent=`${me.correct} / 10`;
  $('maxCombo').textContent=maxCombo;
  $('resultTime').textContent=meTime!=null?meTime:'—';
  recordRound(me.score,me.correct,meTime!=null?meTime:60);
  localStorage.setItem('elementMastered',JSON.stringify([...mastered]));
  renderMap();updateHomeStats();
  cleanupDuo();
  $('againButton').focus();
}

function cleanupDuo(){
  duoMode=false;localFinished=false;opponent=null;
  stopDuoCountdown();
  if(nextQTimer){clearTimeout(nextQTimer);nextQTimer=null;}
  $('duoHud').hidden=true;
  if(eventSource){eventSource.close();eventSource=null;}
}

$('closeDuo').addEventListener('click',()=>{closeModal('duoModal');if(eventSource){eventSource.close();eventSource=null;}duoCode='';duoPlayerId=null;});
$('duoModeSymbol').addEventListener('click',()=>{duoSubmode='symbol';$('duoModeSymbol').classList.add('active');$('duoModeNumber').classList.remove('active');});
$('duoModeNumber').addEventListener('click',()=>{duoSubmode='number';$('duoModeNumber').classList.add('active');$('duoModeSymbol').classList.remove('active');});
$('duoCreate').addEventListener('click',async ()=>{
  const name=localStorage.getItem('elementPlayerName')||'玩家1';
  const res=await duoApi('/api/create',{name,range:$('rangeSelect').value,submode:duoSubmode});
  if(res.ok){
    duoCode=res.code;duoPlayerId=res.playerId;
    $('duoCodeDisplay').textContent=res.code;
    $('duoReady').textContent='准备';$('duoReady').disabled=true;
    $('duoStatus').textContent='等待对手加入…';
    $('duoIntro').hidden=true;$('duoWait').hidden=false;
    connectEvents(res.code,res.playerId);
  }else{
    alert('创建房间失败，请重试');
  }
});
$('duoJoin').addEventListener('click',async ()=>{
  const code=$('duoCodeInput').value.trim().toUpperCase();
  if(!code)return;
  const name=localStorage.getItem('elementPlayerName')||'玩家2';
  const res=await duoApi('/api/join',{code,name});
  if(res.ok){
    duoCode=code;duoPlayerId=res.playerId;
    $('duoCodeDisplay').textContent=code;
    $('duoIntro').hidden=true;$('duoWait').hidden=false;
    $('duoReady').textContent='准备';$('duoReady').disabled=false;
    $('duoStatus').textContent='已加入，请准备';
    connectEvents(code,res.playerId);
  }else{
    alert(res.error||'加入失败');
  }
});
$('duoReady').addEventListener('click',()=>{
  duoApi('/api/ready',{code:duoCode,playerId:duoPlayerId});
  $('duoReady').textContent='已准备';
  $('duoReady').disabled=true;
});

/* 作弊小标记（需要秘密开关激活，默认关闭） */
let cheatOn=false,cheatClicks=0,cheatTimer=null;

function applyCheatMark(){
  document.querySelectorAll('.answer-button').forEach(b=>b.classList.remove('cheat-mark'));
  if(!cheatOn||$('quizModal').hidden)return;
  const e=questions[current];
  const right=[...document.querySelectorAll('.answer-button')].find(b=>Number(b.dataset.number)===e.number);
  if(right)right.classList.add('cheat-mark');
}

function toggleCheat(){
  cheatOn=!cheatOn;
  applyCheatMark();
}

$('questionTile').addEventListener('click',()=>{
  cheatClicks++;
  clearTimeout(cheatTimer);
  cheatTimer=setTimeout(()=>cheatClicks=0,1500);
  if(cheatClicks>=5){cheatClicks=0;toggleCheat();}
});

document.addEventListener('keydown',e=>{
  if(e.key.toLowerCase()==='b'&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!e.shiftKey)toggleCheat();
});

renderMap();updateHomeStats();
