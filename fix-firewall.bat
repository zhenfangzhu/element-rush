@echo off
chcp 65001 > nul
>nul 2>&1 "%SYSTEMROOT%\system32\cacls.exe" "%SYSTEMROOT%\system32\config\system"
if '%errorlevel%' NEQ '0' (
  echo 正在请求管理员权限，请在弹出的窗口点"是"...
  echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\getadmin.vbs"
  echo UAC.ShellExecute "%~s0", "", "", "runas", 1 >> "%temp%\getadmin.vbs"
  "%temp%\getadmin.vbs"
  exit /B
)
if exist "%temp%\getadmin.vbs" del "%temp%\getadmin.vbs"
cd /d "%~dp0"

echo [1/3] 删除 Node.js 的阻止规则...
netsh advfirewall firewall delete rule name="Node.js JavaScript Runtime" >nul 2>nul
echo [2/3] 添加 8000 端口放行规则...
netsh advfirewall firewall delete rule name="元素游戏对战8000" >nul 2>nul
netsh advfirewall firewall add rule name="元素游戏对战8000" dir=in action=allow protocol=TCP localport=8000 >nul
echo [3/3] 完成！
echo.
echo 现在可以关闭此窗口，并重新运行 start-duo-server.bat 查看本机地址。
pause
