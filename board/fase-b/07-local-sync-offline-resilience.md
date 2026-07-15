# Card 07 — Local Sync & Offline Resilience

**Status:** A fazer
**Depende de:** 03-dashboard-product-list, 06-serverless-proxy-sheets-integration

## Objetivo
Implementar o mecanismo de resiliência local no PWA do vendedor utilizando o IndexedDB para armazenar temporariamente os pedidos que falharam ao serem gravados no Google Sheets, exibindo um alerta visual proeminente no Dashboard e permitindo a sincronização manual ou automática assim que o serviço for restabelecido.

## Contexto essencial
*   **ADR-03 (Resiliência Descentralizada):** Se a gravação direta no Google Sheets falhar pós-pagamento aprovado, o proxy retorna o pedido criptografado com a flag `pending_sync: true`.
*   **IndexedDB:** Armazenamento local seguro e estruturado no navegador do vendedor para gerenciar a fila de pedidos pendentes de sincronização.
*   **UX do Seller:** O vendedor deve ver um alerta vermelho claro no Dashboard indicando que há pedidos pendentes de gravação na planilha, com um botão de "Sincronizar Agora".

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

```markdown
Você é um Engenheiro Frontend Sênior especialista em PWAs, armazenamento local (IndexedDB) e estratégias de resiliência offline. Seu objetivo é implementar o fluxo de sincronização local e resiliência de pedidos para o CapybaraCart.

### Diretrizes de Implementação:
1. **Configuração do IndexedDB:**
   - Utilize uma biblioteca leve (como `idb` ou `localforage`) para gerenciar um banco de dados local no navegador do vendedor chamado `capybaracart_db` com uma store `pending_orders`.
2. **Captura de Pedidos Pendentes:**
   - No fluxo de checkout, se a resposta do Serverless Proxy indicar `pending_sync: true`, capture o payload do pedido e salve-o imediatamente na store `pending_orders` do IndexedDB do vendedor.
3. **Alerta Visual no Dashboard (`/dashboard`):**
   - No carregamento do Dashboard, verifique se existem registros na store `pending_orders`.
   - Se houver pedidos pendentes, exiba um banner de alerta vermelho de alta visibilidade (utilizando os Design Tokens de status de erro): *"Atenção: Você possui X pedido(s) pendente(s) de sincronização devido a uma instabilidade na sua planilha do Google Sheets."*
4. **Fluxo de Sincronização Manual e Automática:**
   - Adicione um botão "Sincronizar Agora" no banner de alerta.
   - Ao clicar, o sistema deve tentar reenviar cada pedido da fila para o endpoint de sincronização do Serverless Proxy.
   - Se a sincronização for bem-sucedida, remova o pedido correspondente do IndexedDB e atualize o estado do Dashboard (removendo o banner se a fila zerar).
   - Implemente uma verificação automática em background (polling silencioso) a cada 5 minutos enquanto o vendedor estiver com o Dashboard aberto.

Gere um código limpo, modular, com tratamento de erros robusto e feedbacks visuais claros de progresso de sincronização.
```

## Critério de aceite
1. O banco de dados IndexedDB é criado e inicializado corretamente no navegador do vendedor.
2. Pedidos com falha de gravação no Sheets são salvos com sucesso na fila local do IndexedDB.
3. O Dashboard exibe o banner de alerta vermelho apenas quando existem pedidos pendentes na fila.
4. O botão "Sincronizar Agora" dispara o reenvio dos pedidos e limpa a fila local após o sucesso.
5. A interface exibe loaders e feedbacks visuais claros durante o processo de sincronização.