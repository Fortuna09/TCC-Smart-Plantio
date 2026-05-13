# 📊 MODELOS DE PLANILHAS - TESTES DE USABILIDADE

## 🎯 OBJETIVO
Dois modelos de planilha: **uma para usar com usuários** (coleta simples) e **outra para sua análise técnica** (você sozinho).

---

# PLANILHA 1️⃣: TESTES COM USUÁRIOS (O que você usa durante a sessão)

Esta é a planilha que você preenche enquanto o participante está testando. Tem que ser rápida de preencher, sem complicação.

## 📋 Estrutura das Colunas

| # | Coluna | O que é | Exemplo |
|---|--------|---------|---------|
| A | **Participante** | Nome ou ID da pessoa | João Silva |
| B | **Data** | Quando foi o teste | 13/05/2026 |
| C | **Perfil** | Tipo de pessoa (Agricultor, Amigo, Professor, Não-tech) | Agricultor |
| D | **Tarefa** | Nome da tarefa testada | Criar Propriedade |
| E | **Início (HH:MM)** | Horário que começou | 14:30 |
| F | **Fim (HH:MM)** | Horário que terminou | 14:33 |
| G | **Tempo (seg)** | Tempo total em segundos | 180 |
| H | **Concluiu?** | ✅ Sim / ⚠️ Com ajuda / ❌ Não | ✅ |
| I | **Erros** | Quantos cliques/passos errados | 1 |
| J | **Ajuda** | Quantas vezes você precisou ajudar | 0 |
| K | **Problema encontrado** | Qual foi o problema (se houver) | Não achava o botão |
| L | **Severidade** | Crítico / Alto / Médio / Baixo | Médio |
| M | **Nota da Tarefa (1-5)** | Facilidade percebida | 4 |
| N | **Observações** | O que você anotou durante | Hesitou por 10s procurando botão |

---

## 📝 Exemplo Preenchido - Uma Pessoa Testando 4 Tarefas

```
┌────────────────┬──────────┬───────────┬─────────────────────────┬────────┬────────┬─────────┬────────┬───────┬──────┬──────────────────────┬─────────┬─────┬──────────────────────────────┐
│ Participante   │ Data     │ Perfil    │ Tarefa                  │ Início │ Fim    │ Tempo   │ Concluiu│ Erros │ Ajuda│ Problema encontrado  │ Severid.│Nota │ Observações              │
├────────────────┼──────────┼───────────┼─────────────────────────┼────────┼────────┼─────────┼────────┼───────┼──────┼──────────────────────┼─────────┼─────┼──────────────────────────────┤
│ João Silva     │ 13/05/26 │ Agricultor│ 1. Criar Propriedade    │ 14:30  │ 14:33  │ 180     │ ✅     │ 1     │ 0    │ Não achava botão criar       │ Médio   │ 4   │ Hesitou 10s procurando      │
│ João Silva     │ 13/05/26 │ Agricultor│ 2. Adicionar 3 Custos   │ 14:33  │ 14:42  │ 540     │ ✅     │ 2     │ 1    │ Ordem de campos confusa      │ Médio   │ 3   │ Perguntou qual preencher 1º │
│ João Silva     │ 13/05/26 │ Agricultor│ 3. Ver Custos Totais    │ 14:42  │ 14:45  │ 180     │ ✅     │ 0     │ 0    │ -                            │ -       │ 5   │ Muito fácil, gráfico claro  │
│ João Silva     │ 13/05/26 │ Agricultor│ 4. Enviar Convite       │ 14:45  │ 14:49  │ 240     │ ✅     │ 1     │ 1    │ Onde fazer o convite?        │ Alto    │ 2   │ Não entendeu a funcionalidad│
└────────────────┴──────────┴───────────┴─────────────────────────┴────────┴────────┴─────────┴────────┴───────┴──────┴──────────────────────┴─────────┴─────┴──────────────────────────────┘
```

---

## ✍️ Como Preencher Esta Planilha

### Durante o Teste

1. **Participante**: Escreva o nome ou "Pessoa 1", "Pessoa 2", etc.
2. **Data**: Coloque a data do teste
3. **Perfil**: Escolha um: Agricultor / Amigo / Professor / Não-tech
4. **Tarefa**: Número e nome (ex: "1. Criar Propriedade")
5. **Início**: Olhe o relógio QUANDO a pessoa clicar no primeiro elemento
6. **Fim**: Olhe o relógio QUANDO a pessoa terminar a tarefa ou desistir
7. **Tempo**: Calcule (pode deixar vazio, você preenche depois)
8. **Concluiu?**: Marque ✅ se completou / ⚠️ se completou mas com ajuda / ❌ se não conseguiu
9. **Erros**: Conte os cliques errados, passos fora do caminho
10. **Ajuda**: Quantas vezes você precisou explicar ou guiar
11. **Problema encontrado**: Descreva em UMA frase o problema
12. **Severidade**: Classifique
    - **Crítico**: Impede de completar a tarefa
    - **Alto**: Atrapalha muito, mas consegue terminar
    - **Médio**: Confunde, mas a pessoa resolve
    - **Baixo**: Detalhe menor
13. **Nota da Tarefa (1-5)**: Peça para a pessoa dar uma nota (1=muito difícil, 5=muito fácil)
14. **Observações**: Qualquer coisa que você achou importante anotar

---

## 📥 Dicas Práticas

- **Preencha durante o teste**, não depois. Você vai esquecer os detalhes.
- **Cronômetro**: Use o celular ou timer.net. Anote o tempo em segundos (180 = 3 minutos).
- **Não force a nota**: A pessoa dá a nota dela, não é nota sobre o sistema inteiro, é sobre aquela tarefa específica.
- **Severidade**: Só preencha se teve problema. Se correu bem, deixe em branco ou coloque "-".
- **Uma linha por tarefa**: Não tente resumir 4 tarefas em uma linha. Cria 4 linhas, uma para cada.

---

---

# PLANILHA 2️⃣: AUTOINSPEÇÃO TÉCNICA (O que você usa para testar sozinho)

Esta planilha é para VOCÊ testar a aplicação sozinho, antes de chamar participantes. Aqui você mede performance, erros de API e outros detalhes técnicos.

## 📋 Estrutura das Colunas

| # | Coluna | O que é | Exemplo |
|---|--------|---------|---------|
| A | **Data** | Quando você testou | 13/05/2026 |
| B | **Horário** | Hora que começou | 14:00 |
| C | **Tarefa** | Qual tarefa você testou | Criar Propriedade |
| D | **Status** | ✅ OK / ⚠️ Aviso / ❌ Erro | ✅ |
| E | **Tempo Cronômetro (seg)** | Tempo que você marcou com cronômetro | 135 |
| F | **Erros no Console (F12)** | Quantos erros vermelhos apareceram | 0 |
| G | **Requisições Lentas (Network)** | Qual API demorou mais | POST /properties = 2.5s |
| H | **Tempo Total da API (seg)** | Soma de todas as requisições | 3.2 |
| I | **Validação** | Campo validado? Mensagem de erro? | ✅ Sim, mensagem clara |
| J | **Feedback Visual** | Toast/alerta após salvar? | ✅ Toast verde |
| K | **Problemas Encontrados** | Qualquer coisa anormal | Botão de criar não tão visível |
| L | **Recomendação de Correção** | O que deveria mudar | Fazer botão verde e maior |
| M | **Prioridade de Fix** | Alta / Média / Baixa | Média |
| N | **Notas Técnicas** | Detalhes para desenvolvedor | Ver por que POST demorou 2.5s |

---

## 📝 Exemplo Preenchido - Você Testando 3 Tarefas

```
┌──────────┬────────┬─────────────────────────┬────────┬─────────┬──────────────┬────────────────────────┬───────────┬────────────────┬───────────────┬──────────────────────────┬───────────────────────┬──────────┬────────────────────┐
│ Data     │ Hora   │ Tarefa                  │ Status │ Tempo   │ Erros Console│ Requisições Lentas     │ Total API │ Validação      │ Feedback      │ Problemas Encontrados    │ Recomendação          │ Priority │ Notas Técnicas     │
├──────────┼────────┼─────────────────────────┼────────┼─────────┼──────────────┼────────────────────────┼───────────┼────────────────┼───────────────┼──────────────────────────┼───────────────────────┼──────────┼────────────────────┤
│ 13/05/26 │ 14:00  │ 1. Criar Propriedade    │ ✅     │ 135     │ 0            │ POST /properties=1.2s  │ 1.5       │ ✅ Sim         │ ✅ Toast verde│ Botão criar não visível  │ Botão verde e maior   │ Média    │ Considerar layout  │
│ 13/05/26 │ 14:03  │ 2. Adicionar 3 Custos   │ ⚠️     │ 210     │ 1            │ GET /properties=800ms  │ 2.1       │ ⚠️ Não valida  │ ❌ Sem alerta │ Salva sem validação      │ Implementar validação │ Alta     │ Campo aceita vazio │
│ 13/05/26 │ 14:07  │ 3. Ver Custos Totais    │ ✅     │ 90      │ 0            │ GET /dashboard=500ms   │ 0.8       │ ✅ Sim         │ ✅ Instantâneo│ Gráfico renderiza lento  │ Otimizar renderização │ Baixa    │ Performance OK     │
└──────────┴────────┴─────────────────────────┴────────┴─────────┴──────────────┴────────────────────────┴───────────┴────────────────┴───────────────┴──────────────────────────┴───────────────────────┴──────────┴────────────────────┘
```

---

## ✍️ Como Preencher Esta Planilha

### Durante a Autoinspeção (você sozinho)

1. **Data**: Coloque a data
2. **Horário**: Quando você começou
3. **Tarefa**: Qual tarefa você está testando
4. **Status**: 
   - ✅ Se correu sem problemas
   - ⚠️ Se teve aviso mas funcionou
   - ❌ Se quebrou ou não funcionou
5. **Tempo Cronômetro**: Use um cronômetro real (timer.net ou celular)
6. **Erros no Console**:
   - Abra DevTools (F12)
   - Vá para "Console"
   - Procure por mensagens vermelhas
   - Conte quantas tem
7. **Requisições Lentas**:
   - Abra DevTools (F12)
   - Vá para "Network"
   - Procure por requisições que levam >500ms
   - Escreva qual foi a mais lenta
8. **Tempo Total da API**: Some todos os tempos das requisições
9. **Validação**:
   - Tente enviar um formulário vazio
   - ✅ Se mostrou erro = OK
   - ❌ Se deixou enviar = problema
10. **Feedback Visual**:
    - ✅ Se aparecer toast (caixa verde) = OK
    - ❌ Se não aparecer nada = problema
11. **Problemas Encontrados**: Liste o que não funcionou bem
12. **Recomendação de Correção**: O que você acha que deveria mudar
13. **Prioridade**: 
    - **Alta**: quebrou ou impede usar
    - **Média**: atrapalha mas deixa usar
    - **Baixa**: detalhe menor
14. **Notas Técnicas**: Qualquer detalhe para você mesmo lembrar depois

---

## 📥 Dicas Práticas

- **Faça isso sozinho, sem distrações**.
- **Use cronômetro para comparar depois** com o tempo percebido pelos usuários.
- **DevTools**: F12 → Console (procura erros vermelhos), Network (procura requisições lentas).
- **Requisição "lenta"**: Acima de 500ms já é considerada lenta para um teste de usabilidade.
- **Uma linha por tarefa**: Não aglomere.
- **Preencha enquanto faz**: Suas anotações frescas são mais precisas.

---

---

# PLANILHA 3️⃣: RESUMO E COMPARAÇÃO (Depois de coletar tudo)

Depois que você testa com todos os participantes, você compila os dados aqui. Esta planilha consolida a Rodada 1 para depois comparar com a Rodada 2.

## 📋 Estrutura - Resumo por Tarefa

| Tarefa | Tempo Médio (s) | Taxa Sucesso (%) | Erros Médios | Nota Média | Problema Principal | Severidade |
|--------|-----------------|------------------|--------------|------------|-------------------|------------|
| 1. Criar Propriedade | 150 | 87% | 0.8 | 4.2 | Botão não visível | Médio |
| 2. Adicionar Custos | 210 | 71% | 1.5 | 3.1 | Ordem confusa | Médio |
| 3. Ver Custos Totais | 90 | 100% | 0 | 4.8 | - | - |
| 4. Enviar Convite | 165 | 75% | 1.2 | 2.9 | Não entende função | Alto |

---

## 📥 Como Calcular

```
TEMPO MÉDIO = (Tempo Pessoa 1 + Tempo Pessoa 2 + ... + Tempo Pessoa N) / N
Taxa Sucesso = (Pessoas que concluíram / Total de pessoas) × 100
Erros Médios = (Erros Pessoa 1 + Erros Pessoa 2 + ...) / N
Nota Média = (Nota Pessoa 1 + Nota Pessoa 2 + ...) / N
```

---

## 📝 Exemplo Real

Se você testou com 4 pessoas:

```
TAREFA 1: Criar Propriedade

Pessoa 1: Tempo 135s, ✅, 1 erro, Nota 4
Pessoa 2: Tempo 160s, ✅, 0 erros, Nota 5
Pessoa 3: Tempo 180s, ⚠️, 2 erros, Nota 3
Pessoa 4: Tempo 130s, ✅, 1 erro, Nota 4

CÁLCULO:
├─ Tempo Médio: (135+160+180+130)/4 = 151s
├─ Taxa Sucesso: 3 concluíram de 4 = 75%
├─ Erros Médios: (1+0+2+1)/4 = 1
├─ Nota Média: (4+5+3+4)/4 = 4
└─ Resultado: ⏱️ 151s | 75% ✅ | 1 erro | Nota 4/5 ⭐

PROBLEMA: Botão "Criar" não era fácil de achar (3 pessoas hesitaram)
```

---

---

# 🎯 RESUMO: QUAL PLANILHA USAR QUANDO

| Momento | Planilha | Quem usa |
|---------|----------|----------|
| **Durante teste com pessoa** | Planilha 1 (Testes com Usuários) | Você (moderador) |
| **Antes de chamar gente (autoinspeção)** | Planilha 2 (Autoinspeção Técnica) | Você (desenvolvedor sozinho) |
| **Depois que testa com todo mundo** | Planilha 3 (Resumo e Comparação) | Você (compilar dados) |

---

# 📥 INSTRUÇÕES PARA CRIAR NO EXCEL/GOOGLE SHEETS

## Opção 1: Google Sheets (Recomendado - Gratuito)

1. Acesse: https://sheets.google.com
2. Clique em "Criar nova planilha"
3. Nomeie: "Testes Usabilidade - Smart Plantio"
4. Crie 3 abas:
   - Aba 1: "Testes com Usuários"
   - Aba 2: "Autoinspeção"
   - Aba 3: "Resumo Rodada 1"
5. Em cada aba, coloque os cabeçalhos conforme acima
6. Pronto! Google Sheets auto-salva

## Opção 2: Excel (Você ja tem)

1. Abra Excel
2. Crie 3 abas conforme acima
3. Copie os cabeçalhos
4. Salve como: "Testes_Usabilidade_SmartPlantio.xlsx"

## Opção 3: LibreOffice Calc (Gratuito, se não tiver Excel)

1. Baixe: https://www.libreoffice.org/
2. Abra LibreOffice Calc
3. Mesma estrutura
4. Salve como .xlsx para compatibilidade

---

# ✅ CHECKLIST ANTES DE COMEÇAR

- [ ] Criei a Planilha 1 (Testes com Usuários)
- [ ] Criei a Planilha 2 (Autoinspeção Técnica)
- [ ] Criei a Planilha 3 (Resumo e Comparação)
- [ ] Testei digitando um exemplo em cada uma
- [ ] Colei o link (se Google Sheets) ou salvei o arquivo
- [ ] Abri DevTools no navegador (F12) para familiarizar
- [ ] Preparei cronômetro (timer.net ou celular)

---

# 🚀 PRÓXIMO PASSO

1. **Hoje**: Crie as 3 planilhas conforme descrito acima
2. **Amanhã**: Faça autoinspeção (Planilha 2) - você testando tudo sozinho
3. **Depois**: Chame participantes e preencha Planilha 1
4. **Ao fim**: Compile tudo na Planilha 3

