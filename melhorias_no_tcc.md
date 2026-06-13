# 📋 CHECKLIST DE MELHORIAS - TCC SMART PLANTIO

**Status**: Em desenvolvimento  
**Fase atual**: Referencial Teórico  
**Data de revisão**: 2026-05-25

---

## 🎯 OBJETIVO DESTE DOCUMENTO

Consolidar todas as recomendações para tornar o TCC **academicamente rigoroso**, fundamentado em normas científicas e pronto para apresentação/defesa.

---

## ✅ PONTOS FORTES ATUAIS

- [x] Tema válido e bem fundamentado
- [x] Introdução e justificativa sólidas
- [x] Metodologia prática está clara (12 tarefas bem pensadas)
- [x] Métricas adequadas (quantitativas + qualitativas)
- [x] Referências bem posicionadas (ABNT)
- [x] Linguagem técnica apropriada
- [x] Auto-análise dos roteiros excelente

---

## ⚠️ CRÍTICAS ESTRUTURAIS A CORRIGIR

### 1. FALTA SEÇÃO FORMAL DE METODOLOGIA

**O que está faltando:**
- [ ] Definição explícita do tipo de pesquisa (qualitativa? quantitativa? mista?)
- [ ] Design experimental (pré-teste e pós-teste com mesmo grupo ou grupos diferentes?)
- [ ] Definição clara de População e Amostra
- [ ] Critérios de inclusão/exclusão de participantes
- [ ] Instrumentos de coleta de dados (formulário, observação, gravação?)
- [ ] Procedimento passo-a-passo

**Por que importa:**
> Um comitê de TCC avalia o rigor metodológico. Sem essa seção, parece mais um "projeto prático" do que "pesquisa científica".

**O que escrever:**
```markdown
4. METODOLOGIA

4.1 Tipo de Pesquisa
Esta pesquisa classifica-se como mista (qualitativa e quantitativa), 
utilizando design experimental pré-teste e pós-teste com grupo único.

4.2 População e Amostra
População: Usuários de software agrícola no Brasil
Amostra: [VOCÊ PREENCHERÁ COM SEUS 6 PARTICIPANTES]

4.3 Critérios de Inclusão/Exclusão
Inclusão:
- Maior de 18 anos
- [Adicionar outros conforme seu desenho]

4.4 Instrumentos
- Roteiro de tarefas (Apêndice A)
- Formulário de coleta de dados (Apêndice B)
- Cronômetro digital
- DevTools do navegador (para performance)

4.5 Procedimento
Rodada 1 (pré-teste):
- Participantes executam 12 tarefas
- Pesquisador observa e anota problemas
- Ao final: coleta feedback qualitativo

Intervenção:
- Correções técnicas baseadas nos problemas encontrados
- Documentação das mudanças

Rodada 2 (pós-teste):
- Mesmos participantes executam mesmas tarefas
- Comparação de métricas antes vs depois
```

---

### 2. FALTA FUNDAMENTAÇÃO EM NORMAS/PADRÕES CIENTÍFICOS

**Adicione ao Referencial Teórico uma nova seção:**

```markdown
3.3. TESTES DE USABILIDADE E AVALIAÇÃO EM INTERAÇÃO HUMANO-COMPUTADOR

3.3.1 Definição de Usabilidade

A usabilidade, conforme definida pela norma ISO/IEC 9241-11 (1998), 
refere-se ao grau em que um produto pode ser usado por usuários específicos 
para alcançar objetivos específicos com efetividade, eficiência e satisfação 
em um contexto de uso específico [X].

Os atributos mensuráveis de usabilidade são:

- **Efetividade**: Taxa de conclusão de tarefas (%) 
  Ex: Quantas pessoas conseguiram criar uma safra?

- **Eficiência**: Tempo médio por tarefa (segundos)
  Ex: Em média, quanto tempo levou para salvar um custo?

- **Satisfação**: Percepção subjetiva do usuário (escala 1-5)
  Ex: "Quão fácil foi usar o sistema?"

3.3.2 Protocolo Think-Aloud

O protocolo think-aloud, descrito por Nielsen (1993) [X], é uma técnica 
em que o usuário é instruído a verbalizar seus pensamentos, dúvidas e 
frustrações enquanto executa tarefas no sistema. Esse método permite 
ao pesquisador identificar:

- Pontos de confusão na interface
- Fluxos inesperados do usuário
- Interpretações errôneas de funcionalidades

Instrução padrão: "Conforme você usa o sistema, por favor, fale em voz 
alta tudo que passa pela sua cabeça. Não há respostas certas ou erradas."

3.3.3 Escalas de Medição de Usabilidade

A pesquisa utiliza escala Likert 5 pontos para captar a satisfação:

- 1 = Muito difícil
- 2 = Difícil
- 3 = Neutro
- 4 = Fácil
- 5 = Muito fácil

Complementarmente, emprega-se o Net Promoter Score (NPS) [X]:
"Em uma escala de 0 a 10, você recomendaria esse sistema?"

3.3.4 Amostra em Testes de Usabilidade

Segundo Nielsen (2000) [X], apenas 5-7 participantes são necessários 
para encontrar aproximadamente 85% dos problemas de usabilidade críticos. 
Amostras maiores fornecem retorno diminuto e redundância de feedback.

Para esta pesquisa, foram selecionados 6 participantes, distribuídos em 
três grupos de competência (ver seção 4.2).

3.3.5 Aplicabilidade vs Usabilidade

É importante distinguir:

- **Usabilidade**: O sistema é fácil de usar? (teste com múltiplos públicos)
- **Aplicabilidade**: O sistema resolve o problema real do usuário agrícola? 
  (teste com especialistas do domínio)

A aplicabilidade será validada em uma segunda fase com 6 agricultores 
que utilizarão o sistema em contexto real.
```

---

### 3. FALTA ÉTICA EM PESQUISA COM HUMANOS

**Você PRECISA de:**

- [ ] **Termo de Consentimento Livre e Esclarecido (TCLE)** 
  - Ir no apêndice do TCC
  - Seu orientador cobrar com certeza
  
- [ ] **Aprovação do Comitê de Ética** (depende da UNIFAL)
  - Alguns TCCs precisam, outros não (converse com seu orientador)

**Template TCLE básico:**

```markdown
# APÊNDICE A - TERMO DE CONSENTIMENTO LIVRE E ESCLARECIDO

Você está sendo convidado a participar de uma pesquisa sobre testes de 
usabilidade do sistema Smart Plantio.

## OBJETIVOS
Avaliar se o sistema é fácil de usar e se resolve problemas reais do 
agricultor.

## PROCEDIMENTO
- Você executará 12 tarefas no sistema (30-40 minutos)
- Suas ações serão observadas e anotadas
- A sessão pode ser gravada em vídeo (com seu consentimento)
- Você será questionado sobre sua experiência

## RISCOS
Risco mínimo. Você pode desistir a qualquer momento.

## BENEFÍCIOS
Seus comentários ajudarão a melhorar o sistema para outros usuários.

## CONFIDENCIALIDADE
Seus dados serão anônimos. Nenhuma informação pessoal será divulgada.

## CONTATO
Pesquisador: Rafael Silva Fortuna
Email: rafael@example.com
Orientador: Prof. Paulo Alexandre Bressan

---
Eu, __________________, compreendi os objetivos e aceito participar.

Assinatura: __________________ Data: ___/___/______
```

---

### 4. CLARIFICAR "APLICABILIDADE"

**O TCC fala de "usabilidade E aplicabilidade" mas foca só em usabilidade**

**Adicione ao Referencial Teórico:**

```markdown
2.1 Diferenças entre Usabilidade e Aplicabilidade

O projeto Smart Plantio será avaliado sob dois aspectos complementares:

**Usabilidade** (foco Rodadas 1 e 2):
- O sistema é fácil de aprender?
- O usuário consegue executar tarefas sem erros?
- O sistema proporciona experiência satisfatória?
- Públicos diversos: leigos, técnicos, agricultores

**Aplicabilidade** (foco fase posterior):
- O sistema realmente resolve o problema do agricultor?
- O agricultor continuaria usando em contexto real?
- A ferramenta agrega valor ao negócio rural?
- Público: apenas agricultores em condições de campo

A distinção é importante: um sistema pode ser muito usável (fácil de clicar) 
mas pouco aplicável (não resolve o problema real). Ou ser aplicável mas 
difícil de usar (fácil fracassar).
```

---

### 5. DETALHAMENTO DA ANÁLISE DE DADOS

**Atualmente**: você tem planos de coletar dados mas não de analisá-los

**Adicione ao Referencial Teórico ou Metodologia:**

```markdown
### Análise Estatística Descritiva

Para as métricas quantitativas (tempo, taxa de conclusão, satisfação), 
serão calculadas:

- **Média** (M): tempo médio por tarefa
  Fórmula: Σ tempos / n participantes
  
- **Desvio Padrão** (DP): variação em torno da média
  Indica se algumas tarefas foram muito mais difíceis
  
- **Mediana**: valor do meio quando ordenados
  Menos afetada por outliers (uma pessoa muito lenta/rápida)

- **Redução percentual**: melhoria de Rodada 1 para 2
  Ex: Se Rodada 1 teve 3 erros médios e Rodada 2 teve 1,
      a redução foi (3-1)/3 = 67%

### Apresentação Gráfica

- Gráfico de barras: comparar Rodada 1 vs 2
- Gráfico de linha: evolução de satisfação por tarefa
- Tabelas com principais problemas encontrados

### Análise Qualitativa

- Categorização de problemas por severidade (crítico/alto/médio/baixo)
- Análise de comentários dos participantes
- Síntese de recomendações mais frequentes
```

---

## 📋 CHECKLIST COMPLETO POR SEÇÃO

### SEÇÃO 2: JUSTIFICATIVA
- [x] Três pilares bem definidos (socioeconômico, operacional, acadêmico)
- [ ] Adicionar: diferença entre usabilidade e aplicabilidade

### SEÇÃO 3: REFERENCIAL TEÓRICO

**3.1 Gestão Agrícola**
- [x] Bem feito

**3.2 Engenharia de Software**
- [x] Bem feito

**3.3 NOVO: Testes de Usabilidade (CRIAR)**
- [ ] Definição de usabilidade (ISO 9241-11)
- [ ] Protocol think-aloud (Nielsen)
- [ ] Métricas: efetividade, eficiência, satisfação
- [ ] Escalas Likert e NPS
- [ ] Justificativa do tamanho amostral (Nielsen 5-7)
- [ ] Aplicabilidade vs usabilidade

### SEÇÃO 4: METODOLOGIA (CRIAR)
- [ ] Tipo de pesquisa: qualitativa + quantitativa
- [ ] Design experimental: pré-teste, intervenção, pós-teste
- [ ] População e amostra (6 pessoas em 3 grupos)
- [ ] Critérios de inclusão/exclusão
- [ ] Instrumentos (roteiro, formulário, timer)
- [ ] Procedimento (2 rodadas de 30-40 min)
- [ ] Análise de dados (estatística descritiva + análise qualitativa)

### SEÇÃO 5: CRONOGRAMA
- [ ] Semana 1: Autoinspecção
- [ ] Semana 2: Rodada 1 com 6 participantes
- [ ] Semana 3-4: Análise e correções
- [ ] Semana 5: Rodada 2 com mesmos 6 participantes
- [ ] Semana 6: Teste de aplicabilidade com 6 agricultores novos
- [ ] Semana 7-8: Análise comparativa final

### APÊNDICES
- [ ] A. Termo de Consentimento (TCLE)
- [ ] B. Roteiro de 12 Tarefas
- [ ] C. Formulário de Coleta de Dados
- [ ] D. Guia do Facilitador (instruções para você durante testes)
- [ ] E. Tabelas de dados brutos (Rodada 1 e 2)
- [ ] F. Gráficos comparativos antes vs depois

---

## 📚 REFERÊNCIAS A ADICIONAR

```bibtex
% Já tem:
[1] IBGE (2019)
[2] EMBRAPA (2018)
[3] CYBIS, BETIOL, FAUST (2015)
[4] NIELSEN, Jakob (1993)
[5] SEBRAE (2020)
[6] TILKOV, VINOSKI (2010)
[7] FEDERICO, J.R. (2015)
[8] BANKS, PORCELLO (2020)
[9] VITE (2024)
[10] SILBERSCHATZ et al. (2012)
[11] MILANI, André (2011)

% PRECISA ADICIONAR:

[12] ISO/IEC 9241-11. Ergonomic requirements for office work with visual 
     display terminals (VDTs) - Part 11: Guidance on usability. 1998.
     
[13] NIELSEN, Jakob. Why You Only Need to Test with 5 Users. 
     Nielsen Norman Group, 2000.
     Disponível em: https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/
     
[14] LEWIS, James R. The System Usability Scale: Past, Present, and Future. 
     Journal of Usability Studies, vol. 3, n. 2, p. 113-118, 2008.
     
[15] Nielsen, Jakob; LANDAUER, Thomas K. A mathematical model of the finding 
     of usability problems. Proceedings of the INTERACT '93 and CHI '93 
     Conference, 1993.
     
[16] KUNIAVSKY, Mike. Observing the User Experience: A Practitioner's Guide 
     to User Research. 2nd ed. Morgan Kaufmann, 2003.
```

---

## 🎨 DICAS DE ESTRUTURA DO TCC FINAL

```
1. INTRODUÇÃO ✅
2. JUSTIFICATIVA ✅ (falta só: usabilidade vs aplicabilidade)
3. REFERENCIAL TEÓRICO ⚠️ (falta 3.3: Testes de Usabilidade)
4. METODOLOGIA ⚠️ (CRIAR DO ZERO)
5. CRONOGRAMA ⚠️ (criar ou detalhar)
6. ANÁLISE ESPERADA / RESULTADOS (pode vir depois)
7. CONCLUSÕES (vem por último, após testes)

APÊNDICES:
- A. TCLE
- B. Roteiro de Tarefas
- C. Formulário de Coleta
- D. Guia do Facilitador
- E. Dados Brutos
- F. Gráficos
```

---

## 🚀 PRÓXIMOS PASSOS IMEDIATOS

### Semana 1 (AGORA):
- [ ] Escrever seção 3.3 (Testes de Usabilidade) com as referências
- [ ] Criar seção 4 (Metodologia) com seu design amostral
- [ ] Preparar rascunho de TCLE

### Semana 2:
- [ ] Revisar com orientador Paulo Alexandre Bressan
- [ ] Validar cronograma
- [ ] Começar recrutamento dos 6 participantes (leigos, tech, agricultura)

### Semana 3:
- [ ] Fazer autoinspecção você mesmo (30-40 min)
- [ ] Refinar roteiro de tarefas baseado na sua experiência
- [ ] Imprimir/preparar formulário para coleta

### Semana 4:
- [ ] Executar Rodada 1 com 6 participantes (1-2 por dia)
- [ ] Tabular resultados
- [ ] Listar problemas por severidade

### Semana 5-6:
- [ ] Fazer correções técnicas
- [ ] Testar você mesmo as correções
- [ ] Executar Rodada 2 (mesmos 6 participantes)

### Semana 7-8:
- [ ] Fazer teste de aplicabilidade com 6 agricultores novos
- [ ] Analisar dados (gráficos, comparações)
- [ ] Escrever capítulo de Resultados

---

## 📝 NOTAS IMPORTANTES

> **⚠️ Seu orientador vai cobrar rigor metodológico**
> 
> A diferença entre um TCC bom (prático) e ótimo (científico) está em:
> - Usar normas estabelecidas (ISO 9241-11)
> - Detalhar população/amostra/critérios
> - Apresentar design experimental claro
> - Ter TCLE e considerações éticas
> - Análise de dados rigorosa com gráficos

> **Dica**: Conversa com seu orientador (Prof. Paulo) sobre:
> - Se precisa submeter ao Comitê de Ética da UNIFAL
> - Se quer que você use teste estatístico (t-test) ou descritiva simples
> - Se espera apêndices específicos

---

## 📞 DÚVIDAS FREQUENTES

**P: Preciso de Comitê de Ética?**  
R: Depende da UNIFAL. Converse com seu orientador. Alguns TCCs precisam, outros não.

**P: 6 pessoas é amostra pequena?**  
R: Não! Nielsen (2000) provou que 5-7 encontram 85% dos problemas. Está perfeito.

**P: Devo usar mesmos 6 na Rodada 1 e 2?**  
R: **SIM!** (veja resposta sobre amostra abaixo no arquivo de feedback)

**P: Quando faço o teste de aplicabilidade?**  
R: DEPOIS da Rodada 2. É a validação final com agricultores reais.

---

## 📄 VERSÃO

v1.0 - 2026-05-25 - Primeira compilação completa de recomendações
