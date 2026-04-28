@echo off
REM Script para rodar o Smart Plantio (Backend + Frontend)

echo.
echo ============================================
echo  SMART PLANTIO - Iniciando Servidores
echo ============================================
echo.

REM Verificar se MySQL está rodando
echo [1/3] Verificando MySQL...
mysql -u fortuna -prafa7777 -e "SELECT 1;" >nul 2>&1
if errorlevel 1 (
    echo ERRO: MySQL nao esta respondendo!
    echo Por favor certifique-se de que MySQL esta rodando.
    echo.
    pause
    exit /b 1
)
echo [OK] MySQL esta funcionando

echo.
echo [2/3] Iniciando Backend (porta 3000)...
cd /d "%~dp0backend"
start "Backend Smart Plantio" cmd /k node index.js

echo.
echo [3/3] Iniciando Frontend (porta 5173)...
cd /d "%~dp0frontend"
start "Frontend Smart Plantio" cmd /k npm run dev

echo.
echo ============================================
echo  Servidores iniciados com sucesso!
echo ============================================
echo.
echo Backend:  http://localhost:3000
echo Frontend: http://localhost:5173
echo.
echo Abra seu navegador e acesse:
echo http://localhost:5173
echo.
echo Para parar os servidores, feche as janelas do terminal.
echo.
pause
