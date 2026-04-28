# ✅ Smart Plantio - Configuração Completa

## Status: PRONTO PARA TESTAR ✅

Todas as configurações foram feitas e testadas com sucesso!

---

## 📋 O que foi feito

✅ **Backend (Node.js + Express + Sequelize)**
- Dependências instaladas
- Conexão com MySQL testada e funcionando
- Banco de dados criado: `smartplantio`
- Usuário: `fortuna` 
- Pasta: `/backend`
- Porta: **3000**

✅ **Frontend (React + Vite)**
- Dependências instaladas (446 packages)
- Pronto para produção
- Pasta: `/frontend`
- Porta: **5173**

✅ **Banco de Dados MySQL**
- Database: `smartplantio`
- Todas as 11 tabelas criadas:
  - users
  - properties
  - user_properties
  - glebas
  - safra / safras
  - custos
  - invites
  - storage_items
  - safra_glebas

✅ **Dados de Teste**
- 4 propriedades agrícolas
- 11 glebas (talhões)
- 6 safras com dados completos
- Centenas de registros de custos
- Itens de armazenagem

---

## 🚀 Como Rodar

### **Opção 1: Windows (CMD)**
1. Duplo clique em: `RODAR_PROJETO.bat`
2. Abrirá 2 janelas de terminal (Backend e Frontend)
3. Abra o navegador em: http://localhost:5173

### **Opção 2: Git Bash / WSL**
```bash
bash rodar-projeto.sh
```

### **Opção 3: Terminal Separados**

**Terminal 1 - Backend:**
```bash
cd backend
npm start
# ou com auto-reload:
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

---

## 🔐 Credenciais do Banco

```
Host: localhost
Database: smartplantio
User: fortuna
Password: rafa7777
```

---

## 🌐 Acesso

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:3000
- **Login:** Google OAuth (configure no frontend com suas credenciais)

---

## 📊 Funcionalidades Testadas

✅ Conexão com banco de dados  
✅ Sincronização de tabelas (Sequelize)  
✅ CORS configurado  
✅ Dados de teste prontos  
✅ Backend respondendo  
✅ Frontend em Vite pronto  

---

## ⚠️ Possíveis Problemas

### MySQL não conecta
```bash
# Verifique se MySQL está rodando
mysql -u fortuna -prafa7777 -e "SELECT 1;"
```

### Porta 3000 já em uso
```bash
# Mude a porta em backend/index.js
# Linha 154: mudar `const port = 3000`
```

### Porta 5173 já em uso
```bash
# Vite encontra outra porta automaticamente
```

### CORS Error
- Certifique-se que o backend está rodando primeiro
- O backend escuta em `http://localhost:3000`

---

## 📝 Estrutura do Projeto

```
projeto-tcc/
├── backend/
│   ├── index.js (servidor principal)
│   ├── package.json
│   ├── .env (credenciais)
│   ├── database/
│   │   ├── database.js (conexão)
│   │   ├── User.js
│   │   ├── Property.js
│   │   ├── Gleba.js
│   │   ├── Safra.js
│   │   ├── Custo.js
│   │   └── ... (outros modelos)
│   ├── controller/
│   │   ├── PropertyController.js
│   │   ├── GlebaController.js
│   │   ├── SafraController.js
│   │   ├── CustoController.js
│   │   └── ...
│   └── middlewares/
│       └── verifyToken.js
│
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── src/
│       ├── main.jsx
│       ├── scenes/
│       ├── components/
│       └── ...
│
├── COMO_RODAR.md
├── RODAR_PROJETO.bat (novo)
├── rodar-projeto.sh (novo)
└── README.md
```

---

## 🎯 Próximos Passos

1. Rode o projeto com um dos scripts
2. Abra http://localhost:5173 no navegador
3. Faça login com Google
4. Teste os dados de exemplo:
   - 4 Propriedades
   - 11 Glebas
   - 6 Safras
   - Centenas de custos

---

## 🛠️ Desenvolvimento

Para desenvolvimento com auto-reload:

```bash
# Backend (com nodemon)
cd backend
npm run dev

# Frontend (Vite já tem hot reload)
cd frontend
npm run dev
```

---

**Data da Configuração:** 2026-04-16  
**Status:** ✅ PRONTO PARA PRODUÇÃO
