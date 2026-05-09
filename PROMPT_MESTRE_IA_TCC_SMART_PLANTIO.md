# Prompt mestre para IA - Projeto TCC Smart Plantio

Use o texto abaixo como contexto completo para pedir ajuda a uma IA sobre o projeto Smart Plantio.

---

Quero ajuda com meu TCC chamado Smart Plantio, um sistema web para gestao agricola focado em pequenos produtores.

## Contexto geral do projeto

O sistema se chama Smart Plantio e e um projeto de TCC da UNIFAL. Ele foi desenvolvido para auxiliar na gestao de propriedades rurais, com foco em organizacao, acompanhamento e analise de dados ligados a producao agricola.

O projeto possui:

- Backend em Node.js com Express.
- ORM Sequelize.
- Banco de dados MySQL.
- Frontend em React com Vite.
- Componentes de interface com Material UI.
- Graficos com Nivo.
- Autenticacao com Google OAuth.

## Estrutura funcional do sistema

O sistema possui os seguintes modulos principais:

- Login com Google.
- Cadastro e gerenciamento de propriedades.
- Cadastro e gerenciamento de glebas ou talhoes.
- Cadastro e gerenciamento de safras.
- Cadastro e gerenciamento de custos.
- Cadastro e gerenciamento de itens de estoque.
- Dashboards de safra e analise de custos.
- Convites de colaboracao entre usuarios.

## Modelo de dados e entidades principais

As principais entidades do backend sao:

- users
- properties
- user_properties
- glebas
- safra
- custos
- invites
- storage_items
- safra_glebas

O sistema usa relacionamentos entre essas entidades para controlar acesso, associacao de safras a glebas, custos por safra e propriedade, e compartilhamento entre usuarios.

## Fluxo principal da aplicacao

O fluxo esperado do usuario e este:

1. Entrar com conta Google.
2. Acessar a area principal do sistema.
3. Criar ou visualizar propriedades.
4. Vincular glebas e safras.
5. Registrar custos e itens de estoque.
6. Consultar dashboards e relatorios.
7. Compartilhar acesso com outros usuarios via convites.

## Rotas e telas do frontend

O frontend contem rotas para:

- Login.
- Home.
- Dashboard projetado e realizado.
- Propriedades.
- Glebas.
- Safras.
- Custos.
- Estoque.
- Convites.
- Graficos de barras, pizza e linha.

## Rotas principais do backend

O backend expoe endpoints para:

- /login
- /user
- /properties
- /glebas
- /safras
- /custos
- /storage
- /invites
- rotas de dashboard e relatorios

## Problemas e pontos de atencao do projeto

Se for util para a resposta, considere que o projeto pode ter fragilidades como:

- falta de indicadores claros de carregamento em algumas telas;
- formularios com validacao que podem ser melhorados;
- possivel ausencia de paginação em listas grandes;
- necessidade de confirmar melhor acoes destrutivas como exclusao;
- dependencias de configuracao local em ambiente de desenvolvimento;
- necessidade de revisar usabilidade e responsividade.

## Objetivo dos testes de usabilidade

Quero montar testes de usabilidade em duas rodadas:

1. Uma primeira rodada com a versao atual do sistema para encontrar problemas reais.
2. Uma segunda rodada com as mesmas tarefas, depois de corrigir os problemas, para comparar os resultados.

## O que quero que a IA me ajude a produzir

Quero que a IA me ajude com os seguintes materiais:

- roteiro de testes de usabilidade;
- formulacao academica para TCC;
- lista de tarefas para os participantes;
- metricas de coleta;
- tabela de comparacao entre rodada 1 e rodada 2;
- sugestoes de melhorias de interface;
- texto para relatar os resultados;
- orientacoes para monitoramento durante o teste;
- ideias para testes de aplicabilidade no futuro.

## Como eu quero a resposta da IA

Quero respostas objetivas, bem organizadas e, quando possivel, prontas para usar no TCC. Se houver sugestao de documento, quero que ela venha com estrutura de seções, subtitulos e linguagem formal.

## Roteiro desejado para os testes

As tarefas devem incluir:

- login;
- criacao de propriedade;
- criacao de gleba;
- criacao de safra;
- lancamento de custo;
- consulta de custo total;
- visualizacao de dashboards;
- cadastro de item de estoque;
- envio de convite;
- edicao e exclusao de registros.

## Metricas desejadas

Quero acompanhar:

- tempo por tarefa;
- taxa de conclusao;
- numero de erros;
- pedidos de ajuda;
- cliques errados;
- satisfacao do usuario;
- observacoes qualitativas;
- melhorias entre a rodada 1 e a rodada 2.

## Observacao importante

Se a IA sugerir melhorias, quero que ela considere o contexto de um TCC e de um sistema web real, sem inventar solucoes desconectadas da minha arquitetura atual.

---

Se quiser, voce pode usar este prompt para pedir:

- uma analise do projeto;
- um roteiro de testes;
- uma versao academica do texto;
- ideias de melhorias;
- um plano de correcoes por prioridade;
- ou um roteiro de apresentacao para banca.
