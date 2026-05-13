# 🚀 GUIA RÁPIDO: COMEÇAR TESTES DE USABILIDADE AGORA

## 📚 ARQUIVOS QUE JÁ EXISTEM NO SEU PROJETO

```
✅ ROTEIRO_TESTES_USABILIDADE.md
   └─ Teoria + metodologia (2 rodadas, antes/depois)

✅ USABILIDADE_TCC.md
   └─ Contexto acadêmico (por que faz sentido para TCC)

✅ PLANO_TESTES_TCC.md
   └─ Cronograma prático (6 fases, tempo estimado)

✅ COLETA_DADOS_TESTE.md
   └─ Formulário para anotar dados (tempo, erros, feedback)

✅ GUIA_MEDIÇÃO_PERFORMANCE.md ← NOVO!
   └─ Como marcar tempo, usar DevTools, cronômetro

✅ ANÁLISE_COMPARATIVA_TESTES.md ← NOVO!
   └─ Tabelas antes/depois, gráficos, template TCC

✅ ANÁLISE_ROTEIROS_USABILIDADE.md ← NOVO!
   └─ Verificação de qualidade dos roteiros
```

---

## ⏱️ PLANO EXECUTIVO (PRÓXIMAS 2 SEMANAS)

### HOJE: Preparação (30 min)
```
☐ Leia ANÁLISE_ROTEIROS_USABILIDADE.md
☐ Leia GUIA_MEDIÇÃO_PERFORMANCE.md (métodos de cronometragem)
☐ Prepare papel e caneta (ou planilha impressa)
☐ Familiarize com cronômetro online (timer.net)
☐ Abra DevTools (F12 no navegador)
```

### AMANHÃ: Teste Solo (40 min)
```
Você mesmo testa o sistema, sozinho, cronometrando:

☐ Abra terminal: cd frontend && npm run dev
☐ Abra terminal: cd backend && npm run dev
☐ Acesse http://localhost:5173
☐ Faça login (Google)
☐ Execute as 4 tarefas do roteiro (cronometrado):
  1. Criar propriedade (tempo? erros?)
  2. Adicionar 3 custos (tempo? confuso?)
  3. Ver custos totais (tempo? claro?)
  4. Enviar convite (tempo? entendível?)
☐ Anote problemas encontrados
☐ Preencha COLETA_DADOS_TESTE.md com seus dados
```

**Resultado esperado:** Lista de problemas a corrigir antes de chamar testadores reais

### Semana 1: Correções (Baseado no seu teste solo)
```
Implemente as correções que você encontrou:
- Botões não encontrados? Deixe mais visível
- Validação faltando? Implemente
- Lentidão? Otimize
- Mensagens confusas? Reescreva em português

Teste de novo sozinho para confirmar que corrigiu
```

### Semana 2: Primeira Rodada com Testadores (5-6 pessoas)
```
Recrute:
- 2x agricultores/gestores
- 2x amigos tech-savvy
- 1x professor/avaliador
- 1x pessoa não-tech (opcional)

☐ Envie link do app
☐ Peça para cada pessoa gastar 30-40 min
☐ Eles fazem as 4 tarefas enquanto você marca tempo
☐ Preencha COLETA_DADOS_TESTE.md para cada pessoa
☐ Compile resultados na ANÁLISE_COMPARATIVA_TESTES.md
```

---

## 🎯 VERSÃO MINIMALISTA (Se tiver POUCO tempo)

Se estiver com pressa para a entrega, pode fazer o **mínimo viável:**

### Teste Solo Rápido (15 min)
```
1. Você mesmo usa as 4 tarefas
2. Nota quantos minutos cada uma leva
3. Lista 3 problemas principais
4. Corrige esses 3
5. Testa de novo para confirmar
6. Documentado!
```

### 3 Testadores (não 6-7)
```
1. 1x agricultor (seu público-alvo real)
2. 1x amigo tech (feedback rápido)
3. 1x professor (validação acadêmica)

Cada um: 30 min de teste, dados coletados
Resultado: evidência de teste com usuários reais
```

### Tabela Minimalista
```
| Testador | Tarefa 1 | Tarefa 2 | Tarefa 3 | Tarefa 4 | Nota |
|----------|----------|----------|----------|----------|------|
| Pessoa 1 |    ✅    |    ✅    |    ⚠️    |    ❌    |  6   |
| Pessoa 2 |    ✅    |    ⚠️    |    ✅    |    ✅    |  8   |
| Pessoa 3 |    ✅    |    ✅    |    ✅    |    ⚠️    |  7   |
```

---

## 📋 CHECKLIST PRÉ-TESTE

Antes de chamar testadores reais, confirme:

```
FUNCIONALIDADES BÁSICAS
☐ Login com Google funciona
☐ Token persiste ao refresh (corrigi isso!)
☐ Logout limpa dados
☐ Sem erros no console (F12 → Console)

FUNCIONALIDADES DE TESTE
☐ Criar propriedade → salva e aparece na lista
☐ Adicionar custos → aparecem com valores corretos
☐ Ver totais → cálculo está certo
☐ Enviar convite → envio sem erro

INTERFACE
☐ Botões estão visíveis
☐ Mensagens estão em português
☐ Formulários não salvam vazio (validação)
☐ Feedback ao salvar (toast, alerta, etc)
☐ Mobile é usável (testa no zoom do navegador)

PERFORMANCE
☐ Nenhuma página demora >2s para carregar
☐ Nenhum erro na aba Network (F12 → Network)
☐ Console limpo (sem erros vermelhos)
```

---

## 🎬 AGORA: SEUS PRÓXIMOS 3 PASSOS

### PASSO 1️⃣: Leia este resumo
```
Tempo: 5 minutos
Resultado: Entender o plano geral
```

### PASSO 2️⃣: Faça teste SOLO (você mesmo)
```
Tempo: 40 minutos
Resultado: 
  - Validar que o roteiro funciona
  - Encontrar problemas antes dos testadores
  - Marcar tempo real de cada tarefa
  - Preparar dados para Rodada 1

Quando terminar:
→ Compartilha comigo os resultados (tempo de cada tarefa, problemas encontrados)
```

### PASSO 3️⃣: Recrute 3-5 testadores
```
Tempo: Email + marcação (30 min)

Envie para:
- 1-2 amigos próximos
- 1 professor
- 1-2 agricultores (se tiver contato)

Mensagem modelo:
"Oi! Estou fazendo testes com meu app de gestão agrícola. 
Você teria 30-40 minutos para testar e dar feedback? 
Preciso de pessoas que usem o sistema e me digam se é fácil/difícil."
```

---

## 📱 FERRAMENTAS QUE VAI PRECISAR

### Para Cronometragem
```
☐ Cronômetro (celular ou timer.net)
☐ Papel/caneta (ou planilha aberta)
☐ DevTools aberto (F12)
```

### Para Análise
```
☐ Google Sheets ou Excel (para tabelas)
☐ COLETA_DADOS_TESTE.md (formulário)
☐ ANÁLISE_COMPARATIVA_TESTES.md (planilha antes/depois)
```

### Para Documentação (opcional)
```
☐ OBS Studio (gratuito, grava tela)
☐ Snagit (pago, mas fácil de editar prints)
☐ Smartphone (câmera para filmar tela)
```

---

## 💡 DICAS IMPORTANTES

### Durante o Teste Solo
```
✅ Não ajude a si mesmo (use como seu cliente usaria)
✅ Anote o TEMPO real (não estimado)
✅ Deixe DevTools aberto (Network → ver requisições lentas)
✅ Anote cada clique errado que você fez
✅ Se ficar confuso, escreva o motivo
```

### Durante o Teste com Testadores
```
✅ Peça para falar em voz alta enquanto usa
✅ Não corrija no meio do teste
✅ Deixe ele resolver sozinho (máx 5 min por tarefa)
✅ Se não conseguir, marque como "❌ Não conseguiu"
✅ Pergunte "o que seria melhor?" no final
```

### Depois do Teste
```
✅ LOGO compile os dados (enquanto lembra)
✅ Calcule médias (tempo, erros, etc)
✅ Tabule na planilha
✅ Procure padrões (múltiplos testadores errando = problema real)
```

---

## 🏁 SUCESSO = EVIDÊNCIA PARA TCC

Quando terminar os 2 ciclos de teste, você terá:

```
✅ ANTES (Rodada 1):
   - 5 dados de usuários reais
   - Tempo de conclusão
   - Taxa de erros
   - Satisfação (notas 1-10)
   - Feedback qualitativo

✅ CORRIGIU ISSUES

✅ DEPOIS (Rodada 2):
   - 5 dados de usuários reais (novos ou mesmos)
   - Tempo REDUZIDO (ex: de 150s para 95s)
   - Menos erros
   - Satisfação AUMENTADA
   - Feedback positivo

✅ APRESENTA COMPARAÇÃO:
   - Gráficos mostrando melhoria
   - Evidência que ouviu usuários
   - Ciclo de melhoria contínua
   - Muito bom para TCC!
```

---

## ❓ DÚVIDAS FREQUENTES

### "Quanto tempo vai levar?"
```
Teste Solo: 40 minutos
Recrutar testadores: 1-2 dias
Testar 5 pessoas: 3-4 horas total (30-40 min cada)
Analisar dados: 1-2 horas
Corrigir bugs: 2-8 horas (depende dos problemas)
Segunda rodada: 3-4 horas

TOTAL: ~2-3 semanas (já está no seu cronograma)
```

### "Precisa ser com muitos testadores?"
```
Mínimo: 3 testadores (bom para TCC)
Ideal: 5-6 testadores
Mais é melhor, mas 3 é aceitável academicamente
```

### "Como começar sem conhecer testadores?"
```
1. Amigos/Colegas (mais fácil)
2. Família (também vale)
3. Professores (ótimo para feedback acadêmico)
4. Sindicato agrícola (seu público-alvo)
5. Reddit/Discord agrícola (menos comum, mas possível)
```

### "E se ninguém quiser testar?"
```
Pior cenário: faz teste SOLO muito bem documentado
- Você mesmo executa 2-3 vezes
- Anota tudo
- Encontra e corrige problemas
- Prova que testou e melhorou

Não é o ideal, mas é válido
```

---

## 🎉 VOCÊ ESTÁ PRONTO!

Os documentos estão prontos. O roteiro está pronto. O formulário está pronto.

**Próximo passo → FAZER O TESTE SOLO AGORA:**

```
1. Abra terminal backend: npm run dev
2. Abra terminal frontend: npm run dev
3. Acesse app em http://localhost:5173
4. Fça login
5. Execute as 4 tarefas enquanto cronometra
6. Preenche COLETA_DADOS_TESTE.md
7. Me compartilha os resultados
```

**Boa sorte! 🚀**

