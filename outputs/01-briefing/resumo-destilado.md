# Resumo Destilado do Briefing — CapybaraCart

## Ideia em uma frase
O CapybaraCart é um checkout e vitrine ultra-simples em formato PWA para sellers eventuais e colecionadores venderem nas redes sociais sem a complexidade de um e-commerce tradicional e sem o desgaste da barganha direta no WhatsApp, operando sob uma filosofia "Fusca" de simplicidade radical e modelo BYOK (Bring Your Own Key).

## Problema e contexto
Colecionadores e hobbistas (como criadores de orquídeas raras) sentem orgulho de expor suas peças e eventualmente vendê-las, mas não possuem ímpeto comercial agressivo e detestam a burocracia de ERPs, setups de e-commerce pesados ou a exaustão de negociar preços no "tete-a-tete" do WhatsApp. Eles precisam de um fluxo de compra fluido (seleção, carrinho, frete e pagamento) que resolva a venda de forma elegante e direta.

## Público-alvo e cenário de uso
Sellers eventuais, colecionadores e hobbistas que utilizam redes sociais (Instagram, Pinterest, TikTok) para exibir suas paixões e precisam de um link de checkout direto, frictionless e profissional para seus compradores fecharem a transação de forma autônoma.

## Papel da IA/LLM na solução
A IA atua como uma assistente de usabilidade e marketing em múltiplos pontos da jornada, utilizando chaves do próprio usuário (BYOK):
1. **Assistente de Posicionamento de Marca (Setup):** Conduz um briefing inicial com o seller para definir o tom e posicionamento do negócio, salvando essas informações em campos editáveis.
2. **Assistente de Fotos:** Trata e estiliza as imagens dos produtos para adequá-las ao padrão de publicação, sem realizar qualquer inferência ou alteração no objeto real.
3. **Assistente de Cadastro de Produtos:** Entrevista o seller de forma interativa (foco no 80/20 do marketing) para gerar títulos e descrições persuasivas. Utiliza pedagogia de exemplos e jamais alucina dados "hard" (como preço, nome ou características físicas).
4. **Assistente de Publicação Social:** Auxilia na criação de posts e na sincronização de produtos com catálogos de redes sociais (Instagram Shopping, Pinterest, TikTok Shopping).

## Dados envolvidos
Para garantir privacidade máxima e segurança contra vazamentos, o CapybaraCart adota uma política de armazenamento zero de dados de compradores. Os dados necessários para a efetivação da compra (pagamento e entrega) são processados diretamente via integrações e, caso o seller queira manter um histórico de clientes para remarketing, esses dados são enviados diretamente para uma planilha do Google Sheets do próprio seller (BYOK). Não há área de membros ou login para compradores.

## Integrações previstas
Todas as integrações seguem o modelo BYOK (Bring Your Own Key), acompanhadas de instruções visuais simples de configuração:
*   **Pagamento:** Stripe (ou gateway popular similar).
*   **Frete:** Mercado Envios (ou similar).
*   **Banco de Dados de Clientes:** Google Sheets (do próprio seller).
*   **Inteligência Artificial:** APIs de LLM (OpenAI/Anthropic).
*   **Redes Sociais:** APIs do Instagram, Pinterest e TikTok para publicação e tagueamento de produtos.

## Estágio de exposição a usuários
Lançamento silencioso (soft launch) focado em comunidades específicas de hobbistas e colecionadores. A escala será lenta, orgânica e baseada em um ciclo de crescimento viral (growth loop), onde todas as publicações sociais e imagens geradas pelo app conterão marcas d'água e tags do CapybaraCart para despertar a curiosidade de outros sellers do mesmo nicho.

## Decisões/ações e reversibilidade
Filosofia "Fusca": o sistema deve ser bruto, robusto, confiável e radicalmente simples. A arquitetura deve ser altamente modular e isolada por funções/features para facilitar o desenvolvimento via vibe-coding no Dyad. Se um subsistema apresentar problemas, o desenvolvedor deve ser capaz de simplesmente comentar o trecho de código correspondente e desativar a feature sem comprometer o funcionamento do restante da aplicação.

## Restrições
Desenvolvimento 100% focado em vibe-coding dentro do Dyad. Priorização de tecnologias maduras, estáveis e de fácil manutenção por IA. Não há prazos ou orçamentos rígidos gerenciados externamente; o foco absoluto é a simplicidade técnica e a experiência sem atrito para o usuário final.

## Riscos e preocupações identificados pela pessoa
*   **Segurança das Chaves de API:** Como o modelo é BYOK, o armazenamento e tráfego das chaves de API dos sellers (Stripe, Google, OpenAI) exige cuidado extremo de segurança local.
*   **Privacidade dos Compradores:** Mitigada pela decisão de não salvar dados de clientes nos servidores da plataforma, delegando o armazenamento ao Google Sheets do seller.

## Definição de sucesso do MVP
O seller consegue realizar todo o setup da ferramenta sozinho (incluindo a inserção de suas chaves de API), cadastrar seu primeiro produto com o auxílio da IA e publicá-lo nas redes sociais com sucesso dentro da primeira hora de uso do sistema.