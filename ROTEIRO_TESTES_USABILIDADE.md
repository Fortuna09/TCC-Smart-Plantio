# Roteiro de Testes de Usabilidade - Smart Plantio

Este documento serve como guia pratico para aplicar os testes de usabilidade do Smart Plantio, registrar problemas e organizar as correcoes antes da segunda rodada de avaliacao.

## 1. Objetivo

Validar se o sistema permite que um usuario complete as tarefas principais com clareza, rapidez e poucos erros.

O foco nao e testar apenas se o codigo funciona, mas se a interface ajuda o usuario a concluir o que ele quer fazer.

## 2. Estrategia recomendada

O melhor metodo para este projeto e usar tres etapas:

1. Autoinspecao tecnica feita por voce.
2. Rodada 1 de teste de usabilidade com usuarios reais.
3. Rodada 2 repetindo as mesmas tarefas apos as correcoes.

Depois disso, quando o sistema estiver mais maduro, voce pode partir para testes de aplicabilidade.

## 3. O que testar no Smart Plantio

As tarefas devem seguir o fluxo real do sistema:

- Fazer login.
- Acessar a home e o dashboard.
- Criar, editar, visualizar e excluir propriedade.
- Criar, editar, visualizar e excluir gleba.
- Criar, editar, visualizar e excluir safra.
- Lancar custo e consultar totalizacao.
- Abrir relatorios e graficos.
- Criar item de estoque.
- Enviar convite de colaboracao.

Essas tarefas cobrem o ciclo principal do sistema e revelam onde o usuario encontra dificuldade.

## 4. Como forcar os erros de forma util

Nao tente sabotar o sistema. Em vez disso, crie tarefas que naturalmente expoem fragilidades ja existentes.

Exemplos:

- Salvar formulario com campo vazio para testar validacao.
- Repetir acoes de salvar ou editar para ver se existe duplicacao.
- Navegar rapido entre telas para identificar confusao de fluxo.
- Abrir listas grandes para observar desempenho e rolagem.
- Tentar excluir um registro e verificar se a confirmacao e clara.
- Testar tela em largura menor para expor problemas de responsividade.

## 5. O que voce pode testar sozinho antes de chamar usuarios

Antes da rodada com participantes, voce mesmo pode fazer uma triagem.

Checklist rapido:

- Ver se o login funciona do inicio ao fim.
- Ver se cada formulario mostra erro quando recebe dado invalido.
- Ver se as telas carregam sem travar.
- Ver se os botoes estao visiveis e com rotulos claros.
- Ver se o usuario entende para onde ir depois de salvar ou cancelar.
- Ver se o console do navegador mostra erros.
- Ver se a aba Network mostra falhas nas requisicoes.

Essa etapa ajuda a eliminar problemas basicos antes da avaliacao com pessoas.

## 6. Roteiro da sessao de teste

### 6.1 Antes de comecar

- Explique que o teste e do sistema, nao da pessoa.
- Peça para a pessoa falar em voz alta o que esta pensando.
- Nao ajude de imediato; apenas observe.
- Registre tempo, erros e comentarios.

### 6.2 Tarefas sugeridas

Use a mesma sequencia para todos os participantes.

1. Fazer login.
2. Abrir a area principal do sistema.
3. Criar uma propriedade de teste.
4. Abrir a propriedade criada.
5. Criar uma gleba ligada a essa propriedade.
6. Criar uma safra.
7. Lancar um custo.
8. Consultar o custo total.
9. Abrir um grafico do dashboard.
10. Criar um item de estoque.
11. Enviar um convite de colaboracao.
12. Editar e excluir um registro.

### 6.3 Fechamento

- Pergunte o que foi mais facil.
- Pergunte o que foi mais confuso.
- Pergunte o que a pessoa mudaria.
- Dê uma nota geral de usabilidade de 0 a 10.

## 7. O que monitorar

### 7.1 Metricas objetivas

- Tempo por tarefa.
- Taxa de conclusao.
- Numero de erros.
- Numero de pedidos de ajuda.
- Numero de tentativas repetidas.
- Numero de cliques fora do caminho esperado.

### 7.2 Metricas subjetivas

- Facilidade percebida.
- Clareza da interface.
- Confiança para usar o sistema.
- Satisfacao geral.
- Esforco mental percebido.

### 7.3 Sinais tecnicos

- Erros no console.
- Falhas de requisicao.
- Mensagens de validacao ausentes ou confusas.
- Demora excessiva para carregar telas.
- Requisições duplicadas.

## 8. Como registrar os dados

Use uma planilha simples com as colunas abaixo:

| Participante | Tarefa | Tempo | Concluiu? | Erros | Precisou de ajuda? | Observacoes | Nota |
|---|---|---:|---|---:|---|---|---:|

Se quiser, complemente com uma gravação de tela e anotacoes do que aconteceu em cada passo.

## 9. Como organizar as duas rodadas

### Rodada 1

- Execute as tarefas com a versao atual do sistema.
- Registre todos os problemas encontrados.
- Classifique os problemas por severidade:
  - critico: impede concluir a tarefa;
  - alto: atrapalha bastante;
  - medio: confunde, mas permite terminar;
  - baixo: detalhe visual ou de texto.

### Depois da rodada 1

- Corrija apenas os problemas encontrados.
- Nao mude as tarefas.
- Nao mude a ordem da avaliacao.

### Rodada 2

- Reaplique exatamente o mesmo roteiro.
- Compare tempo, erros e satisfacao.
- Mostre o que melhorou.

## 10. Estrutura de comparacao

Voce pode comparar os resultados assim:

| Indicador | Rodada 1 | Rodada 2 |
|---|---:|---:|
| Tempo medio por tarefa |  |  |
| Taxa de conclusao |  |  |
| Numero medio de erros |  |  |
| Pedidos de ajuda |  |  |
| Nota de satisfacao |  |  |

Essa tabela e boa para o TCC porque mostra melhoria de forma objetiva.

## 11. Regras praticas durante o teste

- Nao explique demais a interface.
- Nao corrija o usuario o tempo todo.
- Nao altere o roteiro entre participantes.
- Nao troque a sequencia das tarefas.
- Nao misture testes de usabilidade com teste tecnico no mesmo registro.

## 12. O que fica para o futuro

Os testes de aplicabilidade podem vir depois, quando o sistema estiver estabilizado. Nessa fase, o ideal e usar o Smart Plantio em um periodo real de uso para medir utilidade pratica, nao apenas facilidade de uso.

## 13. Entregaveis que voce pode gerar a partir deste roteiro

- Planilha com os resultados.
- Lista de problemas por severidade.
- Comparacao entre rodada 1 e rodada 2.
- Relatorio final com conclusao dos testes.

## 14. Resumo rapido

Se voce quiser uma versao curta do metodo, siga esta ordem:

1. Teste sozinho para achar erros basicos.
2. Rode a primeira avaliacao com usuarios.
3. Corrija os problemas.
4. Rode a segunda avaliacao com as mesmas tarefas.
5. Compare os resultados.
6. Deixe a aplicabilidade para depois.
