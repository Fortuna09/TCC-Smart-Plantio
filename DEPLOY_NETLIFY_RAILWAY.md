# Deploy passo-a-passo: Frontend (Netlify) + Backend (Railway)

Este documento descreve os passos mínimos para colocar o projeto em produção e começar os testes de usabilidade.

## 1) Preparação local

1. Confirme que está com as últimas alterações commitadas:

```bash
cd c:\Users\rafin\Documents\Faculdade\TCC\projeto-tcc
git add .
git commit -m "chore: prepare repo for deploy"
git push origin master
```

2. Build local do frontend (para testar):

```bash
cd frontend
npm install
npm run build
# resultado: frontend/dist
```

3. Testar backend localmente (com .env local):

Crie `backend/.env` com valores locais (não commitar). Exemplo:

```
PORT=3000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=suasenha
DB_NAME=smartplantio
CORS_ORIGIN=http://localhost:5173
GOOGLE_CLIENT_ID=seu-google-client-id
GOOGLE_CLIENT_SECRET=seu-google-client-secret
```

```bash
cd backend
npm install
npm run dev   # usa nodemon, ou npm start
```

Abra `http://localhost:3000` e verifique rotas (por exemplo `GET /user` com token válido).

---

## 2) Deploy Frontend no Netlify

1. Acesse https://app.netlify.com e conecte sua conta GitHub.
2. Clique em "New site from Git" → selecione o repositório `Fortuna09/TCC-Smart-Plantio`.
3. Em "Basic build settings" defina:
   - **Base directory**: `frontend`
   - **Build command**: `npm ci && npm run build`
   - **Publish directory**: `dist`
4. Em "Environment variables" (Netlify) adicione:
   - `VITE_API_URL` = `https://<seu-backend>.railway.app` (ou URL do backend)
   - `VITE_GOOGLE_CLIENT_ID` = `<seu-google-client-id>`
5. Deploy. Netlify fará deploy automático a cada push na branch selecionada.

Nota: o `VITE_` prefix é necessário para o Vite expor a variável ao frontend.

---

## 3) Deploy Backend no Railway

1. Acesse https://railway.app e conecte sua conta GitHub.
2. Create Project -> Deploy From GitHub -> escolha o repositório e a pasta `backend`.
3. Em Railway, adicione o plugin MySQL (Add Plugin -> MySQL). O Railway cria DB e disponibiliza credenciais.
4. Em Environment variables do projeto Railway, adicione (use as credenciais do MySQL criadas):
   - `PORT` = `3000`
   - `NODE_ENV` = `production`
   - `DB_HOST` = `<host do mysql>`
   - `DB_PORT` = `<port>`
   - `DB_USER` = `<user>`
   - `DB_PASSWORD` = `<password>`
   - `DB_NAME` = `<database>`
   - `CORS_ORIGIN` = `https://<seu-frontend>.netlify.app`
   - `GOOGLE_CLIENT_ID` = `<seu-google-client-id>`
   - `GOOGLE_CLIENT_SECRET` = `<seu-google-client-secret>`

5. Deploy automático: Railway detecta `package.json` e executa `npm install` e `npm start`.
6. Após deploy, copie a URL pública do serviço (ex: `https://project-xxxxx.up.railway.app`) e coloque em `VITE_API_URL` no Netlify.

---

## 4) Configurar Google OAuth (Console Google Cloud)

1. Acesse https://console.cloud.google.com/apis/credentials
2. Se já tiver um OAuth Client (type: Web application), edite; senão, crie novo.
3. Em "Authorized JavaScript origins" adicione:
   - `http://localhost:5173` (para testes locais)
   - `https://<seu-frontend>.netlify.app`
4. Em "Authorized redirect URIs" (se aplicável) adicione as URIs que sua aplicação usa; para o flow baseado em client-side, geralmente não precisa de redirect (mas coloque a URL se usar redirecionamento).
5. Copie `Client ID` e coloque em Netlify (`VITE_GOOGLE_CLIENT_ID`) e em Railway (`GOOGLE_CLIENT_ID`).

---

## 5) Testes básicos após deploy

1. Abra site Netlify e tente fazer login com Google.
2. Use DevTools (F12) → Console e Network para ver chamadas para `VITE_API_URL`.
3. Verifique respostas 200/401/500 e corrija configurações de CORS se necessário.

---

## 6) Dicas de troubleshooting

- Se CORS bloqueou, confirme `CORS_ORIGIN` no Railway é exatamente o domínio do Netlify (incluindo https://).
- Se o banco não conecta, abra logs do Railway e verifique credenciais.
- Se o frontend não encontra a API, verifique `VITE_API_URL` configurado no Netlify (sem barra no fim).

---

## 7) Comandos úteis

```bash
# Build frontend
cd frontend
npm ci
npm run build

# Rodar backend local
cd backend
npm ci
npm run dev

# Commit e push
cd ..
git add .
git commit -m "chore: prepare deploy configs"
git push origin master
```

---

Se quiser, eu configuro os arquivos de apoio no repositório (.env.example, .gitignore) e removo qualquer `.env` sensível que esteja commitado. Quer que eu faça isso agora?