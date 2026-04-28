# 📋 PLANO DE TESTES DE USABILIDADE - TCC Smart Plantio

## 🎯 OBJETIVO
Validar a aplicação Smart Plantio através de testes estruturados com usuários reais e coleta de dados para melhoria contínua.

---

## 📅 CRONOGRAMA GERAL

```
FASE 1: DEPLOY (28-29 abril)         ⏱️ 3-4 horas
FASE 2: TESTES FUNCIONALIDADE (30 abril)  ⏱️ 2 horas
FASE 3: TESTES COM USUÁRIOS (1-8 maio)    ⏱️ 8 horas (distribuído)
FASE 4: CORREÇÕES (9-15 maio)             ⏱️ 16 horas
FASE 5: TESTES VALIDAÇÃO (16-22 maio)     ⏱️ 8 horas (distribuído)
FASE 6: TESTES APLICABILIDADE (23 maio - 30 junho) ⏱️ 4 semanas
```

---

## FASE 1: DEPLOY NA NUVEM ☁️

### PASSO 1: Deploy do Frontend (Netlify)

**Requisitos:**
- [ ] Conta GitHub
- [ ] Conta Netlify (grátis)
- [ ] Projeto commitado

**Instruções:**

1. **Conectar Netlify ao GitHub:**
   ```
   1. Acesse https://app.netlify.com
   2. Clique "Connect to Git" → GitHub
   3. Autorize Netlify
   4. Selecione repositório: Fortuna09/TCC-Smart-Plantio
   ```

2. **Configurar Build Settings:**
   ```
   Build Command: npm install && npm run build
   Publish Directory: dist
   ```

3. **Variáveis de Ambiente:**
   ```
   VITE_API_URL = https://seu-backend.railway.app
   VITE_GOOGLE_CLIENT_ID = (seu Google OAuth ID)
   ```

4. **Deploy automático:**
   - Netlify fará deploy automático a cada push no GitHub
   - URL será algo como: `https://seu-projeto.netlify.app`

---

### PASSO 2: Deploy do Backend (Railway)

**Requisitos:**
- [ ] Conta Railway (grátis)
- [ ] Backend commitado

**Instruções:**

1. **Criar Projeto no Railway:**
   ```
   1. Acesse https://railway.app
   2. Clique "Start a New Project"
   3. Selecione "Deploy from GitHub"
   4. Autorize e selecione repositório
   ```

2. **Adicionar banco de dados MySQL:**
   ```
   1. Em "Add" → MySQL
   2. Railway criará automaticamente
   3. Copiar credenciais (DATABASE_URL)
   ```

3. **Configurar Variáveis de Ambiente (.env):**
   ```
   NODE_ENV=production
   PORT=3000
   
   DB_HOST=<railway-mysql-host>
   DB_PORT=<railway-mysql-port>
   DB_USER=<railway-mysql-user>
   DB_PASSWORD=<railway-mysql-password>
   DB_NAME=<railway-mysql-database>
   
   CORS_ORIGIN=https://seu-frontend.netlify.app
   
   GOOGLE_CLIENT_ID=<seu-google-oauth-id>
   GOOGLE_CLIENT_SECRET=<seu-google-oauth-secret>
   ```

4. **Deploy:**
   - Railway faz deploy automático ao reconhecer `package.json`
   - URL será: `https://seu-backend-production.up.railway.app`

---

### PASSO 3: Atualizar Configurações de CORS

**Arquivo:** `backend/index.js`

Substituir:
```javascript
// ❌ ANTES (apenas localhost)
origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175']

// ✅ DEPOIS (localhost + produção)
origin: process.env.NODE_ENV === 'production' 
  ? [process.env.CORS_ORIGIN]
  : ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175']
```

---

## FASE 2: TESTES DE FUNCIONALIDADE ✅

**Executor:** Você (desenvolvedor)  
**Duração:** 2 horas  
**Ambiente:** Sistema em produção (Netlify + Railway)

### Checklist de Testes Funcionais

- [ ] **Autenticação**
  - [ ] Login com Google funciona
  - [ ] Token salvo corretamente
  - [ ] Logout funciona
  - [ ] Re-login mantém dados salvos

- [ ] **Propriedades**
  - [ ] Criar propriedade nova
  - [ ] Editar propriedade existente
  - [ ] Deletar propriedade
  - [ ] Listar propriedades sem erros
  - [ ] Compartilhar propriedade com outro usuário

- [ ] **Custos**
  - [ ] Criar custo em propriedade
  - [ ] Editar custo
  - [ ] Deletar custo
  - [ ] Gráfico de custos atualiza
  - [ ] Total de custos correto

- [ ] **Glebas e Safras**
  - [ ] Criar gleba
  - [ ] Criar safra
  - [ ] Associar gleba à safra
  - [ ] Histórico de safras aparece

- [ ] **Dashboard**
  - [ ] Gráficos carregam
  - [ ] Dashboard projetado vs realizado
  - [ ] Filtros funcionam

- [ ] **Segurança**
  - [ ] Usuário A não vê dados de Usuário B
  - [ ] Sem permissão → erro apropriado
  - [ ] Token inválido → logout automático

**Como reportar bugs:**
```
- Abra DevTools (F12)
- Screenshot da tela
- Mensagem do console (se houver erro)
- Passos para reproduzir
```

---

## FASE 3: TESTES COM USUÁRIOS REAIS 👥

### 3.1 Recrutamento de Usuários

**Perfis necessários (5-10 pessoas):**

- [ ] 3x Agricultores/Gestores de propriedade (nosso público-alvo)
- [ ] 2x Amigos/Colegas com experiência tech (usuário médio)
- [ ] 2-3x Professores/Avaliadores (especialistas)
- [ ] 1x Pessoa não-tech (teste de acessibilidade)

**Como recrutar:**
```
1. Agricultores: Contato direto com sindicatos, cooperativas
2. Amigos: Redes sociais, WhatsApp
3. Professores: Orientador, banca
4. Não-tech: Pais, avós, parentes
```

---

### 3.2 Script de Teste (30 minutos por pessoa)

**Antes de iniciar:**
```
- Explicar: "Vamos testar uma plataforma de gestão de propriedades"
- Importante: "Não é teste de você, é teste do app"
- Assegurar que pode falar tudo (positivo/negativo)
- Pedir permissão para coletar dados
```

**PARTE 1: Aquecimento (3 min)**
```
1. Fale seu nome e profissão
2. Você usa aplicativos agrícolas?
3. Qual sua experiência com tecnologia? (1-5)
```

**PARTE 2: Tarefas Guiadas (20 min)**

Dar uma tarefa por vez, SEM AJUDA:
```
⏱️ TAREFA 1 (5 min): "Crie uma propriedade nova chamada 'Fazenda Teste'"
   - Medir: tempo, cliques errados, comentários

⏱️ TAREFA 2 (5 min): "Adicione 3 custos diferentes (sementes, adubo, mão de obra)"
   - Medir: entendimento, dificuldade com valores

⏱️ TAREFA 3 (5 min): "Gere um relatório/visualize os custos totais"
   - Medir: conseguiu achar a informação?

⏱️ TAREFA 4 (5 min): "Convide um colega para acessar a propriedade"
   - Medir: entendimento do convite, usabilidade
```

**PARTE 3: Feedback Qualitativo (7 min)**
```
1. O que você achou do app? (1-5 ⭐)
2. Qual foi a parte mais confusa?
3. Qual foi a parte mais fácil?
4. O que você mudaria?
5. Você usaria em sua propriedade?
```

---

### 3.3 Formulário de Coleta de Dados

**Use arquivo:** `COLETA_DADOS_TESTE.md` (criado abaixo)

---

## FASE 4: ANÁLISE DE FEEDBACK E CORREÇÕES 🔧

**Com os dados coletados:**

1. **Análise Quantitativa:**
   ```
   - Tempo médio por tarefa
   - Taxa de sucesso (% que conseguiram completar)
   - Satisfação média (estrelas)
   - Quantidade de erros
   ```

2. **Análise Qualitativa:**
   ```
   - Problemas mais frequentes
   - Sugestões mais comuns
   - Funcionalidades desejadas
   ```

3. **Priorização de Fixes:**
   ```
   Crítico: Impede conclusão de tarefa
   Importante: Confunde usuário
   Nice-to-have: Melhoria futura
   ```

4. **Implementar Correções**

---

## FASE 5: TESTES DE VALIDAÇÃO 🔄

**Após correções, testar novamente com:**
- [ ] 2-3 usuários iniciais (mesmas tarefas)
- [ ] Medir se tempo/erros diminuíram
- [ ] Validar se melhorias resolveram problemas

---

## FASE 6: TESTES DE APLICABILIDADE 🌱

**4 semanas usando de verdade:**

- [ ] Você OU um agricultor real usa sistema
- [ ] Registra dados de safra REAL
- [ ] Coleta métricas:
  - Tempo de aprendizado inicial
  - Frequência de uso
  - Tempo economizado
  - Decisões melhoradas
  - Bugs encontrados

---

## 📊 DOCUMENTOS DE SUPORTE

- `COLETA_DADOS_TESTE.md` - Formulário para cada usuário
- `ANALISE_FEEDBACK.md` - Template de análise
- `BUGS_ENCONTRADOS.md` - Log de issues
- `MELHORIAS_IMPLEMENTADAS.md` - Changelog

---

## ✅ CHECKLIST DE CONCLUSÃO

- [ ] Deploy Netlify + Railway funcionando
- [ ] Testes funcionais passando
- [ ] 5-10 usuários testados (Fase 3)
- [ ] Dados coletados e analisados
- [ ] Principais bugs corrigidos
- [ ] Testes de validação feitos
- [ ] Sistema em uso real (4 semanas)
- [ ] Relatório final preparado

