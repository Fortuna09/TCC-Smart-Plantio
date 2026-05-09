# Roteiro de Testes de Usabilidade - Smart Plantio

## 1. Introducao

Este documento apresenta um roteiro para a aplicacao de testes de usabilidade no sistema Smart Plantio, um software web desenvolvido para apoiar a gestao de propriedades rurais, talhoes, safras, custos, estoque e convites de colaboracao.

O objetivo e descrever uma metodologia pratica e defensavel academicamente para avaliar a experiencia do usuario, identificar problemas de navegacao e interface, e orientar uma segunda rodada de avaliacao apos correcoes no sistema.

## 2. Justificativa

O teste de usabilidade e adequado para este projeto porque a aplicacao possui tarefas concretas e fluxos de uso bem definidos, como login, cadastro de registros, consulta de dados e visualizacao de relatorios. Dessa forma, e possivel observar nao apenas se o sistema executa suas funcoes, mas se o usuario consegue realiza-las com clareza, eficiencia e confianca.

No contexto de um TCC, essa abordagem permite registrar evidencias objetivas e qualitativas sobre a evolucao da interface, comparando o comportamento do sistema antes e depois das correcoes.

## 3. Objetivo Geral

Avaliar a usabilidade do sistema Smart Plantio por meio da execucao de tarefas representativas do uso real, identificando dificuldades, erros, tempo de execucao e percepcao dos usuarios.

## 4. Objetivos Especificos

- Verificar se o usuario compreende a interface e os fluxos principais do sistema.
- Medir o tempo necessario para a conclusao das tarefas.
- Identificar erros, hesitacoes e pontos de confusao.
- Coletar percepcoes subjetivas sobre clareza, facilidade e satisfacao.
- Comparar os resultados entre a primeira e a segunda rodada de testes.

## 5. Metodologia Recomendada

A metodologia sugerida para este projeto e composta por tres etapas:

1. Inspecao tecnica inicial realizada pelo proprio desenvolvedor.
2. Primeira rodada de teste de usabilidade com usuarios reais.
3. Segunda rodada com as mesmas tarefas, apos a correcao dos problemas encontrados.

Esse modelo permite identificar falhas, corrigi-las e verificar se houve melhoria real na interacao.

## 6. Contexto do Sistema

O Smart Plantio e uma aplicacao composta por backend em Node.js com Express e Sequelize, banco de dados MySQL e frontend em React com Vite e Material UI. A interface concentra o acesso em modulos funcionais que organizam as principais entidades do dominio agricola.

As principais areas do sistema sao:

- Autenticacao via Google.
- Gestao de propriedades.
- Gestao de glebas ou talhoes.
- Gestao de safras.
- Lancamento e acompanhamento de custos.
- Controle de estoque.
- Dashboards e relatorios.
- Convites de colaboracao entre usuarios.

## 7. Escopo das Tarefas

As tarefas de avaliacao devem refletir o uso real do sistema. Recomenda-se aplicar a mesma sequencia a todos os participantes.

### Tarefas principais

1. Realizar login no sistema.
2. Acessar a area principal.
3. Criar uma propriedade.
4. Consultar a propriedade criada.
5. Criar uma gleba vinculada a essa propriedade.
6. Criar uma safra.
7. Lancar um custo.
8. Consultar o custo total.
9. Abrir um grafico ou relatorio do dashboard.
10. Criar um item de estoque.
11. Enviar um convite de colaboracao.
12. Editar e excluir um registro.

Essas tarefas cobrem o fluxo central da aplicacao e ajudam a identificar se a interface conduz o usuario de maneira intuitiva.

## 8. Teste de Autoinspecao

Antes da avaliacao com usuarios, recomenda-se que o proprio desenvolvedor execute uma revisao tecnica da interface e dos fluxos.

### Itens a verificar

- Login e logout.
- Validacao de formularios.
- Mensagens de erro e feedback visual.
- Funcionamento das rotas principais.
- Comportamento em telas menores.
- Erros no console do navegador.
- Falhas de requisicao na aba Network.

Essa etapa reduz problemas basicos e melhora a qualidade da rodada com participantes.

## 9. Procedimento de Aplicacao

### 9.1 Antes do teste

- Apresentar o objetivo da avaliacao.
- Informar que a pessoa esta testando o sistema, e nao sendo avaliada.
- Solicitar que verbalize suas acoes e duvidas durante o uso.
- Garantir que o teste sera registrado por meio de anotacoes e, se possivel, gravacao de tela.

### 9.2 Durante o teste

- Entregar uma tarefa por vez.
- Evitar instrucoes excessivas.
- Observar tempo, hesitacao, erros e pedidos de ajuda.
- Registrar comentarios espontaneos do participante.

### 9.3 Ao final

- Solicitar uma avaliacao geral da experiencia.
- Perguntar quais telas foram mais faceis e mais dificeis.
- Perguntar o que poderia ser melhorado.
- Coletar uma nota geral de satisfacao.

## 10. Como Lidar com Erros e Fragilidades

Como o sistema pode possuir inconsistencias, os testes devem ser desenhados para expor essas fragilidades de forma controlada e etica.

Exemplos de situacoes uteis para observacao:

- Envio de formularios com campos vazios.
- Repeticao de acoes de salvar ou editar.
- Navegacao rapida entre telas.
- Abertura de listas com muitos registros.
- Tentativa de exclusao de registros.
- Teste da interface em resolucao menor.

Esses cenarios ajudam a identificar problemas de validação, desempenho, navegacao e clareza visual.

## 11. Metricas de Avaliacao

### 11.1 Metricas objetivas

- Tempo medio por tarefa.
- Taxa de conclusao.
- Numero de erros por tarefa.
- Numero de pedidos de ajuda.
- Numero de tentativas repetidas.
- Numero de cliques fora do fluxo esperado.

### 11.2 Metricas subjetivas

- Facilidade percebida.
- Clareza da interface.
- Confiança para utilizar o sistema.
- Satisfacao geral.
- Esforco mental percebido.

### 11.3 Sinais tecnicos

- Erros no console.
- Falhas de requisicao.
- Requisições duplicadas.
- Lentidao de carregamento.
- Mensagens de validacao insuficientes ou confusas.

## 12. Instrumento de Registro

Recomenda-se utilizar uma planilha de observacao com os seguintes campos:

| Participante | Tarefa | Tempo | Concluiu? | Erros | Precisou de ajuda? | Observacoes | Nota |
|---|---|---:|---|---:|---|---|---:|

Esse registro pode ser complementado por capturas de tela, notas de campo e gravação de sessão.

## 13. Rodada 1 e Rodada 2

### Rodada 1

- Aplicar as tarefas com a versao atual do sistema.
- Registrar todos os problemas encontrados.
- Classificar os problemas por severidade.

### Rodada 2

- Corrigir os problemas identificados.
- Reaplicar exatamente o mesmo roteiro.
- Comparar os resultados com a rodada anterior.

### Classificacao de severidade

- Critico: impede a conclusao da tarefa.
- Alto: compromete fortemente a experiencia.
- Medio: causa confusao, mas permite concluir.
- Baixo: detalhe visual, textual ou de refinamento.

## 14. Estrutura de Comparacao

Os resultados podem ser comparados por meio de tabela ou grafico.

| Indicador | Rodada 1 | Rodada 2 |
|---|---:|---:|
| Tempo medio por tarefa |  |  |
| Taxa de conclusao |  |  |
| Numero medio de erros |  |  |
| Pedidos de ajuda |  |  |
| Nota de satisfacao |  |  |

Essa comparacao e importante para demonstrar a melhoria obtida apos as correcoes.

## 15. Resultados Esperados

Espera-se que a segunda rodada apresente:

- Menor tempo de execucao.
- Menor numero de erros.
- Menor necessidade de ajuda.
- Maior satisfacao dos participantes.
- Menor confusao na navegacao.

## 16. Consideracoes Finais

Este roteiro permite conduzir a avaliacao de usabilidade do Smart Plantio de forma organizada, comparavel e adequada para documentacao academica. A repeticao das tarefas na segunda rodada favorece a validacao das melhorias implementadas no sistema.

Os testes de aplicabilidade podem ser realizados em uma etapa posterior, quando a plataforma estiver mais estabilizada e for possivel observar o uso prolongado em contexto real.
