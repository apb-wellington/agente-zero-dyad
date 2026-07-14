# Architecture Decision Records (ADRs) — CapybaraCart

Este documento registra as decisões arquiteturais mais críticas do CapybaraCart, detalhando o contexto, as decisões tomadas, as alternativas consideradas e as consequências de cada escolha técnica. Todas as decisões estão alinhadas com a "Filosofia Fusca" (simplicidade, robustez e modularidade) e o modelo BYOK (Bring Your Own Key).

---

## ADR-01: Armazenamento Seguro de Chaves de API do Seller (BYOK)

### Status
Aprovado

### Contexto
O CapybaraCart opera sob o modelo BYOK (Bring Your Own Key), onde o vendedor (seller) fornece suas próprias chaves de API para serviços essenciais (Stripe, Google Sheets e OpenAI/Anthropic). Para evitar que o vendedor precise digitar essas chaves complexas a cada nova sessão de uso, precisamos armazená-las de forma persistente no dispositivo do usuário. No entanto, o armazenamento de chaves de API em texto puro no navegador (como em `localStorage` ou `IndexedDB`) apresenta um risco crítico de segurança, tornando as credenciais vulneráveis a roubo por meio de ataques de Cross-Site Scripting (XSS) ou acesso físico não autorizado ao dispositivo.

### Decisão
Adotar a criptografia simétrica no client-side utilizando o algoritmo **AES-GCM-256** (Advanced Encryption Standard em modo Galois/Counter Mode). 

O fluxo de segurança funcionará da seguinte forma:
1. No primeiro acesso (setup), o vendedor define uma **Senha Mestre** forte.
2. O sistema utiliza a função de derivação de chave **PBKDF2** (Password-Based Key Derivation Function 2) com um salt aleatório e um alto número de iterações para derivar uma chave criptográfica a partir da Senha Mestre.
3. As chaves de API inseridas pelo vendedor são criptografadas localmente no navegador usando a chave derivada e o algoritmo AES-GCM-256.
4. O payload criptografado (contendo o texto cifrado, o vetor de inicialização/IV e o salt) é salvo no `localStorage` do navegador.
5. A Senha Mestre e a chave derivada **nunca** são salvas de forma persistente. Elas residem apenas na memória volátil (RAM) do aplicativo durante a sessão activa do vendedor.
6. Para realizar operações que exigem as chaves, o vendedor "desbloqueia" sua sessão digitando a Senha Mestre, permitindo a descriptografia em memória para uso imediato.

### Alternativas Consideradas
*   **Banco de Dados Centralizado (Rejeitado):** Armazenar as chaves em um banco de dados relacional ou NoSQL gerenciado pela plataforma. Esta alternativa foi rejeitada por violar frontalmente a premissa de "Armazenamento Zero" e "Custo Zero de Infraestrutura", além de criar um alvo centralizado altamente atraente para atacantes (Single Point of Failure).
*   **Armazenamento em Texto Puro no localStorage (Rejeitado):** Salvar as chaves diretamente no `localStorage` sem criptografia. Rejeitado devido ao risco inaceitável de vazamento de credenciais por meio de scripts maliciosos de terceiros (ataques XSS) ou inspeção simples do navegador.

### Consequências
*   **Prós:**
    *   **Segurança Descentralizada:** Mesmo que o `localStorage` do vendedor seja comprometido ou inspecionado, as chaves de API permanecem ilegíveis sem a Senha Mestre.
    *   **Soberania do Usuário:** A plataforma CapybaraCart não possui acesso, controle ou custódia sobre as chaves de API dos vendedores em repouso.
    *   **Custo Zero:** Não há necessidade de servidores de banco de dados ou HSMs (Hardware Security Modules) centralizados para gerenciar segredos.
*   **Contras:**
    *   **Responsabilidade do Usuário:** Se o vendedor esquecer sua Senha Mestre, as chaves de API não poderão ser recuperadas ou descriptografadas. Ele precisará reinserir todas as chaves de API do zero.
    *   **Fricção de Sessão:** O vendedor precisa digitar sua Senha Mestre para desbloquear o dashboard sempre que iniciar uma nova sessão de trabalho.

---

## ADR-02: Uso de Banco de Dados Local (SQLite/IndexedDB) para Estado e Catálogo do Seller

### Status
Aprovado

### Contexto
Para garantir a "Filosofia Fusca" de robustez, funcionamento offline e independência de servidores centrais, o aplicativo do vendedor precisa gerenciar dados locais como o catálogo de produtos, configurações de interface, rascunhos de descrições gerados por IA e uma fila de sincronização de pedidos para contingência. Embora a plataforma adote o princípio de "Armazenamento Zero" para dados pessoais de compradores nos servidores centrais, a ausência completa de um banco de dados local no dispositivo do vendedor inviabilizaria a usabilidade básica do aplicativo, forçando requisições constantes e lentas a APIs externas para renderizar uma simples lista de produtos.

### Decisão
Utilizar um banco de dados local relacional e seguro no dispositivo do vendedor (como **SQLite via WebAssembly** ou uma camada robusta sobre **IndexedDB** como o Dexie.js).

Este banco de dados local será responsável por:
1. **Catálogo de Produtos:** Armazenar nomes, descrições, preços, estoque e caminhos locais das imagens dos produtos do vendedor.
2. **Configurações do App:** Preferências de tema, status de validação das chaves e dados de personalização da vitrine.
3. **Fila de Contingência (Offline Queue):** Armazenar temporariamente os dados de transações aprovadas caso a API do Google Sheets do vendedor falhe ou esteja offline no momento do checkout. Esses dados são sincronizados assim que a conexão ou o serviço for restabelecido.
4. **Isolamento de Dados de Clientes:** O banco de dados local do vendedor pode registrar o histórico de vendas para sua própria gestão, mas esses dados residem exclusivamente no dispositivo do vendedor e na sua planilha do Google Sheets. **Nenhum dado de comprador é enviado, processado ou armazenado nos servidores centrais do CapybaraCart.**

### Alternativas Consideradas
*   **Armazenamento Zero Absoluto no Dispositivo (Rejeitado):** Não salvar nada localmente e consultar a API do Google Sheets ou do Stripe para cada renderização de tela do vendedor. Rejeitado por ser extremamente lento, consumir excessivamente a cota de APIs do vendedor, impossibilitar o funcionamento offline e violar a robustez da "Filosofia Fusca".
*   **Banco de Dados Centralizado na Nuvem (Rejeitado):** Criar um banco de dados centralizado para armazenar os catálogos de todos os vendedores. Rejeitado por gerar custos de infraestrutura para a plataforma e centralizar dados que pertencem soberanamente ao vendedor.

### Consequências
*   **Prós:**
    *   **Performance Brutal:** Carregamento instantâneo do dashboard do vendedor e do catálogo de produtos, operando de forma offline-first.
    *   **Resiliência ("Fusca"):** O vendedor pode cadastrar produtos e gerenciar seu estoque mesmo sem conexão com a internet.
    *   **Privacidade Mantida:** Os dados de vendas e clientes continuam sob posse exclusiva do vendedor, armazenados localmente no seu dispositivo e na sua planilha pessoal.
*   **Contras:**
    *   **Limitações de Armazenamento do Navegador:** O volume de dados (especialmente imagens de alta resolução) fica limitado pelas cotas de armazenamento local do navegador do dispositivo. O app deve implementar compressão de imagens antes de salvá-las.
    *   **Sincronização entre Dispositivos:** Se o vendedor acessar o dashboard de um novo dispositivo, ele precisará importar seu catálogo (que pode ser recuperado a partir da planilha do Google Sheets ou de um backup local).

---

## ADR-03: Uso de Serverless Proxy para Chamadas de API de Terceiros

### Status
Aprovado

### Contexto
Para realizar o processamento de pagamentos (Stripe), gravação de pedidos (Google Sheets) e consultas de inteligência artificial (OpenAI/Anthropic), o CapybaraCart precisa interagir com APIs externas de terceiros. Fazer essas chamadas diretamente do navegador do comprador ou do vendedor apresenta dois problemas impeditivos:
1. **Exposição de Segredos:** Chamadas diretas exigiriam expor chaves privadas de API (como a Stripe Secret Key) no código frontend, permitindo que qualquer usuário malicioso as inspecione e roube.
2. **Restrições de CORS (Cross-Origin Resource Sharing):** Muitas APIs corporativas bloqueiam requisições diretas vindas de navegadores web por motivos de segurança, exigindo que as chamadas partam de um ambiente de servidor (backend).

### Decisão
Utilizar um **Serverless Proxy** leve e stateless (hospedado em plataformas como Vercel Functions ou Netlify Edge Functions) como intermediário seguro para todas as chamadas de APIs de terceiros que exijam credenciais privadas.

O proxy funcionará sob as seguintes regras:
1. O frontend PWA nunca se comunica diretamente com as APIs privadas do Stripe, Google Sheets ou OpenAI.
2. O PWA envia as requisições para endpoints específicos do Serverless Proxy (ex: `/api/checkout`, `/api/ai-assist`).
3. O proxy atua estritamente como um duto de passagem: recebe os parâmetros, anexa as credenciais descriptografadas em memória, faz a requisição segura de servidor para servidor com o terceiro, e repassa apenas a resposta limpa e sanitizada de volta para o PWA.
4. O proxy é configurado com cabeçalhos de segurança estritos (como Content Security Policy e restrições de origem) para garantir que apenas o PWA oficial do CapybaraCart possa consumi-lo.

### Alternativas Consideradas
*   **Chamadas Diretas do Client-Side (Rejeitado):** Rejeitado sumariamente devido à impossibilidade técnica de proteger as chaves privadas de API do Stripe e do Google Sheets no navegador do cliente, além de falhar devido a bloqueios de CORS.
*   **Servidor Monolítico Tradicional (Rejeitado):** Manter um servidor dedicado rodando continuamente (ex: Node.js no Heroku ou AWS EC2). Rejeitado por violar a "Filosofia Fusca" de baixo custo e baixa manutenção. Um servidor tradicional exige monitoramento de infraestrutura, patches de segurança do sistema operacional, gerenciamento de escala para picos de tráfego e gera custos fixos mensais significativos.

### Consequências
*   **Prós:**
    *   **Segurança Robusta:** As chaves privadas de API dos vendedores nunca são expostas aos compradores ou ao tráfego público do frontend.
    *   **Escala Automática:** Funções serverless escalam de zero a milhares de execuções simultâneas instantaneamente, suportando picos de vendas de "drops" sem necessidade de intervenção manual.
    *   **Custo de Infraestrutura Praticamente Zero:** Provedores como Vercel e Netlify oferecem limites gratuitos generosos para funções serverless, garantindo que a plataforma opere com custo operacional nulo na maior parte do tempo.
*   **Contras:**
    *   **Cold Starts:** Funções serverless podem apresentar uma latência leve (alguns milissegundos a mais) na primeira requisição após um período de inatividade (inicialização a frio). Esse impacto é minimizado utilizando runtimes leves (Node.js otimizado ou Edge Runtime).
    *   **Limites de Tempo de Execução (Timeout):** Funções serverless possuem limites estritos de tempo de execução (geralmente 10 a 60 segundos). Todas as integrações de API do proxy devem ser otimizadas para responder rapidamente dentro desse limite.