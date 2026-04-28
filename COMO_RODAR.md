# Como Rodar o Smart Plantio

## Pré-requisitos

1. **Node.js** (versão 18+) - https://nodejs.org/
2. **MySQL** instalado e rodando
3. **Banco de dados** criado

---

## Passo 1: Configurar o Banco de Dados

### Criar o banco de dados MySQL:
```sql
CREATE DATABASE smartplantio;
```

### Executar o script de criação das tabelas:
```bash
cd backend
mysql -u root -p smartplantio < scriptBanco.sql
```

**OU** o Sequelize vai criar as tabelas automaticamente (descomente as linhas 134-142 no `backend/index.js` para sincronizar).

---

## Passo 2: Configurar as Variáveis de Ambiente

O arquivo `backend/.env` já está configurado. Se precisar alterar a senha do MySQL, edite:

```env
DB_NAME=smartplantio
DB_USER=root
DB_PASSWORD=SUA_SENHA_AQUI
DB_HOST=localhost
```

---

## Passo 3: Instalar Dependências

### Terminal 1 - Backend:
```bash
cd backend
npm install
```

### Terminal 2 - Frontend:
```bash
cd frontend
npm install
```

---

## Passo 4: Rodar a Aplicação

### Terminal 1 - Backend (porta 3000):
```bash
cd backend
node index.js
```

Você deve ver:
```
Servidor rodando na porta 3000
Conexão feita com o banco de dados!
```

### Terminal 2 - Frontend (porta 5173):
```bash
cd frontend
npm run dev
```

Você deve ver:
```
VITE v5.4.1  ready in XXX ms

➜  Local:   http://localhost:5173/
```

---

## Passo 5: Acessar a Aplicação

Abra o navegador em: **http://localhost:5173**

Faça login com sua conta Google.

---

## Possíveis Erros

### Erro: "ECONNREFUSED" no backend
- O MySQL não está rodando
- Solução: Inicie o serviço MySQL

### Erro: "Access denied for user 'root'"
- Senha incorreta do MySQL
- Solução: Edite `backend/.env` com a senha correta

### Erro: "Unknown database 'smartplantio'"
- Banco não existe
- Solução: Crie com `CREATE DATABASE smartplantio;`

### Erro: "CORS" no frontend
- Backend não está rodando
- Solução: Inicie o backend primeiro

---

## Scripts Úteis

```bash
# Rodar backend em modo watch (reinicia automático)
cd backend
node --watch index.js

# Rodar frontend
cd frontend
npm run dev

# Build do frontend para produção
cd frontend
npm run build
```
