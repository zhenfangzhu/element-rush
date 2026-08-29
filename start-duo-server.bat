@echo off
chcp 65001 > nul
cd /d "%~dp0"
echo 正在启动局域网对战服务器（端口 8000）...
node server.js
pause
