# Teste de Usabilidade no SmartPlantio

Este documento explica como aplicar teste de usabilidade no projeto SmartPlantio, se a ideia faz sentido para um TCC e como estruturar uma primeira rodada de avaliação antes e depois de melhorias.

## 1. Faz sentido para o TCC?

Sim. No seu caso, o teste de usabilidade faz bastante sentido porque o sistema é uma aplicação real, com várias telas e tarefas concretas, como cadastro, consulta, edição e visualização de dados. Isso permite avaliar não só se o sistema funciona, mas também se ele é fácil de aprender, rápido de usar e claro para o usuário.

O formato que você pensou também é válido para um TCC:

1. Publicar uma versão para usuários reais testarem.
2. Aplicar um primeiro teste de usabilidade.
3. Identificar dificuldades, erros e gargalos.
4. Corrigir o sistema.
5. Aplicar um segundo teste.
6. Comparar os resultados.

Esse ciclo é bom academicamente porque mostra uma evolução concreta do projeto e permite comparar antes e depois com evidências.

## 2. O que é teste de usabilidade?

Teste de usabilidade é uma avaliação em que pessoas reais executam tarefas no sistema enquanto você observa como elas interagem com a interface.

O objetivo não é testar só o código, mas sim a experiência do usuário. Você quer entender coisas como:

- O usuário encontra facilmente o que procura?
- Ele entende os botões e menus?
- Ele consegue concluir tarefas sem ajuda?
- Ele demora muito em alguma etapa?
- Ele comete erros por causa da interface?

## 3. Como aplicar no seu projeto

Para o SmartPlantio, você pode montar tarefas parecidas com o uso real do sistema. Exemplos:

- Fazer login.
- Criar uma propriedade.
- Criar um talhão dentro de uma propriedade.
- Registrar uma safra.
- Lançar um custo.
- Consultar o relatório de custos.
- Ver o dashboard de safra.
- Enviar um convite de colaboração.

Essas tarefas são boas porque cobrem o fluxo principal do sistema e mostram onde o usuário trava.

### O que observar durante o teste

Durante cada tarefa, observe:

- Se o usuário entende o objetivo da tela.
- Se ele encontra os botões sem ajuda.
- Se ele erra cliques, volta páginas ou se perde no menu.
- Quanto tempo ele leva para concluir a tarefa.
- Se ele depende de instruções suas.

## 4. Fazer teste em dois momentos

A sua ideia de fazer um primeiro teste, corrigir o sistema e depois testar de novo é correta e muito boa para TCC.

Você pode estruturar assim:

### Rodada 1: versão inicial

Use a versão atual do sistema e peça para os usuários executarem as tarefas sem muita orientação.

Objetivo:

- descobrir problemas reais de navegação,
- medir tempo de execução,
- identificar telas confusas,
- registrar feedback espontâneo.

### Rodada 2: versão corrigida

Depois das melhorias, repita as mesmas tarefas com outros usuários ou com os mesmos usuários em um novo momento.

Objetivo:

- verificar se os problemas foram reduzidos,
- comparar tempo, erros e satisfação,
- mostrar ganho prático das correções.

## 5. Publicar na Netlify: faz sentido?

Sim, para o frontend faz bastante sentido. A Netlify é útil porque facilita o acesso externo ao sistema, então você consegue mandar um link para os participantes do teste.

Mas existe um ponto importante no seu projeto: ele não é só frontend. Como você tem backend em Node.js e banco MySQL, a Netlify sozinha normalmente não resolve tudo.

Então o ideal é pensar assim:

- Frontend: Netlify.
- Backend/API: outro serviço de hospedagem, ou um ambiente de teste separado.
- Banco de dados: uma instância de teste com dados controlados.

Se o backend não estiver acessível publicamente, o teste de usabilidade vai ficar limitado ou pode falhar.

## 6. Sobre “reproduzir” problemas de performance

A ideia de simular problemas de performance é válida, mas o melhor caminho é tratar isso como teste controlado, e não como algo para “fazer o usuário sofrer”. Em termos de TCC, o ideal é provocar cenários que revelem os gargalos da interface e do sistema de forma ética e justificável.

Você pode reproduzir problemas de maneira segura com:

- listas maiores de registros,
- conexões mais lentas,
- throttling de rede no navegador,
- simulação de celular ou computador mais fraco,
- carregamento de dados iniciais mais pesados,
- navegação entre telas com muitos componentes.

Isso permite ver como o sistema se comporta em situações reais de uso, sem precisar criar um ambiente hostil ao usuário.

### O que vale medir nesse cenário

- tempo para carregar a primeira tela,
- tempo para trocar de rota,
- tempo para abrir formulários e relatórios,
- travamentos visuais,
- demora em listas e gráficos,
- sensação de lentidão percebida pelo usuário.

## 7. Como estruturar o experimento

Uma forma simples e bem defensável no TCC é usar esta estrutura:

### Perfil dos participantes

- 5 a 10 usuários já ajudam bastante para encontrar problemas de usabilidade.
- Se possível, misture perfis com mais e menos familiaridade com sistemas web.
- Tente incluir pessoas que representem o público do projeto, como alguém do meio rural ou alguém que consiga avaliar a utilidade da aplicação para pequenos produtores.

### Roteiro de tarefas

Para cada participante, peça para executar tarefas específicas.

Exemplo de roteiro:

1. Entrar no sistema.
2. Encontrar a área de propriedades.
3. Criar uma nova propriedade.
4. Criar um talhão.
5. Registrar uma safra.
6. Lançar um custo.
7. Abrir o dashboard e interpretar um gráfico.

### Coleta de dados

Você pode coletar:

- tempo de execução;
- número de erros ou tentativas;
- dúvidas verbais do usuário;
- nota de satisfação ao final;
- comentários livres.

## 8. Métricas que você pode usar

As métricas mais fáceis de justificar em um TCC são:

- Taxa de conclusão: quantos conseguem terminar a tarefa.
- Tempo médio: quanto tempo cada tarefa leva.
- Quantidade de erros: cliques errados, retorno, abandono, confusão.
- Satisfação percebida: nota dada pelo usuário.
- SUS: System Usability Scale, um questionário padrão de usabilidade.

Se quiser algo mais simples, você também pode usar perguntas curtas após cada tarefa, como:

- Quão fácil foi realizar isso?
- O que te confundiu?
- O que você mudaria nessa tela?

## 9. Comparação antes e depois

Essa é a parte mais forte para o TCC.

Você pode mostrar algo como:

- antes: usuários demoravam mais para completar tarefas;
- antes: vários se perdiam no menu ou nas telas de cadastro;
- depois: menos erros e menos tempo;
- depois: maior satisfação e melhor entendimento.

Se você conseguir mostrar isso em tabela ou gráfico, o resultado fica ainda mais forte.

## 10. Como pegar dados dos usuários na prática

Você tem três formas principais de coletar dados durante o teste:

### 1. Observação direta

Você acompanha o usuário enquanto ele executa as tarefas e anota:

- tempo gasto em cada tarefa;
- onde ele hesitou;
- onde errou;
- se precisou de ajuda;
- comentários falados durante o uso.

Essa é a forma mais simples e mais útil para um TCC, porque você entende o motivo do problema, não só o número.

### 2. Ferramentas de analytics

Ferramentas como Google Analytics ajudam a medir navegação, páginas acessadas, eventos e funis. Elas são boas para saber:

- quantas pessoas entraram no sistema;
- quais telas foram acessadas;
- onde o usuário saiu do fluxo;
- quais botões foram clicados;
- quanto tempo, em média, a pessoa ficou no site.

O Google Analytics é útil, mas sozinho ele não é suficiente para teste de usabilidade, porque ele mostra comportamento agregado e não explica bem a dificuldade real do usuário.

### 3. Ferramentas de replay, heatmap e sessão

Essas são mais fortes para usabilidade do que analytics puro, porque mostram como o usuário realmente interagiu com a tela.

Exemplos:

- Microsoft Clarity: grava sessão, mostra mapas de calor e cliques.
- Hotjar: grava sessões, heatmaps e feedbacks rápidos.
- PostHog: eventos, funis, gravação de sessão e análise de produto.

Se o seu objetivo é entender onde o usuário trava na interface, essas ferramentas costumam ser mais úteis que o Google Analytics isolado.

## 11. O que eu recomendo para o seu caso

Para o SmartPlantio, a melhor estratégia é combinar três coisas:

1. Questionário e observação durante o teste.
2. Métricas objetivas dentro da aplicação.
3. Uma ferramenta externa de analytics ou replay.

Isso deixa sua pesquisa mais forte porque você junta percepção do usuário com evidência técnica.

### Sugestão prática de combinação

- Google Analytics 4: para volume de acessos, páginas e eventos simples.
- Microsoft Clarity: para ver sessões, cliques e pontos de confusão.
- Registro manual ou planilha: para anotar tempo, erros e conclusão de tarefa.

Se você quiser algo mais acadêmico e fácil de explicar no TCC, o Clarity costuma ser mais visual e mais interessante para demonstrar usabilidade do que o Google Analytics puro.

## 12. Como medir dentro da aplicação

Além da ferramenta externa, você pode registrar eventos específicos no seu próprio sistema. Por exemplo:

- login realizado;
- propriedade criada;
- talhão criado;
- custo salvo;
- relatório aberto;
- erro de validação;
- clique em cancelar;
- tempo gasto em cada tarefa.

Esses eventos podem ser enviados para uma ferramenta de analytics ou salvos em um log interno da aplicação.

Se você quiser algo simples, já resolve bastante salvar em banco uma tabela de eventos do teste, com:

- id do usuário de teste;
- nome da ação;
- data e hora;
- tela;
- tempo gasto;
- resultado da ação;
- observação.

## 13. Como fazer isso sem complicar demais

Se você não quiser depender de uma configuração muito complexa, pode seguir este caminho:

1. Criar uma versão de teste do sistema.
2. Instrumentar as telas principais com eventos básicos.
3. Usar uma ferramenta como Clarity ou GA4.
4. Pedir para o usuário executar tarefas pré-definidas.
5. Registrar tempo, erros e comentários em uma planilha.
6. Comparar os resultados entre a primeira e a segunda rodada.

## 14. Cuidados com privacidade e ética

Como você vai coletar dados de usuários, precisa tomar cuidado com privacidade.

Considere:

- avisar o participante sobre o que será coletado;
- pedir consentimento antes do teste;
- evitar expor dados pessoais desnecessários;
- usar ambiente de teste com dados fictícios, quando possível;
- não coletar mais informação do que você realmente precisa para a pesquisa.

Se você usar gravação de sessão, isso deve estar explícito no termo de participação.

## 15. Cuidados importantes

1. Não deixe o teste virar uma prova para “pegar erro” do usuário. O foco é a interface, não a capacidade da pessoa.
2. Não explique demais antes do teste, senão você mascara os problemas reais.
3. Use tarefas realistas, ligadas ao uso do sistema.
4. Registre tudo de forma organizada.
5. Se for comparar antes e depois, mantenha as tarefas iguais ou muito parecidas.

## 16. Sugestão de metodologia para escrever no TCC

Você pode descrever o processo assim:

"Foi realizado um teste de usabilidade com usuários representativos do público-alvo, utilizando tarefas práticas relacionadas às funcionalidades principais do SmartPlantio. A avaliação foi conduzida em duas etapas: uma primeira rodada com a versão inicial do sistema e uma segunda rodada após melhorias de interface e desempenho. Foram coletados tempo de execução, taxa de conclusão, erros observados e percepção de satisfação dos participantes."

## 17. Conclusão

Sim, sua ideia faz sentido para o TCC. O caminho mais forte é:

- publicar o frontend para acesso remoto;
- preparar um backend estável de teste;
- aplicar um primeiro teste de usabilidade;
- registrar os problemas;
- corrigir a interface e os gargalos;
- repetir o teste e comparar os resultados.

O ponto mais importante é tratar a simulação de performance como teste controlado e ético, focado em revelar gargalos reais de uso. Isso fortalece seu trabalho e deixa a metodologia bem defensável academicamente.

## 18. Próximo passo recomendado

Se quiser, o próximo passo pode ser transformar este texto em um plano prático com:

- roteiro de tarefas para os usuários,
- formulário de perguntas,
- modelo de termo de participação,
- tabela para registrar resultados,
- texto pronto para a seção de metodologia do TCC.

## 19. Script prático para aplicar o teste

Você pode conduzir o teste quase como uma entrevista guiada. Abaixo está um roteiro simples para usar com cada participante.

### Abertura do moderador

"Obrigado por participar. Este teste não avalia você, e sim o sistema. Quero observar como você usa a aplicação, onde encontra dificuldades e quanto tempo leva para concluir algumas tarefas. Se você se confundir, tudo bem, porque isso também ajuda na pesquisa. Fique à vontade para falar o que está pensando enquanto usa o sistema."

### Instruções antes de começar

"Eu vou pedir algumas tarefas. Tente realizá-las como faria normalmente. Se algo estiver confuso, me diga o que está pensando. Eu não vou ajudar a menos que você fique travado, porque quero entender como a interface se comporta sozinha."

### Encerramento do teste

"Agora quero que você responda algumas perguntas rápidas sobre a experiência. Suas respostas vão ajudar a comparar a versão inicial com a versão corrigida do sistema."

## 20. Roteiro de tarefas para o participante

Use tarefas curtas e objetivas. O ideal é que cada tarefa tenha um começo e um fim claros.

### Tarefas sugeridas

1. Entrar no sistema.
2. Encontrar o menu de propriedades.
3. Cadastrar uma nova propriedade.
4. Abrir a propriedade cadastrada.
5. Criar um talhão.
6. Cadastrar uma safra.
7. Registrar um custo.
8. Abrir o relatório de custos.
9. Consultar o dashboard de safra.
10. Sair da conta.

### Exemplo de comando para o usuário

"Imagine que você acabou de começar a usar o SmartPlantio. Cadastre uma propriedade fictícia e, em seguida, registre um talhão e um custo para essa propriedade. Depois, abra o painel de custos e me diga se os dados fazem sentido para você."

## 21. Métricas que medir antes e depois

Para comparar a versão inicial com a versão corrigida, use sempre as mesmas métricas nas duas rodadas.

### Métricas principais

- Tempo total por tarefa: quanto o usuário leva para concluir cada ação.
- Taxa de conclusão: quantos usuários completam a tarefa sem ajuda.
- Número de erros: cliques errados, campos incorretos, telas abertas por engano.
- Número de pedidos de ajuda: quantas vezes o usuário precisa de intervenção.
- Tempo de carregamento percebido: se a tela parece lenta para abrir.
- Satisfação final: nota dada pelo usuário no fim do teste.

### Métricas secundárias

- Número de retornos ao menu anterior.
- Número de vezes que o usuário hesita antes de clicar.
- Número de telas abertas sem necessidade.
- Quantidade de comentários negativos ou positivos.
- SUS ou nota simples de 1 a 5 para usabilidade geral.

### Tabela simples para registro

Você pode registrar assim:

| Usuário | Tarefa | Tempo | Concluiu? | Erros | Pediu ajuda? | Observações |
| --- | --- | --- | --- | --- | --- | --- |
| U1 | Criar propriedade | 1m20s | Sim | 1 | Não | Procurou o botão de adicionar |
| U1 | Criar talhão | 2m10s | Sim | 2 | Sim | Confundiu com tela de propriedades |

## 22. Como montar o teste de performance/usabilidade

Se sua intenção é medir quanto o site fica mais rápido depois das correções, o melhor é usar um teste em duas camadas: experiência do usuário e desempenho técnico.

### Camada 1: experiência do usuário

Nesta camada você mede o que o usuário percebe.

Exemplo de observações:

- quanto tempo ele demora para achar uma funcionalidade;
- se ele acha o menu confuso;
- se os gráficos carregam de forma clara;
- se ele acha a tela lenta mesmo quando ela está tecnicamente carregada.

### Camada 2: desempenho técnico

Nesta camada você mede a aplicação em si.

Ferramentas úteis:

- Lighthouse: avalia desempenho, acessibilidade e boas práticas.
- Chrome DevTools Performance: mostra gargalos de renderização e carregamento.
- React DevTools Profiler: ajuda a ver re-renders desnecessários.
- WebPageTest ou PageSpeed Insights: medem tempo de carregamento e métricas da página.

### Cenário de teste recomendado

Faça o teste com cenários parecidos nas duas versões:

1. Acesso inicial ao sistema.
2. Abertura do dashboard.
3. Navegação para propriedades.
4. Cadastro de uma entidade nova.
5. Abertura de gráficos e relatórios.
6. Logout e novo login.

Se quiser simular carga, use:

- muitos registros no banco;
- navegador com throttling de rede;
- modo mobile;
- computador mais simples;
- listas longas para verificar rolagem e renderização.

### O que comparar depois

- tempo de carregamento da página inicial;
- tempo para abrir o dashboard;
- tempo para concluir uma tarefa;
- número de erros por tarefa;
- percepção de fluidez do usuário;
- nota final de satisfação.

## 23. Como apresentar isso no TCC

Uma forma clara de escrever é separar os resultados em três blocos:

### Antes das correções

- mostrar onde os usuários travavam;
- mostrar os tempos médios;
- destacar telas confusas;
- relatar sensação de lentidão.

### Depois das correções

- mostrar queda no tempo de execução;
- mostrar redução de erros;
- mostrar melhora na navegação;
- mostrar aumento da satisfação.

### Comparação final

- apresentar tabela com antes e depois;
- apresentar gráficos de tempo e erros;
- comentar o que melhorou e o que ainda pode melhorar.

## 24. Modelo de interpretação dos resultados

Você pode interpretar os dados assim:

"Na primeira rodada, os usuários apresentaram dificuldade para localizar ações principais e relataram sensação de lentidão em telas com gráficos e formulários. Após as alterações, observou-se redução no tempo de execução, menor número de erros e maior clareza na navegação, indicando melhora na usabilidade e na percepção de desempenho do sistema."

## 25. Recomendação final para o seu caso

Para o seu TCC, eu recomendo este fluxo:

1. Publicar uma versão estável do frontend.
2. Garantir backend e banco acessíveis para teste.
3. Instrumentar eventos básicos ou usar Clarity/Lighthouse.
4. Aplicar o primeiro teste com 5 a 10 participantes.
5. Registrar tempos, erros e comentários.
6. Corrigir os pontos mais relevantes.
7. Repetir o teste com o mesmo roteiro.
8. Comparar os resultados antes e depois.

Esse formato é bom porque une usabilidade e performance de um jeito defendável academicamente e simples de executar.