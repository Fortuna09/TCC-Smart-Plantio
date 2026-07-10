**UNIVERSIDADE FEDERAL DE ALFENAS**  
**INSTITUTO DE CIÊNCIAS EXATAS**  
**DEPARTAMENTO DE CIÊNCIA DA COMPUTAÇÃO**  
**BACHARELADO EM CIÊNCIA DA COMPUTAÇÃO**

<br><br><br><br><br><br>

**RAFAEL SILVA FORTUNA**

<br><br><br><br><br><br><br><br>

# TESTES DE USABILIDADE DO SOFTWARE DE GESTÃO AGRÍCOLA SMARTPLANTIO

<br><br><br><br><br><br><br><br><br><br>

**Trabalho de Conclusão de Curso apresentado ao Instituto de Ciências Exatas da Universidade Federal de Alfenas como requisito parcial à obtenção do título de Bacharel em Ciência da Computação.**

**Orientador: Prof. Dr. Paulo Alexandre Bressan**

<br><br><br><br><br><br>

**Alfenas, MG**  
**2026**

---

## RESUMO

A agricultura brasileira enfrenta abismo tecnológico significativo: mais de 77% dos estabelecimentos rurais são agricultura familiar (IBGE, 2019), segmento subatendido por ferramentas digitais de gestão. O Smart Plantio é plataforma web projetada para auxiliar gestão de propriedades rurais de pequeno porte, centralizando informações financeiras, de safras e custos. Este TCC avaliou a usabilidade dessa plataforma através de metodologia científica fundamentada em Interação Humano-Computador (IHC). Foram estruturadas duas rodadas de testes de usabilidade com seis participantes de perfis distintos (leigos, agricultores, técnicos), aplicando protocolo Think-Aloud e mensurando métricas de efetividade, eficiência e satisfação conforme ISO/IEC 9241-11. A primeira rodada (maio/2026) identificou onze problemas críticos, incluindo falhas catastróficas que impediam tarefas essenciais, resultando em NPS de −83,3. Com base nos achados, foram implementadas intervenções técnicas priorizadas segundo Nielsen, envolvendo correções no backend (Node.js/Express), frontend (React/Material UI) e arquitetura de dados (MySQL/Sequelize), totalizando 47 commits documentados. A segunda rodada (junho/2026) validou empiricamente as melhorias: NPS evoluiu para +33,3 (melhoria de 116,6 pontos percentuais), tempo médio por tarefa reduziu 27,6%, taxa de sucesso alcançou 100%, erros diminuíram 87,5%, e satisfação aumentou 67,9%. Os resultados evidenciam a importância crítica da validação empírica com usuários reais para detecção de barreiras de usabilidade, contribuindo para literatura de IHC aplicada a sistemas de gestão agrícola.

**Palavras-chave:** Usabilidade. Interação Humano-Computador. Gestão Agrícola. Agricultura Familiar. Testes com Usuários.

---

## ABSTRACT

Brazilian agriculture faces a significant technological gap: over 77% of rural establishments are family farming (IBGE, 2019), a segment underserved by digital management tools. Smart Plantio is a web platform designed to assist small-scale rural property management by centralizing financial, crop, and cost information. This undergraduate thesis evaluated the usability of this platform through rigorous scientific methodology grounded in Human-Computer Interaction (HCI). Two rounds of usability testing were conducted with six participants from different profiles (laypeople, farmers, technical users), applying the Think-Aloud protocol and measuring effectiveness, efficiency, and satisfaction metrics according to ISO/IEC 9241-11. The first round (May/2026) identified eleven critical problems, including catastrophic failures preventing essential tasks, resulting in an NPS of −83.3. Based on findings, technical interventions were implemented prioritized according to Nielsen's severity scale, involving corrections in the backend (Node.js/Express), frontend (React/Material UI), and data architecture (MySQL/Sequelize), totaling 47 documented commits. The second round (June/2026) empirically validated improvements: NPS evolved to +33.3 (improvement of 116.6 percentage points), average time per task reduced 27.6%, success rate reached 100%, errors decreased 87.5%, and satisfaction increased 67.9%. Results highlight the critical importance of empirical validation with real users for detecting usability barriers, contributing to HCI literature applied to agricultural management systems.

**Keywords:** Usability. Human-Computer Interaction. Agricultural Management. Family Farming. User Testing.

---

## LISTA DE FIGURAS

Figura 1 — Comparação de tempo médio por tarefa (Rodada 1 vs. Rodada 2) ...................... XX  
Figura 2 — Evolução do Net Promoter Score (NPS) ......................................................... XX  
Figura 3 — Problema P-01: Bug catastrófico na edição de talhões .................................. XX  
Figura 4 — Problema P-02: Erro HTTP 500 na renderização de gráficos .......................... XX  
Figura 5 — Problema P-03: Botão de edição difícil de localizar .................................... XX  
Figura 6 — Problema P-04: Ausência de botão "Voltar" em formulários .......................... XX  
Figura 7 — Problema P-07: Ausência de indicador de carregamento ............................... XX  
Código 1 — Correção do bug catastrófico P-01 (edição de talhões) .............................. XX  
Código 2 — Implementação de indicadores de carregamento (P-07) ................................. XX  
Código 3 — Configuração de CORS e porta dinâmica para deploy .................................... XX

---

## LISTA DE TABELAS

Tabela 1 — Inspeção técnica conduzida pelo desenvolvedor (13/05/2026) ........................ XX  
Tabela 2 — Perfil dos participantes da Rodada 1 ............................................................. XX  
Tabela 3 — Métricas de desempenho por tarefa (Rodada 1) ............................................. XX  
Tabela 4 — Problemas de usabilidade identificados na Rodada 1 ..................................... XX  
Tabela 5 — Avaliação NPS individual (Rodada 1) ........................................................... XX  
Tabela 6 — Mapeamento de problemas e intervenções técnicas ....................................... XX  
Tabela 7 — Métricas de desempenho por tarefa (Rodada 2) ............................................. XX  
Tabela 8 — Avaliação NPS individual (Rodada 2) ........................................................... XX  
Tabela 9 — Comparação consolidada Rodada 1 vs. Rodada 2 .......................................... XX

---

## SUMÁRIO

1. [INTRODUÇÃO](#1-introdução) ................................................................................. XX  
2. [OBJETIVOS](#2-objetivos) ....................................................................................... XX  
   2.1. Objetivo Geral ..................................................................................................... XX  
   2.2. Objetivos Específicos .......................................................................................... XX  
3. [JUSTIFICATIVA](#3-justificativa) ............................................................................ XX  
4. [REFERENCIAL TEÓRICO](#4-referencial-teórico) ................................................. XX  
   4.1. Gestão Agrícola e o Pequeno Produtor ................................................................ XX  
   4.2. Softwares de Gestão Agrícola no Mercado Brasileiro .......................................... XX  
   4.3. O Sistema Smart Plantio ...................................................................................... XX  
   4.4. Testes de Usabilidade e Interação Humano-Computador ...................................... XX  
5. [METODOLOGIA](#5-metodologia) ........................................................................... XX  
   5.1. Classificação da Pesquisa .................................................................................... XX  
   5.2. Design Experimental ............................................................................................ XX  
   5.3. População e Amostra ........................................................................................... XX  
   5.4. Instrumentos de Coleta de Dados ........................................................................ XX  
   5.5. Procedimentos de Teste ....................................................................................... XX  
   5.6. Análise de Dados ................................................................................................. XX  
6. [RESULTADOS E DISCUSSÃO](#6-resultados-e-discussão) ..................................... XX  
7. [CONCLUSÃO](#7-conclusão) .................................................................................... XX  
[REFERÊNCIAS](#referências) ...................................................................................... XX  
[APÊNDICES](#apêndices) ............................................................................................. XX  

---

# 1. INTRODUÇÃO

A agricultura brasileira desempenha papel estratégico na economia nacional, responsável por 27% do PIB (IBGE, 2019). Segundo o Censo Agropecuário de 2017, mais de 77% dos estabelecimentos rurais brasileiros são agricultura familiar (3,9 milhões de propriedades), responsáveis por 23% do valor da produção nacional e pela maior parte dos alimentos consumidos internamente (IBGE, 2019; EMBRAPA, 2018). Apesar dessa relevância socioeconômica, existe abismo tecnológico entre grandes corporações do agronegócio e o pequeno produtor rural.

Enquanto o grande latifúndio acessa agricultura de precisão via satélite, drones, sensores de solo e Business Intelligence, o pequeno agricultor carece de ferramentas básicas para organizar custos, planejar safras e entender rentabilidade de sua terra (IBGE, 2019; EMBRAPA, 2018). Essa disparidade cria desvantagem competitiva significativa.

A gestão de propriedade rural envolve complexidade além de plantio e colheita: controle de insumos em estoque, divisão da terra em glebas, registro detalhado de custos fixos e variáveis, e acompanhamento do ciclo de safras. Quando realizadas manualmente, essas tarefas tornam-se suscetíveis a erros, omissões e perda de informações críticas (IBGE, 2019; SEBRAE, 2020). Essa falta de estruturação impede decisões estratégicas: identificar momento ideal para compra de insumos, determinar culturas com melhor ROI, calcular custos unitários, e planejar fluxo de caixa ficam prejudicados (EMBRAPA, 2018).

O **Smart Plantio** é plataforma web de gestão agrícola desenvolvida na Universidade Federal de Alfenas (UNIFAL) em 2025, projetada para pequenos produtores e construída sobre tecnologias consolidadas — Node.js/Express no backend, React/Vite no frontend e MySQL/Sequelize para persistência (LAGE, 2025). O sistema centraliza informações financeiras, de safras e custos, oferecendo cadastro de propriedades e talhões, registro de safras, lançamento de custos por categorias, controle de estoque e geração automática de relatórios e gráficos financeiros. Este trabalho parte da plataforma já existente com foco complementar: enquanto o TCC de origem abordou o desenvolvimento técnico, a presente pesquisa dedica-se à avaliação científica da **usabilidade**, reconhecendo que facilidade de uso é tão importante quanto solidez técnica, especialmente para público com diferentes níveis de letramento digital (CYBIS; BETIOL; FAUST, 2015; NIELSEN, 1993).

A metodologia fundamenta-se em princípios de Interação Humano-Computador (IHC), estabelecendo que qualidade de sistema interativo deve ser avaliada pela capacidade de permitir que usuários reais atinjam objetivos de forma efetiva (completando tarefas com sucesso), eficiente (com mínimo de esforço e tempo) e satisfatória (com conforto e percepção positiva), conforme norma ISO/IEC 9241-11 (ISO/IEC, 2018).

A pesquisa estruturou-se em dois ciclos experimentais. A primeira rodada (maio/2026) com seis participantes de perfis diversos (leigos, agricultores, técnicos) detectou barreiras de usabilidade através de métricas quantitativas (tempo, sucesso, erros) e protocolo Think-Aloud para captura de verbalizações (NIELSEN; LANDAUER, 1993; ERICSSON; SIMON, 1993). Após análise, foram implementadas intervenções técnicas priorizadas segundo Nielsen (1994), totalizando 47 commits documentados. A segunda rodada (junho/2026) validou empiricamente a eficácia das correções (PRODANOV; FREITAS, 2013).

O trabalho busca entregar ferramenta testada, otimizada e validada cientificamente para atender necessidades do produtor rural brasileiro, contribuindo para redução do abismo tecnológico e para literatura de IHC aplicada a sistemas de gestão agrícola.

---

# 2. OBJETIVOS

## 2.1. Objetivo Geral

Avaliar a usabilidade do sistema web Smart Plantio através de testes empíricos com usuários reais, identificando problemas críticos de interface, implementando melhorias fundamentadas em IHC e validando sua eficácia por análise comparativa.

## 2.2. Objetivos Específicos

a) Conduzir rodada inicial de testes com seis participantes de perfis diversos, aplicando protocolo Think-Aloud e mensurando métricas conforme ISO/IEC 9241-11, estabelecendo linha de base.

b) Identificar, catalogar e classificar problemas segundo escala de severidade de Nielsen, documentando manifestações quantitativas (tempos, erros, taxas) e qualitativas (verbalizações).

c) Implementar intervenções técnicas priorizadas no código-fonte (backend e frontend), documentando modificações via controle de versão e justificando decisões com base em princípios teóricos.

d) Conduzir segunda rodada com mesmos participantes e protocolo, permitindo comparação direta de métricas.

e) Analisar comparativamente dados das duas rodadas, calculando variações percentuais e validando estatisticamente as melhorias.

f) Contribuir para literatura de IHC aplicada a sistemas agrícolas, documentando metodologia, achados e lições aprendidas.

---

# 3. JUSTIFICATIVA

A relevância fundamenta-se em três pilares: impacto socioeconômico, eficiência operacional e contribuição técnico-científica.

## 3.1. Pilar Socioeconômico

A falta de controle sistemático sobre custos é fator principal de endividamento e desistência da atividade rural (IBGE, 2019). SEBRAE (2020) demonstra que agricultores familiares frequentemente desconhecem custos reais, operando com estimativas imprecisas. Sem consolidação sistemática de gastos, o preço de venda muitas vezes não cobre custos operacionais, gerando prejuízos invisíveis que corroem capital de giro.

O Smart Plantio, ao oferecer registro detalhado, categorização automática e dashboards visuais, empodera o produtor para gestão profissional (LAGE, 2025). Informações organizadas facilitam acesso a crédito rural e programas governamentais.

## 3.2. Pilar Operacional

A transição de registro manual para sistema digital integrado mitiga riscos de perda de informação e erros (EMBRAPA, 2018). Cadernos estão sujeitos a danos físicos e erros de transcrição; planilhas isoladas carecem de integração (SEBRAE, 2020). Gestão de estoque integrada evita compras redundantes ou faltas inesperadas, otimizando fluxo de caixa (LAGE, 2025). Sistema de colaboração via convites permite gestão compartilhada, essencial para profissionalização da sucessão familiar (EMBRAPA, 2018).

## 3.3. Pilar Técnico-Científico

O desafio está em projetar interfaces utilizáveis por público com limitações de letramento digital, acesso intermitente à internet, uso predominante de dispositivos móveis e contexto com distrações ambientais (CYBIS; BETIOL; FAUST, 2015).

O diferencial está na aplicação rigorosa de metodologia científica fundamentada em normas internacionais (ISO/IEC, 2018) e modelos teóricos (NIELSEN, 1993; BROOKE, 1996; REICHHELD, 2003). A literatura de IHC apresenta lacuna significativa quanto a sistemas agrícolas para pequenos produtores em países em desenvolvimento. Este trabalho contribui gerando evidências empíricas sobre desafios específicos e intervenções eficazes (NIELSEN; LANDAUER, 1993).

---

# 4. REFERENCIAL TEÓRICO

O referencial estabelece bases conceituais, metodológicas e tecnológicas que sustentam a compreensão do domínio do problema, das soluções implementadas no Smart Plantio e dos métodos de avaliação de usabilidade.

## 4.1. Gestão Agrícola e o Pequeno Produtor

A gestão de propriedade rural contemporânea exige que o produtor atue como gestor estratégico multifacetado, administrando recursos financeiros, materiais e humanos (IBGE, 2019). Segundo Embrapa, agricultura digital refere-se ao uso inteligente de informações para reduzir incertezas inerentes ao campo: variações climáticas, flutuações de mercado, pragas e volatilidade de preços (EMBRAPA, 2018).

Para o pequeno produtor, que opera com margens reduzidas e menor capacidade de absorver prejuízos, o principal desafio não é ausência de conhecimento agronômico — frequentemente transmitido entre gerações — mas capacidade de organizar sistematicamente fluxo de caixa e controle de insumos (IBGE, 2019; SEBRAE, 2020).

A ausência de visão sistêmica leva a confusão entre patrimônio familiar e capital de giro operacional. Essa falta de separação mascara custos reais de manutenção, depreciação e investimentos em infraestrutura, comprometendo sustentabilidade econômica no médio e longo prazo (SEBRAE, 2020).

Fragmentação de dados produtivos — custos de sementes, fertilizantes, mão de obra dispersos em anotações informais ou não registrados — dificulta cálculo do custo unitário por gleba ou por tonelada, impedindo análises comparativas entre safras (IBGE, 2019). Sistemas ERP simplificados permitem que dados sejam centralizados, transformando registros brutos em indicadores de desempenho (KPIs) como custo por hectare, rentabilidade por cultura, ROI e fluxo de caixa projetado (EMBRAPA, 2018; SEBRAE, 2020).

## 4.2. Softwares de Gestão Agrícola no Mercado Brasileiro

O mercado brasileiro apresenta crescimento significativo em tecnologia para agronegócio. Esta seção analisa principais plataformas disponíveis, contextualizando o Smart Plantio nesse ecossistema.

### 4.2.1. Panorama de Soluções Existentes

**[INSERIR TABELA 1: Comparação de funcionalidades dos principais softwares de gestão agrícola]**

*Tabela contendo: Nome do Software | Público-Alvo | Custo | Gestão Financeira | Emissão NF-e | App Móvel | Agricultura de Precisão | Gratuito/Trial*

*(Incluir: Aegro, Agrosmart, Strider, FieldView, Conta Azul Agro, Siagri, AgriManager, FarmLogs, Agripoint, GeoAgri, Smart Plantio)*

### 4.2.2. Lacunas Identificadas

O mercado apresenta concentração em médios e grandes produtores, com modelos de assinatura que representam barreiras financeiras para agricultura familiar. Principais lacunas: (1) barreira financeira — mesmo soluções acessíveis têm custos incompatíveis com orçamento familiar; (2) complexidade excessiva — funcionalidades avançadas introduzem curva de aprendizado íngreme; (3) ausência de gratuidade real — versões gratuitas são significativamente limitadas; (4) baixa aderência ao contexto brasileiro de pequenas propriedades.

O Smart Plantio posiciona-se para preencher essas lacunas: gratuidade completa (modelo 100% gratuito e open-source), foco em funcionalidades essenciais, interface simplificada em português, arquitetura web responsiva, e independência tecnológica (código aberto no GitHub).

## 4.3. O Sistema Smart Plantio

### 4.3.1. Arquitetura Backend com Node.js e Express

O backend do Smart Plantio utiliza Node.js com framework Express para construção de serviços REST, escolhidos por permitirem processamento concorrente eficiente e arquitetura escalável (TILKOV; VINOSKI, 2010). Essa combinação gerencia autenticação OAuth 2.0 com Google, validação de dados e tratamento de erros, com comunicação cliente-servidor baseada em métodos HTTP e JSON (LAGE, 2025).

### 4.3.2. Frontend com React, Vite e Material UI

O frontend utiliza React por sua abordagem declarativa e baseada em componentes reutilizáveis, facilitando manutenção e promovendo consistência visual (BANKS; PORCELLO, 2020; LAGE, 2025). Material UI foi integrado para garantir clareza visual e acessibilidade através dos padrões Material Design. Vite foi escolhido como ferramenta de build por proporcionar desenvolvimento ágil e otimizações para produção, cruciais para mitigar tempos de carregamento em conexões rurais limitadas (VITE, 2024; LAGE, 2025).

### 4.3.3. Persistência com MySQL e Sequelize

A camada de persistência utiliza MySQL por ser SGBD relacional maduro e adequado para sistema com entidades fortemente relacionadas (propriedades, talhões, safras, custos), garantindo integridade referencial e consultas complexas (SILBERSCHATZ; KORTH; SUDARSHAN, 2012). O ORM Sequelize abstrai manipulação SQL, aumentando produtividade do desenvolvimento e fornecendo proteção contra vulnerabilidades como SQL Injection (LAGE, 2025; MILANI, 2011).

## 4.4. Testes de Usabilidade e Interação Humano-Computador

A avaliação de qualidade de software transcende verificação de funcionamento técnico. Um sistema pode executar perfeitamente todas as operações e apresentar dificuldades intransponíveis de uso (PREECE; ROGERS; SHARP, 2019). Isso fundamenta Interação Humano-Computador (IHC), que estuda princípios, métodos e ferramentas para projeto, implementação e avaliação de sistemas interativos com ênfase em experiência de uso (CYBIS; BETIOL; FAUST, 2015).

### 4.4.1. Definição de Usabilidade e Atributos

A norma ISO/IEC 9241-11 define usabilidade como *"grau em que produto ou sistema pode ser utilizado por utilizadores específicos para alcançar objetivos específicos com efetividade, eficiência e satisfação, num contexto de uso especificado"* (ISO/IEC, 2018, p. 3). Três dimensões fundamentais:

**Efetividade:** Acurácia e completude com que usuários atingem objetivos. Mensurada por taxa de conclusão de tarefas (%).

**Eficiência:** Relação entre recursos empregados (tempo, esforço) e acurácia alcançada. Mensurada por tempo médio de execução e número de erros.

**Satisfação:** Ausência de desconforto e presença de atitudes positivas. Operacionalizada por escalas Likert, SUS (System Usability Scale) ou NPS (Net Promoter Score).

Nielsen (1993) decompõe usabilidade em cinco atributos: (1) Learnability (facilidade de aprendizagem), (2) Eficiência de especialistas, (3) Memorabilidade, (4) Tolerância a erros, (5) Satisfação subjetiva.

### 4.4.2. Heurísticas de Nielsen

Nielsen (1994) propõe dez princípios heurísticos para design e avaliação de interfaces: (1) Visibilidade do status do sistema, (2) Correspondência entre sistema e mundo real, (3) Controle e liberdade do utilizador, (4) Consistência e padrões, (5) Prevenção de erros, (6) Reconhecimento em vez de relembrança, (7) Flexibilidade e eficiência, (8) Estética e design minimalista, (9) Ajuda para reconhecer e recuperar-se de erros, (10) Ajuda e documentação.

### 4.4.3. Classificação de Severidade

Nielsen (1994) propõe escala de severidade combinando frequência, impacto e persistência: **Nível 0** (não é problema), **Nível 1** (cosmético), **Nível 2** (menor), **Nível 3** (grave), **Nível 4** (catastrófico — impedem uso completamente).

### 4.4.4. Protocolo Think-Aloud

Ericsson e Simon (1993) formalizam Think-Aloud: participante verbaliza continuamente pensamentos, expectativas e dúvidas durante interação. Pesquisador não intervém, apenas observa e registra verbalizações. O método rastreia origem cognitiva dos problemas, evidenciando modelo mental do usuário e divergências com modelo do designer — causa raiz da maioria dos problemas (PREECE; ROGERS; SHARP, 2019).

### 4.4.5. Escalas de Medição

**Escala Likert** (1932): Escala de atitudes com 5 ou 7 pontos representando concordância ou avaliação.

**SUS** (Brooke, 1996): Questionário padronizado de 10 itens avaliados em escala Likert, resultando em pontuação 0-100 (acima de 68 é acima da média, acima de 80 é excelente).

**NPS** (Reichheld, 2003): Probabilidade de recomendar (0-10). Usuários são classificados como Detratores (0-6), Neutros (7-8) ou Promotores (9-10). NPS = % Promotores − % Detratores. Valores negativos indicam rejeição crítica, acima de 50 são excelentes.

### 4.4.6. Amostragem

Nielsen e Landauer (1993) demonstram que a relação entre participantes testados e problemas descobertos segue curva de retorno decrescente. Testando 5 usuários, descobre-se ~85% dos problemas. Nielsen (2000) recomenda 5-7 participantes como suficiente para revelar 80-90% dos problemas críticos.

### 4.4.7. Usabilidade versus Aplicabilidade

**Usabilidade** investiga se o sistema é fácil de aprender, eficiente de usar, agradável e tolerante a erros, independentemente do domínio (ISO/IEC, 2018; NIELSEN, 1993).

**Aplicabilidade** investiga se a ferramenta resolve problemas reais de negócio, se funcionalidades são relevantes e úteis no contexto autêntico (DAVIS, 1989; MACAULAY, 1996).

Este trabalho foca especificamente em **usabilidade**.

---

# 5. METODOLOGIA

Este capítulo descreve os procedimentos executados para avaliar a usabilidade do Smart Plantio através de testes empíricos com usuários reais.

## 5.1. Caracterização da Pesquisa

Esta pesquisa caracteriza-se como aplicada, com objetivos descritivos e experimentais, utilizando método misto que integra dados quantitativos (tempos, taxas de sucesso, erros, pontuações de satisfação) e qualitativos (verbalizações dos participantes, observações diretas, feedback aberto). O método de coleta empregado foi o teste de usabilidade com utilizadores reais.

## 5.2. Procedimento Experimental

O estudo foi estruturado em duas rodadas de testes de usabilidade separadas por uma fase de intervenções técnicas:

**Rodada 1 (18-19 de maio de 2026):** Realizada presencialmente na Universidade Federal de Alfenas (UNIFAL), avaliou a versão original do sistema com 6 participantes de perfis distintos. Foram coletadas métricas de tempo de execução, taxa de sucesso, número de erros, verbalizações através do protocolo Think-Aloud, e avaliações de satisfação através de escalas Likert, questionário SUS e pergunta NPS. Esta rodada estabeleceu a linha de base de usabilidade do sistema.

**Fase de Intervenções Técnicas (20 de maio a 10 de junho de 2026):** Com base na análise dos dados coletados na Rodada 1, foram implementadas 47 correções no código-fonte do sistema, envolvendo modificações no backend (Node.js/Express) e frontend (React/Material UI). As correções foram priorizadas segundo a escala de severidade proposta por Nielsen (1994), atacando primeiro problemas catastróficos (que impediam completamente o uso) e problemas graves (que causavam dificuldade significativa). Todas as modificações foram documentadas através do sistema de controle de versão Git, com commits descritivos explicando o problema original, a solução implementada e a justificativa baseada em princípios de IHC.

**Rodada 2 (junho de 2026):** Os mesmos 6 participantes da Rodada 1 repetiram exatamente o mesmo guião de tarefas, agora utilizando a versão corrigida do sistema. O uso dos mesmos participantes permite comparação pareada das métricas, onde cada participante serve como seu próprio controle, fornecendo evidência empírica da eficácia das intervenções técnicas realizadas.

## 5.3. Participantes

Foram selecionados 6 participantes através de amostragem não probabilística intencional, divididos estrategicamente em três grupos de perfis distintos para maximizar a diversidade de perspectivas:

**Técnicos (n=2):** Participantes com formação em áreas de tecnologia da informação (ciência da computação, sistemas de informação), capazes de identificar e verbalizar falhas estruturais de arquitetura, inconsistências de design de interface, problemas de responsividade e questões de performance que outros grupos experimentam mas não conseguem articular tecnicamente.

**Agricultores (n=2):** Participantes que representam o público-alvo real do sistema — pessoas envolvidas diretamente em atividades agrícolas ou gestão de propriedades rurais. Sua participação foi essencial para verificar se a linguagem utilizada, os fluxos de trabalho propostos e os conceitos apresentados são compreensíveis e fazem sentido prático dentro da realidade do campo.

**Leigos (n=2):** Participantes sem formação técnica avançada em computação e sem conhecimento especializado do negócio agrícola. Esses participantes avaliaram a curva de aprendizagem e a autoexplicabilidade da interface, verificando se o sistema é suficientemente intuitivo para uso com mínima instrução prévia.

O sistema Smart Plantio foi originalmente desenvolvido por Renan Magalhães Lage como trabalho de conclusão de curso na Universidade Federal de Alfenas (UNIFAL) em 2025, sob orientação do Prof. Dr. Paulo Alexandre Bressan, com foco no desenvolvimento técnico completo da plataforma. Este trabalho complementa aquele ao avaliar cientificamente a usabilidade do sistema desenvolvido.

## 5.4. Instrumentos de Coleta

**a) Guião de Tarefas** (Apêndice A): Documento estruturado com 12 atividades sequenciais simulando fluxo real: (1) Login, (2) Criar propriedade, (3) Editar propriedade, (4) Deletar propriedade, (5) Criar talhão, (6) Editar talhão, (7) Deletar talhão, (8) Criar safra, (9) Editar safra, (10) Lançar custo, (11) Visualizar gráficos, (12) Adicionar estoque.

**b) Formulário de Registro** (Apêndice A): Planilha padronizada para anotação simultânea: tempo de início/conclusão, erros observados, necessidade de ajuda, verbalizações relevantes, avaliação Likert de satisfação por tarefa.

**c) Questionário Pós-Teste** (Apêndice B): Contém Likert consolidado, Questionário SUS (10 itens), Pergunta NPS, e perguntas abertas.

**d) Ferramentas Técnicas:** Cronômetro digital, Chrome DevTools (monitorar erros de console e requisições), gravador de áudio (verbalizações).

## 5.5. Procedimentos de Teste

Cada sessão individual (30-45 minutos), conduzida em ambiente controlado silencioso, segue etapas padronizadas:

**1. Recepção e Apresentação (5 min):** Explicação dos objetivos acadêmicos, procedimento, confidencialidade. Ênfase: avalia-se o sistema, não o participante.

**2. Contextualização do Sistema (3 min):** Breve introdução ao Smart Plantio, demonstração rápida de login.

**3. Ambientação Livre (5 min):** Exploração livre da interface para familiarização.

**4. Execução de Tarefas com Think-Aloud (20-25 min):** Participante recebe guião uma tarefa por vez, verbalizando continuamente. Pesquisador:
- NÃO intervém, NÃO oferece dicas, NÃO corrige erros
- Observa atentamente e registra: tempo, erros, verbalizações
- Após cada tarefa, pergunta satisfação Likert (1-5)

**5. Pós-Teste e Satisfação (5-10 min):** Preenchimento de questionário (SUS + NPS + perguntas abertas).

**6. Encerramento (2 min):** Agradecimento formal, esclarecimento de dúvidas finais.

Pesquisador adota postura de **observador neutro e não-intervencionista**, evitando expressões faciais, suspiros, dicas ou correção imediata de erros.

## 5.6. Análise dos Dados

Os dados coletados nas duas rodadas de testes foram submetidos a análise integrada quantitativa e qualitativa.

**Análise Quantitativa:** Para cada tarefa e para o conjunto geral de tarefas, foram calculadas médias aritméticas e desvios-padrão dos tempos de execução, taxas percentuais de sucesso, e médias de erros cometidos. As métricas de satisfação (escalas Likert de 1 a 5, pontuações SUS de 0 a 100, e Net Promoter Score) foram consolidadas por participante e por rodada. A comparação entre as duas rodadas foi realizada através de cálculo de variações percentuais para identificar a magnitude e direção das melhorias.

**Análise Qualitativa:** As verbalizações capturadas durante o protocolo Think-Aloud e os feedbacks abertos coletados nos questionários foram transcritos textualmente, submetidos a leitura exploratória para familiarização com os dados, codificados através da identificação e marcação de trechos relevantes que indicavam problemas ou aspectos positivos, e agrupados tematicamente em categorias como "problemas de navegação", "rótulos confusos", "falta de feedback visual" e "responsividade inadequada". Cada problema identificado foi classificado segundo a escala de severidade de Nielsen (1994) em quatro níveis: cosmético, menor, grave ou catastrófico. Os dados qualitativos foram cruzados com os quantitativos para validação mútua: se verbalizações indicavam que uma tarefa era confusa, isso deveria refletir-se em tempos elevados e baixa satisfação naquela tarefa.

**1. Transcrição:** Gravações transcritas textualmente

**2. Leitura Exploratória:** Familiarização com dados

**3. Codificação Inicial:** Marcação de trechos relevantes

**4. Agrupamento Temático:** Códigos similares agrupados ("problemas de navegação", "rótulos confusos", "falta de feedback")

**5. Classificação por Severidade:** Cada problema classificado segundo Nielsen (1994): Nível 4-Catastrófico, Nível 3-Grave, Nível 2-Médio, Nível 1-Cosmético

**6. Priorização de Intervenções:** Catastróficos e graves priorizados

**7. Triangulação:** Cruzamento de dados qualitativos com quantitativos para validação mútua

A integração dessas análises produz quadro compreensivo e multidimensional da usabilidade.

---

# 6. RESULTADOS E DISCUSSÃO

Este capítulo apresenta os dados empíricos obtidos na validação do Smart Plantio, estruturado em seis subseções: avaliação técnica preliminar, resultados da Rodada 1 (linha de base), intervenções técnicas, resultados da Rodada 2 (pós-correções), análise comparativa e discussão interpretativa à luz da literatura de IHC.

## 6.1. Avaliação Técnica Preliminar

Antes dos testes formais com usuários, o desenvolvedor conduziu inspeção técnica rigorosa em 13/05/2026 para identificar e corrigir falhas críticas que pudessem comprometer a validade científica dos testes. A inspeção seguiu o mesmo protocolo de tarefas que seria aplicado aos participantes, incluindo cronometragem, registro de erros no console (Chrome DevTools), medição de tempo de resposta das APIs, e anotação de problemas de interface (NIELSEN, 1994).

**Tabela 1 — Inspeção técnica conduzida pelo desenvolvedor**

| # | Tarefa | Status | Tempo (s) | Erros Console | Tempo API (s) | Problema Principal | Prioridade |
|---|--------|--------|-----------|---------------|---------------|-------------------|------------|
| 1 | Login | Sucesso | 16,9 | 1 | 2,6 | Autenticação exclusiva via Google OAuth; ausência de feedback para falhas | Média |
| 2 | Criar Propriedade | Sucesso | 15,2 | 1 | 2,6 | Campo "Cidade" aceita valores numéricos (falta validação) | Média |
| 3 | Criar Talhão | Sucesso | 12,1 | 0 | 7,7 | Requisição GET /user redundante a cada criação | Baixa |
| 4 | Criar Safra | Sucesso | 23,1 | 0 | 9,5 | Layout com baixa qualidade UX; carregamento muito lento | Baixa |
| 5 | Lançar Custo | Sucesso | 14,3 | 0 | 14,1 | Requisição extremamente lenta (GET /safras-by-user) | Baixa |
| 6 | Gerar Gráficos | **Falha** | 4,6 | 4 | 1,9 | Gráficos não renderizam; quatro erros HTTP 500 (falha crítica backend) | **Alta** |
| 7 | Criar Estoque | Sucesso | 15,8 | 0 | 4,6 | Requisição GET /user redundante | Baixa |
| 8 | Enviar Convite | Sucesso | 6,3 | 0 | 5,6 | Ausência de notificação visual para destinatário | Baixa |

**Fonte:** Elaborado pelo autor, 2026.

A inspeção revelou dois problemas críticos funcionais: (1) ausência de tratamento de erros na autenticação OAuth, gerando confusão em falhas de login; (2) módulo de gráficos inoperante com erros HTTP 500 causados por queries SQL malformadas (problemas de case-sensitivity e ausência de tratamento de exceções).

Adicionalmente, detectou-se: ausência de paginação (carregamentos lentos com muitos registros), credenciais expostas no código (vulnerabilidade de segurança), ausência de indicadores de carregamento (percepção de travamento), código React duplicado, validação de erros insuficiente, e exclusão de dados sem confirmação. Problemas de prioridade alta e média foram corrigidos antes da Rodada 1; os demais foram agendados para intervenção pós-teste.

## 6.2. Rodada 1 — Linha de Base

A Rodada 1 foi conduzida presencialmente em 18-19/05/2026 na UNIFAL, com 6 participantes distribuídos estrategicamente: 2 leigos, 2 agricultores e 2 técnicos. Cada sessão durou ~35 minutos, em ambiente controlado, aplicando protocolo Think-Aloud (ERICSSON; SIMON, 1993) e seguindo procedimentos padronizados.

**Tabela 2 — Perfil dos participantes da Rodada 1**

| ID | Perfil | Dispositivo | Nota Geral NPS (0-10) |
|----|--------|-------------|----------------------|
| P1 | Leigo | Celular | 5 |
| P2 | Leigo | PC | 6 |
| P3 | Agricultor | Celular | 6 |
| P4 | Agricultor | PC | 7 |
| P5 | Técnico | PC e Celular | 2 |
| P6 | Técnico | PC | 6 |
| **Média Geral** | — | — | **5,3** |

**Fonte:** Elaborado pelo autor, 2026.

O participante técnico P5 atribuiu a nota mais baixa (2/10), identificando problemas estruturais que usuários leigos experimentaram mas não conseguiram articular tecnicamente. A média 5,3/10 classifica todos como "Detratores" (REICHHELD, 2003), antecipando NPS negativo.

### 6.2.1. Métricas Quantitativas

**Tabela 3 — Métricas de desempenho por tarefa (Rodada 1)**

| Tarefa | Tempo Médio (s) | Taxa Sucesso (%) | Erros Médios | Nota Média (1-5) | Severidade |
|--------|-----------------|------------------|--------------|------------------|------------|
| T1 — Criar/Editar/Deletar Propriedade | 103 | 83,3 | 2,5 | 3,7 | Média |
| T2 — Criar/Editar/Deletar Talhão | 130 | **33,3** | 3,2 | 1,7 | **Alta** |
| T3 — Criar/Editar/Deletar Safra | 176 | 100,0 | 1,5 | 2,8 | Média |
| T4 — Criar Custo | 191 | 100,0 | 0,7 | 3,3 | Média |
| T5 — Gerar Gráfico | 38 | 100,0* | 0,7 | **1,3** | **Alta** |
| T6 — Adicionar Estoque | 125 | 100,0 | 1,0 | 3,7 | Baixa |
| **Média Geral** | **127** | **86,1** | **1,6** | **2,8** | — |

*Todos navegaram até a tela, mas gráficos não renderizaram (erros HTTP 500), resultando na menor satisfação (1,3/5).

**Fonte:** Elaborado pelo autor, 2026.

**Análise:** T2 (editar talhão) teve taxa de sucesso crítica (33,3%) — apenas 2 de 6 participantes concluíram devido a bug catastrófico no endpoint PUT que omitia ID do talhão (NIELSEN, 1994). T5 (gráficos), embora "concluída" tecnicamente, teve pior avaliação (1,3/5) pela frustração de encontrar painel vazio. T3 e T4 demandaram tempos excessivos (~3min cada) devido a complexidade de formulários, rótulos confusos e ausência de feedback de carregamento.

### 6.2.2. Problemas Identificados

**Tabela 4 — Problemas de usabilidade identificados na Rodada 1**

| ID | Problema | Tarefas Afetadas | Severidade | Frequência |
|----|----------|------------------|------------|------------|
| P-01 | Botão editar talhão não funcionava (ausência ID no endpoint PUT) | T2 | **Catastrófica** | 5/6 (83%) |
| P-02 | Gráficos retornavam erro HTTP 500 (queries SQL inválidas) | T5 | **Alta** | 6/6 (100%) |
| P-03 | Botão editar difícil de localizar (ícone 3 pontos pouco intuitivo) | T1, T2 | **Alta** | 4/6 (67%) |
| P-04 | Ausência de botão "Voltar" em formulários | T1-T6 | **Alta** | 3/6 (50%) |
| P-05 | Rótulos confusos ("quantidade", "unidade", "kg/ha") | T3, T4, T6 | Média | 4/6 (67%) |
| P-06 | Interface parcialmente em inglês (Dashboard, Properties, Stock) | T1-T6 | Média | 3/6 (50%) |
| P-07 | Ausência de indicador de carregamento (percepção de travamento) | T3, T4 | Média | 3/6 (50%) |
| P-08 | Tela branca ao recarregar (F5) | Todas | Média | 2/6 (33%) |
| P-09 | Campo "Tempo de Lavoura" exibia valores negativos | T3 | Média | 1/6 (17%) |
| P-10 | Responsividade inadequada mobile (elementos sobrepostos) | T1-T6 | Média | 3/6 (50%) |
| P-11 | Botão de filtros confuso para leigos | T1, T2 | Baixa | 3/6 (50%) |

**Fonte:** Elaborado pelo autor, 2026.

**Verbalizações representativas:**

**P3 (Agricultor) sobre P-01:**
> "Onde que eu edito esse talhão? Ah, é nesses três pontinhos? [clica] Apareceu editar... [preenche] pronto, mudei o nome, vou salvar... [clica] ué, não salvou? Voltou tudo. Isso tá errado, não? Será que eu fiz algo errado?"

**P5 (Técnico) sobre P-02:**
> "O gráfico não aparece... deixa eu abrir o console [F12]. Tem erro 500 aqui. Provavelmente query SQL quebrada no backend, ou problema de JOIN. Usuário comum nem vai entender, vai achar que travou. Isso é crítico."

**P1 (Leigo) sobre P-05:**
> "Quantidade, quantidade de quê? Litro? Quilo? Saco de 50kg? E esse 'kg/ha' aqui embaixo, o que que é isso? Hectare? Nunca vi essa sigla. Vou colocar qualquer número então..."

Essas verbalizações evidenciam divergência entre modelo do projetista e modelo mental dos usuários — causa raiz dos problemas de usabilidade (PREECE; ROGERS; SHARP, 2019).

### 6.2.3. Net Promoter Score (NPS)

**Tabela 5 — Avaliação NPS individual (Rodada 1)**

| Participante | Nota (0-10) | Classificação | Comentário Representativo |
|--------------|-------------|---------------|---------------------------|
| P1 | 5 | Detrator | "Confuso em algumas partes, problemas sérios nos gráficos, inputs muito confusos principalmente para quem não é da área" |
| P2 | 6 | Detrator | "Sistema simples no geral, porém botão de edição escondido complica para quem não tem familiaridade com tecnologia" |
| P3 | 6 | Detrator | "Inputs confusos demais, responsividade ruim no celular que é onde eu mais usaria; tem potencial mas precisa melhorar bastante" |
| P4 | 7 | Neutro | "Facilidade razoável, mas seria bom separar categorias de culturas, e alguns textos em inglês atrapalham" |
| P5 | 2 | Detrator | "Loading inexistente, bugs críticos principalmente mobile, responsividade muito ruim. Backend precisa refatoração urgente" |
| P6 | 6 | Detrator | "Falta muito feedback visual, e funcionalidades importantes não funcionam como gráficos. Decepcionante nesse estado" |

**Fonte:** Elaborado pelo autor, 2026.

**Cálculo NPS:** 
- Promotores (9-10): 0 participantes = 0%
- Neutros (7-8): 1 participante = 16,7%
- Detratores (0-6): 5 participantes = 83,3%
- **NPS Rodada 1 = 0% − 83,3% = −83,3**

Um NPS de −83,3 posiciona o sistema na **zona de perigo crítica** (REICHHELD, 2003), evidenciando insatisfação generalizada e necessidade urgente de intervenções técnicas.

## 6.3. Intervenções Técnicas

Com base na análise da Rodada 1, foram implementadas intervenções técnicas priorizadas segundo Nielsen (1994) durante 20/05 a 10/06/2026 (~3 semanas), atacando primeiro problemas catastróficos e de alta severidade.

**Tabela 6 — Mapeamento de problemas e intervenções técnicas**

| ID | Problema Original | Correção Implementada | Tecnologia/Camada | Prioridade |
|----|-------------------|-----------------------|-------------------|------------|
| P-01 | Editar talhão sem funcionar | Corrigido endpoint PUT /glebas/:id incluindo ID na rota; adicionado ícone de lápis (EditIcon) visível na tabela | Backend (Express/Node.js) + Frontend (React/Material UI) | Catastrófica |
| P-02 | Gráficos erro HTTP 500 | Corrigidas queries SQL (case-sensitivity, validação arrays vazios, try-catch em todas queries) | Backend (Sequelize/MySQL) | Alta |
| P-03 | Botão editar difícil de localizar | Substituído dropdown 3 pontos por ícone lápis explícito em todas tabelas | Frontend (Material UI DataGrid) | Alta |
| P-04 | Ausência botão "Voltar" | Adicionado ArrowBackIcon com navigate(-1) em todas 16 telas de formulário | Frontend (React Router) | Alta |
| P-05 | Campos confusos | Melhorados rótulos; adicionado helperText com exemplos; "kg/ha" → "Quilos por Hectare (kg/ha)" | Frontend (Formik/Material UI) | Média |
| P-06 | Interface em inglês | Traduzida interface completa PT-BR: Sidebar, DataGrid columns, botões, mensagens toast | Frontend (React/Material UI/i18n) | Média |
| P-07 | Sem indicador loading | Adicionado CircularProgress durante submissões; delay mínimo 800ms para evitar flash | Frontend (Material UI) | Média |
| P-08 | Tela branca ao recarregar | Corrigido gerenciamento estado autenticação: useState lazy read token; redirect automático | Frontend (React useState/useEffect) | Média |
| P-09 | Tempo lavoura negativo | Validação datas frontend/backend; exibe "0 dias" se data invertida; alerta visual | Frontend (Formik) + Backend (Express) | Média |
| P-10 | Responsividade inadequada | Refatoração Grid Material UI; useMediaQuery adaptativo; testado 320px, 768px, 1920px | Frontend (Material UI Grid/useMediaQuery) | Média |
| P-11 | Filtros confusos | Removido GridToolbarFilterButton; mantido apenas busca textual simples | Frontend (Material UI DataGrid) | Baixa |

**Fonte:** Elaborado pelo autor, 2026.

### Detalhamento de Correções Críticas

**Problema P-01 (Catastrófico): Bug na edição de talhões**

**[INSERIR AQUI: Figura 3 — Problema P-01: Bug catastrófico na edição de talhões]**
*(Mostrar: (a) Rodada 1 com falha silenciosa; (b) Rodada 2 funcionando corretamente)*

A falha ocorria porque a URL da requisição PUT no frontend omitia o parâmetro ID. A correção está documentada no Código 1:

**Código 1 — Correção do bug catastrófico P-01**

```javascript
// ANTES: Rota incorreta sem ID
const handleFormSubmit = async (values) => {
  try {
    const response = await axios.put(`http://localhost:3000/glebas`, {
      name: values.nameGleba,
      area: values.area, 
      id: id  // ID no body, não na URL
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

// DEPOIS: ID incluído na URL + tratamento autenticação
const handleFormSubmit = async (values) => {
  try {
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

**Fonte:** Elaborado pelo autor, 2026.

A intervenção técnica no backend modificou a assinatura da rota de atualização, alinhando estritamente o comportamento das duas camadas da aplicação. Adicionalmente, implementou-se tratamento de erro HTTP 401 para gerenciamento de sessões expiradas, mitigando vulnerabilidades de navegação. Como modificação complementar no design de interação, o ícone original de três pontos — que gerava problemas de descoberta — foi substituído por um ícone de lápis permanentemente visível na listagem. **Resultado:** Taxa de sucesso saltou de 33,3% para 100% na Rodada 2, eliminando completamente a barreira catastrófica.

---

**Problema P-02 (Alta Severidade): Erro HTTP 500 nos gráficos**

**[INSERIR AQUI: Figura 4 — Problema P-02: Erro HTTP 500 na renderização de gráficos]**
*(Mostrar: (a) Rodada 1 com console exibindo erro 500; (b) Rodada 2 com gráficos renderizados)*

A falha tinha três causas simultâneas no backend: (1) case-sensitivity em nomes de tabelas MySQL, (2) queries não validavam arrays vazios de glebaIds, (3) ausência de try-catch. Correção envolveu normalização de queries, validação prévia de parâmetros, e envolvimento em blocos try-catch.

A refatoração da camada de dados garantiu que todas as rotinas de consulta fossem devidamente envolvidas em estruturas de tratamento de exceções (try-catch), eliminando interrupções silenciosas. Implementou-se regra de validação prévia que retorna conjuntos de dados nulos estruturados em casos de parâmetros vazios, em vez de interromper a execução com falhas críticas. Como resultado dessa intervenção estrutural, o console do navegador deixou de registrar erros HTTP 500, permitindo a renderização fidedigna das métricas de desempenho econômico da propriedade. **Resultado:** Nota média T5 saltou de 1,3 para 4,8 (+269,2%), evidenciando que a funcionalidade mais valorizada pelos participantes foi completamente restaurada.

---

**Problema P-03 (Alta Severidade): Baixa visibilidade botões de edição**

**[INSERIR AQUI: Figura 5 — Problema P-03: Botão de edição difícil de localizar]**
*(Mostrar: (a) Rodada 1 com 3 pontos verticais; (b) Rodada 2 com ícones lápis e lixeira explícitos)*

A modificação no design de interação eliminou a necessidade de ação prévia de clique para descoberta das opções disponíveis. Ao expor diretamente os ícones universais de lápis (edição) e lixeira (exclusão) permanentemente visíveis nas tabelas, o sistema reduziu a carga cognitiva imposta ao operador. Essa intervenção simplificou o fluxo de navegação e reverteu positivamente os índices de eficiência e satisfação subjetiva medidos na segunda rodada. **Resultado:** Verbalizações de 4 dos 6 participantes (67%) mencionaram explicitamente a melhoria na visibilidade dos comandos.

---

**Problema P-04 (Alta Severidade): Ausência de botão "Voltar"**

**[INSERIR AQUI: Figura 6 — Problema P-04: Ausência de botão "Voltar" em formulários]**
*(Mostrar: (a) Rodada 1 sem navegação explícita; (b) Rodada 2 com ícone seta no topo)*

A intervenção no design de interface consistiu na introdução de um ícone de seta padronizado no topo de cada formulário, proporcionando uma rota de fuga clara e visível para o operador. Essa modificação restabeleceu o controle e a liberdade do usuário na plataforma, alinhando-se às heurísticas de usabilidade de Nielsen (1994), refletindo-se em uma redução no tempo total de preenchimento de cadastros e na eliminação completa de desvios de navegação observados ao longo da segunda rodada de avaliações. **Resultado:** Nenhum participante na Rodada 2 recorreu ao botão nativo do navegador, indicando que a affordance foi imediatamente compreendida.

---

**Problema P-07 (Média Severidade): Ausência indicador de carregamento**

**[INSERIR AQUI: Figura 7 — Problema P-07: Ausência de indicador de carregamento]**
*(Mostrar: (a) Rodada 1 sem resposta visual; (b) Rodada 2 com CircularProgress)*

A correção implementou estado de controle isSubmitting, conforme Código 2:

**Código 2 — Implementação de indicadores de carregamento**

```javascript
// ANTES: Sem indicação visual
const PropertiesForm = () => {
  const navigate = useNavigate(); 
  
  const handleFormSubmit = async (values) => {
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
        {/* Formulário sem indicador */}
      </Formik>
    </Box>
  );
};

// DEPOIS: Com CircularProgress
import { CircularProgress } from "@mui/material";

const PropertiesForm = () => {
  const navigate = useNavigate(); 
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleFormSubmit = async (values) => {
    setIsSubmitting(true);  // Ativa indicador
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
        await new Promise(resolve => setTimeout(resolve, 800)); // Delay mínimo
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
      setIsSubmitting(false);  // Desativa indicador
    }
  };
  
  return (
    <Box m="20px">
      <Header title="Adicionar Propriedade" />
      <Formik onSubmit={handleFormSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box mt="20px">
              <Button 
                type="submit" 
                color="secondary" 
                variant="contained"
                disabled={isSubmitting}  // Desabilita durante envio
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

**Fonte:** Elaborado pelo autor, 2026.

A implementação técnica utilizou o hook useState do React para controlar a variável isSubmitting, renderizando o componente CircularProgress durante requisições assíncronas e desabilitando simultaneamente o botão de submissão para prevenir envios duplicados acidentais. O uso do bloco finally garantiu que o indicador fosse desativado automaticamente, independentemente do sucesso ou falha da transação. Sob a perspectiva do usuário, essa manutenção eliminou por completo a percepção de congelamento reportada por 50% dos participantes na Rodada 1, fornecendo feedback visual contínuo sobre o estado de processamento. **Resultado:** Participante P5 (técnico) mencionou explicitamente: "Carregamentos satisfatórios agora, tem feedback visual pro usuário entender que está processando."

---

**Configuração de Deploy**

Para viabilizar implantação em produção, implementou-se configuração dinâmica de CORS e portas (Código 3):

**Código 3 — Configuração dinâmica de CORS e porta**

```javascript
// ANTES: Configuração fixa
const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

const port = 3000;  // Porta fixa

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

// DEPOIS: Configuração adaptativa
const express = require("express");
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? [process.env.CORS_ORIGIN]  // Produção: URL parametrizada
    : ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

const port = process.env.PORT || 3000; // Porta dinâmica

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
```

**Fonte:** Elaborado pelo autor, 2026.

A arquitetura atualizada passou a utilizar variáveis de ambiente através da biblioteca dotenv, permitindo comportamento adaptativo conforme o ambiente de execução detectado. Durante o desenvolvimento, a interface tolera múltiplas origens locais de teste, enquanto em produção restringe acesso estritamente à URL parametrizada nas diretivas de segurança. A porta de escuta passou a ser alocada dinamicamente, garantindo compatibilidade nativa com plataformas modernas de hospedagem em nuvem. **Resultado:** Sistema foi implantado com sucesso em produção (frontend no Vercel, backend no Render, banco no Aiven) sem necessidade de modificações manuais no código.

---

**Demais Correções Complementares**

As intervenções de severidade média e baixa contribuíram cumulativamente para o polimento da experiência do usuário. A melhoria dos rótulos de campos (P-05) com helperText explicativos e conversão de unidades ("kg/ha" → "Quilos por Hectare") reduziu erros de preenchimento em formulários. A tradução completa da interface para PT-BR (P-06) eliminou barreiras linguísticas, especialmente para agricultores com menor domínio de inglês técnico. A correção do gerenciamento de estado de autenticação (P-08) resolveu o problema de tela branca ao recarregar, enquanto a validação de datas (P-09) impediu valores negativos inconsistentes. A refatoração completa do layout responsivo (P-10) utilizando Grid do Material UI e useMediaQuery garantiu experiência fluida em dispositivos móveis, atendendo à demanda de 50% dos participantes que utilizaram celular nos testes. Por fim, a simplificação dos filtros de tabela (P-11) removeu componentes confusos para usuários leigos, mantendo apenas busca textual simples e intuitiva.

Todas as alterações foram documentadas em **47 commits no Git** entre 20/05 e 10/06. O código foi testado (Vite + npm build) e implantado com sucesso: frontend no Vercel, backend no Render, banco de dados no Aiven.

## 6.4. Rodada 2 — Pós-Teste

A Rodada 2 foi conduzida em junho/2026 com os mesmos 6 participantes, mesmo protocolo, mesmos procedimentos, garantindo validade científica da comparação pareada. Intervalo de ~2 semanas mitigou viés de familiaridade imediata mantendo memória recente dos problemas da Rodada 1.

Mudança perceptível no tom emocional: verbalizações da Rodada 1 refletiam frustração ("ué, não funcionou?", "cadê o botão?"); Rodada 2 refletiu experiência fluida ("agora sim!", "melhorou muito", "está bem mais claro").

**Tabela 7 — Métricas de desempenho por tarefa (Rodada 2)**

| Tarefa | Tempo Médio (s) | Δ Tempo (%)* | Taxa Sucesso (%) | Δ Sucesso* | Erros Médios | Nota Média (1-5) |
|--------|-----------------|--------------|------------------|------------|--------------|------------------|
| T1 — Criar/Editar/Deletar Propriedade | 86 | −16,5% | 100,0 | +16,7 pp | 0,3 | 4,8 |
| T2 — Criar/Editar/Deletar Talhão | 98 | −24,6% | 100,0 | +66,7 pp | 0,2 | 4,7 |
| T3 — Criar/Editar/Deletar Safra | 128 | −27,3% | 100,0 | 0,0 pp | 0,5 | 4,5 |
| T4 — Criar Custo | 125 | −34,6% | 100,0 | 0,0 pp | 0,2 | 4,7 |
| T5 — Gerar Gráfico | 22 | −42,1% | 100,0 | 0,0 pp | 0,0 | 4,8 |
| T6 — Adicionar Estoque | 93 | −25,6% | 100,0 | 0,0 pp | 0,2 | 4,7 |
| **Média Geral** | **92** | **−27,6%** | **100,0** | **+13,9 pp** | **0,2** | **4,7** |

*Δ = Variação em relação à Rodada 1. Valores negativos em tempo/erros = melhoria. pp = pontos percentuais.

**Fonte:** Elaborado pelo autor, 2026.

**Tabela 8 — Avaliação NPS individual (Rodada 2)**

| Participante | Nota R1 | Nota R2 | Δ | Classificação R2 | Comentário Representativo R2 |
|--------------|---------|---------|---|------------------|------------------------------|
| P1 | 5 | 8 | +3 | Neutro | "Melhorou bastante, explicação dos campos mais clara, alguns gráficos complexos mas dá pra entender" |
| P2 | 6 | 10 | +4 | Promotor | "Agora ficou muito mais rápido e fluido, navegação excelente, nem precisa pensar muito pra usar" |
| P3 | 6 | 9 | +3 | Promotor | "Gostei bastante, percebi melhorias na UX, principalmente botões ficaram bem mais visíveis" |
| P4 | 7 | 10 | +3 | Promotor | "Sistema ficou nota 10, tudo confuso foi arrumado, recomendaria fácil para outros produtores" |
| P5 | 2 | 7 | +5 | Neutro | "Carregamentos satisfatórios, feedback sobre processamento ficou muito bom, correção de layout notada" |
| P6 | 6 | 8 | +2 | Neutro | "Notei de cara os detalhes alterados, performance e responsividade melhoraram bastante" |
| **Média** | **5,3** | **8,7** | **+3,4** | — | — |

**NPS Rodada 2:**
- Promotores (9-10): 3 participantes = 50,0%
- Neutros (7-8): 3 participantes = 50,0%
- Detratores (0-6): 0 participantes = 0,0%
- **NPS = 50,0% − 0,0% = +50,0**
- **Δ NPS = +133,3 pontos percentuais** (de −83,3 para +50,0)

**Fonte:** Elaborado pelo autor, 2026.

## 6.5. Análise Comparativa

**Tabela 9 — Comparação consolidada Rodada 1 vs. Rodada 2**

| Métrica | Rodada 1 | Rodada 2 | Variação | Impacto |
|---------|----------|----------|----------|---------|
| Tempo médio por tarefa (s) | 127 | 92 | −27,6% | Melhoria substancial em eficiência |
| Taxa de sucesso geral (%) | 86,1 | 100,0 | +13,9 pp | Efetividade perfeita alcançada |
| Erros médios por tarefa | 1,6 | 0,2 | −87,5% | Redução drástica de erros |
| Nota média satisfação (1-5) | 2,8 | 4,7 | +67,9% | Satisfação quase máxima |
| NPS | −83,3 | +50,0 | +133,3 pp | De rejeição crítica para excelência |
| Taxa conclusão T2 - Editar Talhão (%) | 33,3 | 100,0 | +66,7 pp | Problema catastrófico resolvido |
| Nota média T5 - Gerar Gráficos (1-5) | 1,3 | 4,8 | +269,2% | Problema alta severidade resolvido |

**Fonte:** Elaborado pelo autor, 2026.

### 6.5.1. Análise Quantitativa

**Eficiência (tempo):** Redução de 27,6% no tempo médio (127s → 92s) representa economia de 35s por tarefa. Em rotina com 20-30 operações diárias, economia de 10-15min. Atribuída a: (1) botões "Voltar" explícitos, (2) ícones de edição visíveis, (3) indicadores de carregamento, (4) tradução completa PT-BR. Destaque: T5 (gráficos) reduziu 42,1% (38s → 22s).

**[INSERIR AQUI: Figura 1 — Comparação de tempo médio por tarefa (Rodada 1 vs. Rodada 2)]**
*(Gráfico de barras comparando tempo de T1 a T6 nas duas rodadas)*

**Efetividade (sucesso):** 100% de conclusão em todas tarefas (vs. 86,1% R1). T2 (editar talhão) saltou de 33,3% para 100% (+66,7 pp), validando severidade catastrófica do P-01 (NIELSEN, 1994).

**Qualidade (erros):** Redução de 87,5% nos erros (1,6 → 0,2 por tarefa) indica fluxo fluido, melhor findability e learnability (NIELSEN, 1993).

**Satisfação:** Aumento de 67,9% (2,8 → 4,7/5) reflete mudança profunda na percepção. NPS evoluiu de −83,3 (rejeição crítica, 83,3% detratores) para +50,0 (excelência, 50% promotores), representando ganho de 133,3 pp (REICHHELD, 2003). Destaque: P5 (técnico) elevou nota de 2 para 7, reconhecendo explicitamente melhorias estruturais.

**[INSERIR AQUI: Figura 2 — Evolução do Net Promoter Score (NPS)]**
*(Gráfico mostrando transição de zona de perigo para zona de qualidade)*

### 6.5.2. Análise Qualitativa

**Rodada 1 — Padrões de frustração:**
- "Onde está o botão de editar?"
- "Não entendi esse campo"
- "Por que não salvou?"
- "Isso está bugado?"

**Rodada 2 — Padrões de satisfação:**
- "Agora sim, bem mais claro!"
- "Melhorou muito, está fluindo"
- "Os ícones ficaram bem visíveis"
- "Rápido e objetivo"

**Verbalizações-chave:**

**P2 (Leigo):**
> "Nossa, que diferença! Agora ficou muito mais rápido e fluido. Não preciso ficar procurando onde está cada coisa, os botões estão tudo ali na cara. Antes eu ficava confuso, agora achei a navegação excelente. Nem precisa pensar muito pra usar, é bem intuitivo."

Evidencia melhoria em learnability e efficiency (NIELSEN, 1993).

**P3 (Agricultor):**
> "Gostei bastante das mudanças. Percebi logo as melhorias na experiência do usuário, principalmente os botões de editar ficaram bem mais visíveis, antes eram aqueles três pontinhos que eu nem via direito. E os gráficos agora funcionam perfeitamente, essa era a parte que eu mais queria usar."

Confirma que correção do P-02 atendeu expectativa central do usuário sobre valor do sistema.

**P5 (Técnico):**
> "Reconheço que teve um trabalho de qualidade aqui. Os carregamentos estão satisfatórios agora, tem feedback visual pro usuário entender que está processando. A correção de layout está bem feita, responsividade melhorou bastante. Console limpo, sem erros. Subiu de nível."

Aprovação técnica valida que intervenções abordaram problemas estruturais, não apenas cosméticos.

### 6.5.3. Validação das Hipóteses

**P-01 (Catastrófico):** Taxa de sucesso T2 saltou de 33,3% para 100% (+66,7 pp). **Validação total** — bug completamente eliminado.

**P-02 (Alta Severidade):** Nota média T5 saltou de 1,3 para 4,8 (+269,2%). **Totalmente eficaz** — funcionalidade restaurada e valorizada.

**P-03 (Alta Severidade):** Redução de tempo + verbalizações positivas sobre visibilidade. **Eficaz** — melhoria em findability.

**P-04 (Alta Severidade):** Redução de tempo + ausência de confusão navegacional na R2. **Eficaz** — padrão intuitivo estabelecido.

**P-05 a P-11 (Média/Baixa):** Contribuição cumulativa para aumento de 67,9% na satisfação geral. **Polimento bem-sucedido**.

A estratégia de priorização por severidade (NIELSEN, 1994) foi metodologicamente acertada, otimizando recursos e garantindo impacto máximo.

## 6.6. Discussão

Os dados confirmaram a hipótese de que o Smart Plantio, apesar da solidez técnica (LAGE, 2025), apresentava barreiras críticas de usabilidade comprometendo experiência e adoção. O NPS −83,3 posiciona na faixa crítica de rejeição (REICHHELD, 2003), coerente com literatura que estabelece que falhas funcionais graves superam qualquer percepção positiva de design (NIELSEN, 1993; PREECE; ROGERS; SHARP, 2019).

A taxa de sucesso 33,3% na T2 evidencia que problemas técnicos de backend manifestam-se como barreiras intransponíveis de usabilidade, validando importância de integração entre testes funcionais (verificam se código funciona) e testes com usuários reais (verificam se pessoas conseguem usar) (PREECE; ROGERS; SHARP, 2019).

A análise qualitativa via Think-Aloud (ERICSSON; SIMON, 1993) revelou padrões consistentes: leigos e agricultores manifestaram dificuldades em findability e learnability (ícones não intuitivos, rótulos ambíguos, ausência de feedback); técnicos identificaram problemas estruturais profundos (requisições redundantes, ausência de loading, responsividade CSS) que leigos experimentaram visceralmente mas não conseguiram articular.

Essa triangulação valida estratégia de amostragem diversificada (PRODANOV; FREITAS, 2013; NIELSEN; LANDAUER, 1993), demonstrando que cada perfil contribui com insights distintos e complementares.

### Implicações para Design de Sistemas Agrícolas

**1. Priorização por severidade absoluta:** Correlação entre correção de P-01 e ganho de 66,7 pp na taxa de sucesso valida empiricamente escala de Nielsen (1994). Problemas catastróficos devem preceder polimento visual.

**2. Feedback visual contínuo:** Indicadores de carregamento foram mencionados explicitamente por técnicos como melhoria perceptível. Sinalização clara de processamento é indispensável para manter confiança do usuário.

**3. Clareza de linguagem:** Tradução completa e refinamento de rótulos contribuíram para redução de tempo e erros. Terminologia clara, simplificada e contextualizada ao domínio agrícola é essencial para autoexplicabilidade.

**4. Padrões de navegação explícitos:** Botões "Voltar" eliminaram desvios e confusão. Usuários com menor letramento digital dependem de affordances evidentes e permanentes.

Estas evidências reforçam que sistemas puramente funcionais não são suficientes — experiência do usuário é dimensão crítica e indissociável de qualidade desde concepção do projeto.

### Limitações

**Tamanho amostral:** 6 participantes, embora fundamentado em Nielsen e Landauer (1993) para detectar ~85% dos problemas, restringe generalização estatística para população total de produtores.

**Viés de familiaridade:** Mesmos participantes em ambas rodadas já conheciam estrutura do protocolo na R2. Trade-off justificado pelo ganho em poder estatístico da comparação pareada (cada usuário é controle de si mesmo).

**Contexto controlado:** Testes de 30-40min em ambiente laboratorial não capturam complexidade de uso autêntico de longa duração no campo. Requer estudos longitudinais futuros em ciclos safristas completos.

---

# 7. CONCLUSÃO

Este trabalho avaliou rigorosamente a usabilidade do sistema Smart Plantio (LAGE, 2025) através de testes empíricos fundamentados em IHC. A primeira rodada (maio/2026) com seis participantes (leigos, agricultores, técnicos) confirmou que, apesar da solidez técnica, existiam barreiras severas de usabilidade. Foram identificados onze problemas, incluindo um catastrófico (edição de talhões) e três graves (gráficos, visibilidade de botões, ausência de retorno em formulários). As métricas estabeleceram linha de base: tempo médio 127s por tarefa, taxa de sucesso 86,1% (33,3% na edição de talhões), 1,6 erros por atividade, satisfação 2,8/5, e NPS −83,3 (rejeição crítica).

Com base nesses achados, implementaram-se intervenções priorizadas segundo Nielsen (1994) no backend (Node.js/Express), frontend (React/Material UI) e arquitetura de dados (MySQL/Sequelize), totalizando 47 commits documentados em três semanas. A segunda rodada (junho/2026) validou empiricamente a eficácia: tempo médio reduziu 27,6% (92s), taxa de sucesso atingiu 100% (+13,9 p.p.), erros diminuíram 87,5% (0,2 por operador), satisfação aumentou 67,9% (4,7/5), e NPS evoluiu para +33,3, representando melhoria de 116,6 pontos percentuais. O sistema migrou da zona crítica para qualidade de mercado, convertendo detratores em promotores.

A metodologia — protocolo Think-Aloud, métricas ISO/IEC 9241-11, escalas SUS e NPS, design pré-teste/pós-teste — provou-se eficaz para desvelar problemas reais invisíveis em revisões de código puramente técnicas. O trabalho oferece contribuições práticas (acessibilidade digital para agricultura familiar), metodológicas (protocolo replicável), científicas (evidências sobre usabilidade em agrotecnologia), e acadêmicas (validação da priorização por severidade de Nielsen).

**Recomendações para trabalhos futuros:** (1) expansão da validação com agricultores de diferentes regiões, culturas e escolaridade; (2) estudos longitudinais de campo (4-8 semanas) em ciclos safristas completos; (3) implementação de funcionalidades sugeridas (categorização automática de culturas, integração com preços de mercado, alertas sazonais); (4) desenvolvimento de aplicativos móveis nativos (Android/iOS); (5) avaliação de acessibilidade conforme WCAG 2.1 para usuários com limitações.

Este trabalho evidenciou que qualidade de software não se avalia exclusivamente por correção técnica, mas deve incluir experiência humana de uso. Os dados provam que bugs técnicos manifestam-se como barreiras intransponíveis (taxa de sucesso 33,3% no P-01) e que problemas de design prejudicam percepção de valor (NPS −83,3 em sistema funcionalmente completo). A transformação documentada de NPS −83,3 para +33,3 em um mês comprova que investimento em usabilidade produz retornos mensuráveis na aceitação, validando a tese central: **sistemas centrados no usuário não são apenas mais agradáveis — são fundamentalmente mais bem-sucedidos**.

---

# REFERÊNCIAS

AEGRO. **Aegro: Software de Gestão Agrícola**. 2026. Disponível em: https://www.aegro.com.br. Acesso em: 12 dez. 2026.

AGROSMART. **Agrosmart: Plataforma de Inteligência Climática para Agricultura**. 2026. Disponível em: https://www.agrosmart.com.br. Acesso em: 12 dez. 2026.

BANKS, Alex; PORCELLO, Eve. **Learning React: Modern Patterns for Developing React Apps**. 2. ed. Sebastopol: O'Reilly Media, 2020.

BROOKE, John. SUS: A 'quick and dirty' usability scale. In: JORDAN, P. W. et al. (Eds.). **Usability Evaluation in Industry**. London: Taylor & Francis, 1996. p. 189–194.

CONTA AZUL. **Conta Azul Agro: ERP para o Campo**. 2026. Disponível em: https://contaazul.com/agro. Acesso em: 12 dez. 2026.

CRESWELL, John W.; CRESWELL, J. David. **Research Design: Qualitative, Quantitative, and Mixed Methods Approaches**. 5. ed. Thousand Oaks: SAGE Publications, 2018.

CYBIS, Walter de Abreu; BETIOL, Adriana Holtz; FAUST, Richard. **Ergonomia e Usabilidade: conhecimentos, métodos e aplicações**. 3. ed. São Paulo: Novatec, 2015.

DAVIS, Fred D. Perceived usefulness, perceived ease of use, and user acceptance of information technology. **MIS Quarterly**, v. 13, n. 3, p. 319–340, 1989.

EMBRAPA. **Visão 2030: o futuro da agricultura brasileira**. Brasília, DF: Embrapa, 2018. Disponível em: https://www.embrapa.br/visao-2030. Acesso em: 04 mai. 2026.

ERICSSON, K. Anders; SIMON, Herbert A. **Protocol Analysis: Verbal Reports as Data**. Revised edition. Cambridge: MIT Press, 1993.

FEDERICO, J. R. **React.js Essentials**. Birmingham: Packt Publishing, 2015.

IBGE. **Censo Agropecuário 2017: Resultados Definitivos**. Rio de Janeiro: IBGE, 2019. Disponível em: https://biblioteca.ibge.gov.br/visualizacao/periodicos/3096/agro_2017_resultados_definitivos.pdf. Acesso em: 04 mai. 2026.

ISO/IEC 9241-11. **Ergonomics of human-system interaction — Part 11: Usability: Definitions and concepts**. International Organization for Standardization, 2018.

LAGE, Renan Magalhães. **SmartPlantio: Sistema de Gestão de Safras para Pequenos Produtores**. 2025. Trabalho de Conclusão de Curso (Bacharelado em Ciência da Computação) — Instituto de Ciências Exatas, Universidade Federal de Alfenas, Alfenas, 2025.

LEWIS, James R. The System Usability Scale: Past, Present, and Future. **Journal of Usability Studies**, v. 3, n. 2, p. 113-118, 2018.

LIKERT, Rensis. A technique for the measurement of attitudes. **Archives of Psychology**, v. 22, n. 140, p. 1–55, 1932.

MACAULAY, Linda. **Requirements Engineering**. London: Springer, 1996.

MILANI, André. **MySQL: Guia do Programador**. São Paulo: Novatec, 2011.

NIELSEN, Jakob. **Usability Engineering**. San Francisco: Morgan Kaufmann, 1993.

NIELSEN, Jakob. Severity Ratings for Usability Problems. **Nielsen Norman Group**, 1994. Disponível em: https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/. Acesso em: 15 jun. 2026.

NIELSEN, Jakob. Why You Only Need to Test with 5 Users. **Nielsen Norman Group**, 2000. Disponível em: https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/. Acesso em: 04 mai. 2026.

NIELSEN, Jakob; LANDAUER, Thomas K. A mathematical model of the finding of usability problems. Proceedings of the **INTERACT '93 and CHI '93 Conference on Human Factors in Computing Systems**, Amsterdam, 1993. p. 206–213.

PREECE, Jennifer; ROGERS, Yvonne; SHARP, Helen. **Interaction Design: Beyond Human-Computer Interaction**. 5. ed. Hoboken: Wiley, 2019.

PRODANOV, Cleber Cristiano; FREITAS, Ernani Cesar de. **Metodologia do trabalho científico: métodos e técnicas da pesquisa e do trabalho acadêmico**. 2. ed. Novo Hamburgo: Feevale, 2013.

REICHHELD, Frederick F. The one number you need to grow. **Harvard Business Review**, v. 81, n. 12, p. 46-54, 2003.

SEBRAE. **O uso de tecnologia na gestão das micro e pequenas empresas rurais**. Brasília: Sebrae, 2020.

SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S. **Sistema de Banco de Dados**. 6. ed. Rio de Janeiro: Elsevier, 2012.

TILKOV, Stefan; VINOSKI, Steve. Node.js: Using JavaScript to Build High-Performance Network Programs. **IEEE Internet Computing**, v. 14, n. 6, p. 80-83, 2010.

VITE. **Vite: Next Generation Frontend Tooling**. 2024. Disponível em: https://vitejs.dev/guide/why.html. Acesso em: 04 mai. 2026.

---

# APÊNDICES

## APÊNDICE A — Guião de Tarefas e Formulários

*[Inserir guião completo de tarefas e formulários de registro]*

## APÊNDICE B — Questionário de Satisfação

*[Inserir questionário SUS completo, pergunta NPS e perguntas abertas]*
