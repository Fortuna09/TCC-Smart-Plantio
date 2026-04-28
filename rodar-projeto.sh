#!/bin/bash

# Script para rodar Smart Plantio (Backend + Frontend)

echo ""
echo "============================================"
echo "  SMART PLANTIO - Iniciando Servidores"
echo "============================================"
echo ""

# Verificar se MySQL está rodando
echo "[1/3] Verificando MySQL..."
mysql -u fortuna -prafa7777 -e "SELECT 1;" > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "ERRO: MySQL não está respondendo!"
    echo "Por favor certifique-se de que MySQL está rodando."
    exit 1
fi
echo "[OK] MySQL está funcionando"

echo ""
echo "[2/3] Iniciando Backend (porta 3000)..."
cd "$(dirname "$0")/backend"
node index.js &
BACKEND_PID=$!

echo ""
echo "[3/3] Iniciando Frontend (porta 5173)..."
cd "$(dirname "$0")/frontend"
npm run dev &
FRONTEND_PID=$!

echo ""
echo "============================================"
echo "  Servidores iniciados com sucesso!"
echo "============================================"
echo ""
echo "Backend:  http://localhost:3000"
echo "Frontend: http://localhost:5173"
echo ""
echo "Abra seu navegador em:"
echo "http://localhost:5173"
echo ""
echo "Para parar os servidores, pressione Ctrl+C"
echo ""

# Aguardar processos
wait $BACKEND_PID $FRONTEND_PID
