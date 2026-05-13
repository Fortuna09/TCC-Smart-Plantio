# ⏱️ GUIA DE MEDIÇÃO DE PERFORMANCE - TESTES DE USABILIDADE

## 🎯 OBJETIVO
Medir com precisão o tempo de execução de cada tarefa e identificar gargalos de performance que afetam a experiência do usuário.

---

## 📱 FERRAMENTAS NECESSÁRIAS

### Para o Testador (você ou participante)
- [ ] Smartphone/tablet com cronômetro (ou smartwatch)
- [ ] Notebook com DevTools aberto
- [ ] Planilha de coleta de dados aberta
- [ ] Câmera/Screen recorder (opcional, mas recomendado)

### Para Análise Posterior
- [ ] Google Sheets ou Excel
- [ ] Browser DevTools (F12)
- [ ] Lighthouse (auditor de performance do Chrome)

---

## ⏰ COMO MEDIR TEMPO (MÉTODO 1: MANUAL)

### Passo 1: Preparar o Cronômetro
```
1. Abra o app do Celular: "Cronômetro"
2. OU acesse: https://www.online-stopwatch.com
3. Tenha a planilha de coleta visível
```

### Passo 2: Iniciar Medição
```
⏱️ IMPORTANTE: Marque o tempo assim:

1. Leia a tarefa para o testador
2. Assim que ele CLICA no primeiro elemento → INICIE o cronômetro
3. Quando ele CLICA em "Salvar" ou conclui → PARE o cronômetro
4. ANOTE o tempo na planilha

❌ NÃO inclua:
   - Tempo de leitura da instrução
   - Explicações suas

✅ INCLUA:
   - Navegação entre telas
   - Preenchimento de formulário
   - Cliques errados e volta
```

### Passo 3: Anotar na Planilha
```
Exemplo:
TAREFA 1: Criar Propriedade
├─ Tempo: 2 min 15 seg = 135 segundos
├─ Erros: 1 clique errado
├─ Status: ✅ Completou
└─ Observação: "Procurou o botão de criar por 10s"
```

---

## 📊 COMO MEDIR TEMPO (MÉTODO 2: AUTOMÁTICO COM DEVTOOLS)

### Passo 1: Abrir DevTools
```
1. Pressione F12 (ou Ctrl+Shift+I no Linux/Windows)
2. Vá para a aba "Performance"
3. Você verá: [●] círculo vermelho = RECORD
```

### Passo 2: Gravar Performance
```
1. Clique no ● vermelho para INICIAR gravação
2. Peça para o testador executar a tarefa
3. Quando terminar, clique em ● novamente para PARAR
4. DevTools mostrará:
   - Tempo total (Duration)
   - Quando a página carregou
   - Quando o JavaScript executou
   - Quando os elementos renderizaram
```

### Passo 3: Analisar Resultado
```
Timeline mostrará:
├─ Amarelo (JavaScript): quanto tempo levou para processar
├─ Roxo (Renderização): quanto tempo para desenhar na tela
├─ Cinza (Pintura): cores/estilos aplicados
└─ Total: tempo total da tarefa

Se vir picos altos 📈 = gargalo de performance
```

---

## 🔍 COMO MEDIR TEMPO (MÉTODO 3: NETWORK - Ver Requisições Lentas)

### Passo 1: Abrir Aba Network
```
1. DevTools (F12)
2. Aba "Network"
3. Deixe ligado enquanto executa a tarefa
```

### Passo 2: Analisar Requisições
```
DevTools mostrará cada requisição:
├─ Nome (qual endpoint/recurso)
├─ Status (200=OK, 4xx=erro, 5xx=erro servidor)
├─ Tipo (xhr=API, document=página, image=imagem)
├─ Tamanho (kb)
└─ Tempo (quanto levou para baixar) ⏱️

Procure por:
❌ Requisições que levam >1s (lenta)
❌ Requisições com erro (4xx, 5xx)
❌ Requisições duplicadas
✅ Requisições <500ms (rápido)
```

### Passo 3: Registrar
```
Exemplo:
TAREFA 1: Criar Propriedade
├─ GET /api/properties → 150ms ✅
├─ POST /api/properties → 2500ms ❌ (LENTA!)
├─ GET /dashboard → 800ms ⚠️
└─ Total: 3.45s
```

---

## 📈 COMO USAR LIGHTHOUSE (Auditoria Automática)

### Passo 1: Abrir Lighthouse
```
1. DevTools (F12)
2. Aba "Lighthouse" (pode estar em "More tools")
3. Clique em "Analyze page load"
```

### Passo 2: Deixar Rodar
```
Lighthouse vai:
✓ Simular conexão lenta
✓ Testar em mobile (por padrão)
✓ Gerar relatório com notas (0-100)
✓ Dar recomendações
```

### Passo 3: Ler Resultado
```
Lighthouse mostra:
├─ Performance: 0-100 (quanto mais alto, melhor)
├─ First Contentful Paint: tempo até primeiro elemento aparecer
├─ Largest Contentful Paint: tempo até main content aparecer
├─ Cumulative Layout Shift: quanto a página "tremeu"
└─ Recomendações: "Otimize imagens", "Remova CSS não-usado"

Tomar nota:
- Se Performance < 50 → CRÍTICO ❌
- Se Performance 50-80 → PRECISA MELHORAR ⚠️
- Se Performance > 80 → BOM ✅
```

---

## 📋 PLANILHA PARA REGISTRAR PERFORMANCE

Crie uma tabela assim no Excel/Google Sheets:

```
┌─────────┬──────────┬─────────┬──────┬────────┬──────────┐
│ Tarefa  │ Tempo(s) │ Erros   │ Rede │ Render │ Notas    │
├─────────┼──────────┼─────────┼──────┼────────┼──────────┤
│ Tarefa1 │ 135      │ 1       │ 200ms│ 450ms  │ Lentidão │
│ Tarefa2 │ 210      │ 2       │ 350ms│ 620ms  │ Erro API │
│ Tarefa3 │ 90       │ 0       │ 150ms│ 280ms  │ OK       │
│ Tarefa4 │ 165      │ 1       │ 300ms│ 500ms  │ Confuso  │
├─────────┼──────────┼─────────┼──────┼────────┼──────────┤
│ MÉDIA   │ 150      │ 1       │ 250ms│ 462ms  │ ...      │
└─────────┴──────────┴─────────┴──────┴────────┴──────────┘
```

---

## 🎬 CRONÔMETRO ONLINE RECOMENDADO

Se quiser usar via navegador:

```
1. https://timer.net/ (simples e rápido)
2. https://online-stopwatch.com (com split time)
3. https://www.timeanddate.com/timer/ (customizável)

OU no Windows: tecla Super+S (print) → usar ferramenta de timer do Windows
```

---

## ✅ CHECKLIST DE MEDIÇÃO

Antes de cada teste, verifique:

- [ ] Cronômetro pronto e zerado
- [ ] DevTools aberto (aba Performance e Network)
- [ ] Planilha de coleta aberta
- [ ] Conexão de internet está boa (teste em speedtest.net)
- [ ] Nenhum outro app/aba usando muita banda
- [ ] Bateria do notebook OK
- [ ] Você está em local tranquilo (sem barulho)

---

## 🚨 ARMADILHAS COMUNS

### ❌ ERROS QUE PODEM PREJUDICAR A MEDIÇÃO

1. **Cronômetro com atraso**
   - Solução: Use cronômetro online, mais preciso
   
2. **DevTools aberto consome muita RAM**
   - Solução: Feche abas extras, use apenas Performance
   
3. **Conexão de internet ruim**
   - Solução: Teste em 4G ou WiFi forte
   
4. **Testador já conhece o sistema**
   - Solução: Use testador novo, ou limpe cache (Ctrl+Shift+Del)
   
5. **Anotar tempo errado**
   - Solução: Anote durante o teste, não depois

---

## 📊 ANÁLISE APÓS COLETA

### Calcular Médias
```
TEMPO MÉDIO = (Tempo T1 + Tempo T2 + Tempo T3 + Tempo T4) / 4
TAXA SUCESSO = (Tarefas completadas / Total tarefas) × 100%
ERROS MÉDIOS = (Erros T1 + Erros T2 + Erros T3 + Erros T4) / 4
```

### Comparar Rodadas
```
TAREFA 1: Criar Propriedade
├─ Rodada 1: 135s, 1 erro
├─ Rodada 2: 85s, 0 erros
└─ MELHORIA: -50s (-37%), -1 erro (-100%) ✅
```

---

## 💡 DICAS PRO

1. **Teste em múltiplos navegadores**
   - Chrome (mais comum)
   - Firefox (bom DevTools também)
   - Safari (se tiver Mac)

2. **Teste em múltiplas conexões**
   - WiFi rápido
   - 4G moderado
   - 3G lento (use Chrome DevTools para simular)

3. **Teste em diferentes dispositivos**
   - Desktop (seu notebook)
   - Tablet
   - Mobile (se possível)

4. **Registre tudo em vídeo** (opcional)
   - Use OBS Studio (grátis)
   - Assim você revê depois se tiver dúvida no tempo

---

## 🎯 TEMPLATE RÁPIDO PARA ANOTAÇÕES

```
TESTE DE USABILIDADE - MEDIÇÃO DE PERFORMANCE

Testador: _______________________
Data: ___/___/_____
Navegador: _____________ Dispositivo: ____________
Conexão: WiFi __ 4G __ 3G __

TAREFA 1: Criar Propriedade
├─ Início: 14:23:45 | Fim: 14:25:20
├─ Duração: 1m35s = 95 segundos
├─ Erros: 0
├─ Rede: 200ms
├─ Render: 450ms
└─ Status: ✅

[Repetir para cada tarefa]

OBSERVAÇÕES GERAIS:
- Maior gargalo: _____________________
- Menor tempo: ______________________
- Maior tempo: _______________________
```

---

## 🔗 REFERÊNCIAS

- [Chrome DevTools Performance](https://developer.chrome.com/docs/devtools/performance/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Web.dev - Métricas Core Web Vitals](https://web.dev/vitals/)
