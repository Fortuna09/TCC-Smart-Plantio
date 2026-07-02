# 📸 GUIA COMPLETO - INSERÇÃO DE IMAGENS E CÓDIGOS NO TCC

**Data:** 02/07/2026  
**Autor:** Rafael Silva Fortuna  
**Orientador:** Prof. Dr. Paulo Alexandre Bressan

---

## 🎯 RESUMO EXECUTIVO

Este guia contém:
- ✅ Nomenclatura exata das 12 imagens necessárias
- ✅ 3 trechos de código já formatados (pronto para copiar)
- ✅ Instruções de onde inserir cada elemento no TCC
- ✅ Legendas ABNT prontas

---

## 📁 PARTE 1: NOMENCLATURA DAS IMAGENS

### **Local de armazenamento:**
Todas as imagens devem estar em:
```
TCC-Smart-Plantio-Novo/escita do tcc/imagens/
```

### **SCREENSHOTS OBRIGATÓRIAS (10 imagens):**

#### **Problema P-01: Bug Editar Talhão (Catastrófico)**
- ✅ `p01-antes-bug-editar-talhao.png`
  - **O que capturar:** Tela de edição de talhão mostrando erro ou não funcionando
  - **Repositório:** TCC (antigo)
  
- ✅ `p01-depois-edicao-funcionando.png`
  - **O que capturar:** Mesma tela, mas funcionando corretamente
  - **Repositório:** TCC-Smart-Plantio-Novo

---

#### **Problema P-02: Gráficos com Erro HTTP 500**
- ✅ `p02-antes-erro-500-graficos.png`
  - **O que capturar:** Console do navegador (F12) mostrando erro HTTP 500
  - **Repositório:** TCC (antigo)
  - **Dica:** Abra DevTools (F12), tente gerar gráfico, capture console com erro vermelho
  
- ✅ `p02-depois-graficos-funcionando.png`
  - **O que capturar:** Gráficos renderizados corretamente (barras, pizza, etc.)
  - **Repositório:** TCC-Smart-Plantio-Novo

---

#### **Problema P-03: Botão Editar Difícil de Localizar**
- ✅ `p03-antes-botao-tres-pontos.png`
  - **O que capturar:** Listagem de talhões mostrando ícone "..." quase invisível
  - **Repositório:** TCC (antigo)
  - **Destaque:** Marque com seta ou círculo vermelho o botão difícil de ver
  
- ✅ `p03-depois-icones-visiveis.png`
  - **O que capturar:** Mesma tela com ícones de editar e deletar claramente visíveis
  - **Repositório:** TCC-Smart-Plantio-Novo

---

#### **Problema P-04: Ausência de Botão Voltar**
- ✅ `p04-antes-sem-botao-voltar.png`
  - **O que capturar:** Formulário (criar/editar propriedade ou talhão) SEM botão "Voltar"
  - **Repositório:** TCC (antigo)
  
- ✅ `p04-depois-com-botao-voltar.png`
  - **O que capturar:** Mesmo formulário COM botão "Voltar" no topo (ícone de seta)
  - **Repositório:** TCC-Smart-Plantio-Novo

---

#### **Problema P-07: Ausência de Indicador de Carregamento**
- ✅ `p07-antes-sem-loading.png`
  - **O que capturar:** Formulário sendo enviado SEM nenhum feedback visual
  - **Repositório:** TCC (antigo)
  - **Dica:** Capture exatamente quando clicar em "Salvar"
  
- ✅ `p07-depois-com-loading.png`
  - **O que capturar:** Formulário mostrando spinner/CircularProgress durante envio
  - **Repositório:** TCC-Smart-Plantio-Novo
  - **Dica:** Capture mostrando o círculo de loading girando

---

#### **Gráficos de Métricas (2 imagens):**
- ✅ `grafico-tempo-medio-tarefas.png`
  - **Conteúdo:** Gráfico de barras comparando tempo Rodada 1 vs Rodada 2
  - **Dados:** Use Tabela 3 e Tabela 7 do TCC
  
- ✅ `grafico-evolucao-nps.png`
  - **Conteúdo:** Gráfico mostrando evolução NPS: -83.3 → +33.3
  - **Dados:** Use Tabela 5 e Tabela 8 do TCC

---

## 💻 PARTE 2: TRECHOS DE CÓDIGO FORMATADOS

### **CÓDIGO 1 — Correção do Bug P-01 (Editar Talhão)**

**Onde inserir:** Seção **6.3. Intervenções Técnicas Realizadas**  
**Posição:** Logo após descrever o problema P-01

```javascript
// ❌ ANTES (Bug catastrófico - Taxa de sucesso: 33,3%)
// Arquivo: frontend/src/scenes/glebas/editPage.jsx

const handleFormSubmit = async (values) => {
  try {
    // ⚠️ BUG: URL sem parâmetro :id - rota não bate com backend
    const response = await axios.put(`http://localhost:3000/glebas`, {
      name: values.nameGleba,
      area: values.area, 
      id: id  // ID enviado no body ao invés da URL
    }, {
      headers: {Authorization: `Bearer ${token}`}
    });

    if (response.status === 200) {  
      navigate(`/talhoes?message=${encodeURIComponent("2")}`);
    }
  } catch (error) {
    console.error("Erro ao editar talhão:", error);
  }
};

// ✅ DEPOIS (Corrigido - Taxa de sucesso: 100%)
// Arquivo: frontend/src/scenes/glebas/editPage.jsx

const handleFormSubmit = async (values) => {
  try {
    // ✅ CORREÇÃO: ID adicionado na URL conforme esperado pelo backend
    const response = await axios.put(`http://localhost:3000/glebas/${id}`, {
      name: values.nameGleba,
      area: values.area
    }, {
      headers: {Authorization: `Bearer ${token}`}
    });

    if (response.status === 200) {  
      navigate(`/talhoes?message=${encodeURIComponent("2")}`);
    }
  } catch (error) {
    if (error.response?.status === 401) {
      alert('Sessão expirada. Faça login novamente.');
      secureLocalStorage.removeItem('userData');
      secureLocalStorage.removeItem('auth_token');
      window.location.href = '/login';
    } else {
      console.error("Erro ao editar talhão:", error);
    }
  }
};
```

**Legenda sugerida:**
```
Código 1 — Correção do bug catastrófico P-01 (edição de talhões)
Problema identificado: URL da requisição PUT não incluía o parâmetro :id, causando 
incompatibilidade com a definição da rota no backend (router.put('/glebas/:id')).
Resultado: Taxa de sucesso aumentou de 33,3% (Rodada 1) para 100% (Rodada 2).

Fonte: Elaborado pelo autor, 2026.
```

---

### **CÓDIGO 2 — Implementação de Indicadores de Carregamento (P-07)**

**Onde inserir:** Seção **6.3. Intervenções Técnicas Realizadas**  
**Posição:** Ao descrever problemas de severidade média (P-07)

```javascript
// ❌ ANTES (Sem feedback visual)
// Arquivo: frontend/src/scenes/properties/formPage.jsx

const PropertiesForm = () => {
  const navigate = useNavigate(); 

  const handleFormSubmit = async (values) => {
    try {
      // ⚠️ Sem indicação visual de processamento
      const response = await axios.post("http://localhost:3000/properties", {
        name: values.namePropertie,
        area: values.area,          
        city: values.city,          
        email: userData.email
      }, {
        headers: {Authorization: `Bearer ${token}`}
      });
   
      if (response.status === 201) {
        navigate(`/propriedades?message=${encodeURIComponent("1")}`);
      }
    } catch (error) {
      console.error("Erro ao criar propriedade:", error);
    }
  };

  return (
    <Box m="20px">
      <Header title="Adicionar Propriedade" />
      <Formik onSubmit={handleFormSubmit}>
        {/* Formulário sem indicador de loading */}
      </Formik>
    </Box>
  );
};

// ✅ DEPOIS (Com feedback visual de carregamento)
// Arquivo: frontend/src/scenes/properties/formPage.jsx

import { CircularProgress } from "@mui/material";

const PropertiesForm = () => {
  const navigate = useNavigate(); 
  const [isSubmitting, setIsSubmitting] = useState(false);  // ✅ Estado de loading

  const handleFormSubmit = async (values) => {
    setIsSubmitting(true);  // ✅ Ativa indicador visual
    try {
      const response = await axios.post("http://localhost:3000/properties", {
        name: values.namePropertie,
        area: values.area,          
        city: values.city,          
        email: userData.email
      }, {
        headers: {Authorization: `Bearer ${token}`}
      });
   
      if (response.status === 201) {
        await new Promise(resolve => setTimeout(resolve, 800));
        navigate(`/propriedades?message=${encodeURIComponent("1")}`);
      }
    } catch (error) {
      if (error.response?.status === 401) {
        alert('Sessão expirada. Faça login novamente.');
        secureLocalStorage.removeItem('userData');
        secureLocalStorage.removeItem('auth_token');
        window.location.href = '/login';
      } else {
        console.error("Erro ao criar propriedade:", error);
      }
    } finally {
      setIsSubmitting(false);  // ✅ Desativa indicador após resposta
    }
  };

  return (
    <Box m="20px">
      <Header title="Adicionar Propriedade" />
      <Formik onSubmit={handleFormSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {/* Formulário */}
            <Box mt="20px">
              <Button 
                type="submit" 
                color="secondary" 
                variant="contained"
                disabled={isSubmitting}  // ✅ Desabilita durante envio
              >
                {isSubmitting ? (
                  <>
                    <CircularProgress size={20} sx={{ mr: 1 }} />
                    Salvando...
                  </>
                ) : (
                  "Salvar Propriedade"
                )}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
```

**Legenda sugerida:**
```
Código 2 — Implementação de indicadores de carregamento (P-07)
Adiciona estado isSubmitting e componente CircularProgress para fornecer feedback 
visual durante requisições assíncronas. Elimina percepção de travamento reportada 
por 83% dos participantes na Rodada 1.

Fonte: Elaborado pelo autor, 2026.
```

---

### **CÓDIGO 3 — Configuração Dinâmica CORS para Produção**

**Onde inserir:** Seção **6.3. Intervenções Técnicas Realizadas**  
**Posição:** Ao mencionar melhorias de configuração/deploy

```javascript
// ❌ ANTES (Configuração hardcoded - impossibilita deploy)
// Arquivo: backend/index.js

const express = require("express");
const cors = require('cors');
const app = express();

// ⚠️ URL hardcoded - não funciona em produção
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

const port = 3000;  // ⚠️ Porta fixa

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

// ✅ DEPOIS (Configuração adaptativa para dev e produção)
// Arquivo: backend/index.js

const express = require("express");
const cors = require('cors');
require('dotenv').config();
const app = express();

// ✅ CORS dinâmico: desenvolvimento vs produção
app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? [process.env.CORS_ORIGIN]  // ✅ URL de produção via variável de ambiente
    : ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// ✅ Porta dinâmica (Heroku, Railway, Render)
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
```

**Legenda sugerida:**
```
Código 3 — Configuração de CORS e porta dinâmica para deploy
Permite que o sistema seja implantado em ambiente de produção (Vercel, Railway, 
Render) sem necessidade de modificação manual do código-fonte, utilizando variáveis 
de ambiente para configuração adaptativa.

Fonte: Elaborado pelo autor, 2026.
```

---

## 📊 PARTE 3: LEGENDAS PARA AS IMAGENS (ABNT)

### **Figura 3 — Problema P-01: Bug na edição de talhões**
```
Figura 3 — Tela de edição de talhões antes e depois da correção do bug P-01
(a) Rodada 1: requisição falhava devido a incompatibilidade de rota
(b) Rodada 2: edição funciona corretamente após correção da URL

Fonte: Elaborado pelo autor, 2026.
```

---

### **Figura 4 — Problema P-02: Gráficos com erro HTTP 500**
```
Figura 4 — Correção da renderização de gráficos financeiros
(a) Rodada 1: erro HTTP 500 impedia exibição dos gráficos
(b) Rodada 2: gráficos renderizam corretamente com dados reais

Fonte: Elaborado pelo autor, 2026.
```

---

### **Figura 5 — Problema P-03: Botão de edição difícil de localizar**
```
Figura 5 — Evolução da interface de edição de talhões
(a) Rodada 1: ícone de três pontos difícil de localizar
(b) Rodada 2: ícones de edição e exclusão claramente visíveis

Fonte: Elaborado pelo autor, 2026.
```

---

### **Figura 6 — Problema P-04: Ausência de botão voltar**
```
Figura 6 — Implementação de botão "Voltar" em formulários
(a) Rodada 1: ausência de navegação clara forçava uso do botão do navegador
(b) Rodada 2: botão "Voltar" explícito facilita navegação

Fonte: Elaborado pelo autor, 2026.
```

---

### **Figura 7 — Problema P-07: Indicador de carregamento**
```
Figura 7 — Implementação de feedback visual de carregamento
(a) Rodada 1: ausência de indicadores causava percepção de travamento
(b) Rodada 2: spinner circular indica processamento em andamento

Fonte: Elaborado pelo autor, 2026.
```

---

### **Figura 1 — Gráfico de tempo médio (já previsto no TCC)**
```
Figura 1 — Comparação de tempo médio por tarefa (Rodada 1 vs. Rodada 2)
Redução média de 27,6% no tempo de execução após implementação das melhorias.
Destaque para tarefa T5 (Gerar Gráfico) com redução de 42,1%.

Fonte: Elaborado pelo autor, 2026.
```

---

### **Figura 2 — Gráfico NPS (já previsto no TCC)**
```
Figura 2 — Evolução do Net Promoter Score (NPS)
Melhoria de 116,6 pontos percentuais: de −83,3 (rejeição crítica) 
na Rodada 1 para +33,3 (boa aceitação) na Rodada 2.

Fonte: Elaborado pelo autor, 2026.
```

---

## 🚀 INSTRUÇÕES DE USO DESTE GUIA

### **PASSO 1: Tire os screenshots**
1. Abra o repositório **TCC** (antigo)
2. Execute `npm start` no backend e `npm run dev` no frontend
3. Capture as telas "ANTES"
4. Repita com **TCC-Smart-Plantio-Novo** para telas "DEPOIS"
5. Salve todas em `escita do tcc/imagens/` com os nomes exatos

### **PASSO 2: Crie os gráficos**
Use Excel, Google Sheets ou Python:
- Gráfico 1: Barras agrupadas (tempo Rodada 1 vs 2)
- Gráfico 2: Linha ou barras (NPS -83.3 → +33.3)

### **PASSO 3: Me informe quando estiver pronto**
Diga: "Rafael, as imagens estão prontas!"

Eu vou:
- ✅ Verificar se os nomes estão corretos
- ✅ Inserir todas as imagens no TCC
- ✅ Inserir os 3 códigos formatados
- ✅ Adicionar todas as legendas ABNT
- ✅ Atualizar a Lista de Figuras
- ✅ Numerar tudo sequencialmente

---

## 📝 CHECKLIST FINAL

**Antes de me avisar, confirme:**

- [ ] Pasta `imagens/` criada
- [ ] 10 screenshots salvos com nomes corretos
- [ ] 2 gráficos criados
- [ ] Todos os arquivos em formato PNG
- [ ] Resolução mínima 1920x1080 (para screenshots)
- [ ] Imagens não estão cortadas/borradas

---

**Quando estiver tudo pronto, me avise e eu cuido do resto! 🚀**
