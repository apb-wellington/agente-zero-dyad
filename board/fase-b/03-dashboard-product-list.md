# Card 03 — Dashboard & Product List

**Status:** A fazer
**Depende de:** 02-setup-byok-secure-vault

## Objetivo
Construir a interface do painel de controle do vendedor (Dashboard), exibindo a listagem de produtos cadastrados, links rápidos de compartilhamento de checkout, atalhos para a planilha do Google Sheets e tratamento de estado vazio (Empty State).

## Contexto essencial
*   **Filosofia Fusca:** Interface limpa, direta e focada na ação. Sem gráficos complexos ou distrações visuais.
*   **Soberania de Dados:** O dashboard exibe os produtos cadastrados pelo seller (armazenados de forma segura no banco de metadados do seller) e fornece um link direto para a planilha do Google Sheets onde os pedidos dos compradores são registrados.
*   **Funcionalidades Principais:**
    *   Listagem de produtos com foto, título, preço e estoque.
    *   Botão de cópia rápida do link público de checkout (`/p/:id`).
    *   Atalho proeminente para abrir a planilha do Google Sheets.
    *   Botão para criar novo produto (redireciona para `/produtos/novo`).

## Prompt de execução
> Copie o bloco abaixo para um chat NOVO do Dyad, em Build mode.

```markdown
Você é um Engenheiro Frontend Sênior com foco em UX/UI e usabilidade. Seu objetivo é construir a página de Dashboard do Seller (`/dashboard`) para o CapybaraCart.

### Diretrizes de Implementação:
1. **Layout e Estrutura (Responsivo):**
   - Crie um cabeçalho limpo contendo o logo do CapybaraCart, um botão de atalho para abrir a planilha do Google Sheets do seller (em nova aba) e o menu de perfil do usuário.
   - O corpo da página deve listar os produtos ativos do seller em formato de grid (desktop) ou lista vertical (mobile).
2. **Listagem de Produtos:**
   - Cada card de produto deve exibir: imagem em miniatura, título, preço formatado em BRL, quantidade em estoque, link público de checkout e botões de ação (Editar, Excluir).
   - Implemente a funcionalidade de cópia rápida do link de checkout para a área de transferência (Clipboard API) com feedback visual temporário de "Copiado!".
3. **Estado Vazio (Empty State):**
   - Se o seller não tiver nenhum produto cadastrado, exiba uma ilustração amigável de capivara com uma mensagem de incentivo e um botão de destaque (CTA) para cadastrar o primeiro produto.
4. **Integração com o Backend:**
   - Busque a lista de produtos do banco de metadados do seller (Supabase/Firebase) filtrando pelo ID do usuário autenticado.
   - Garanta que a página exiba skeletons de carregamento enquanto os dados são buscados.

Utilize os Design Tokens de cores, tipografia e espaçamento configurados no Tailwind CSS. Gere um código limpo, modular e acessível.
```

## Critério de aceite
1. A rota `/dashboard` renderiza a listagem de produtos corretamente para usuários autenticados.
2. O botão de cópia rápida do link de checkout funciona e exibe feedback visual de sucesso.
3. O atalho para a planilha do Google Sheets abre a URL correta em uma nova aba.
4. O estado vazio (Empty State) é exibido corretamente quando a lista de produtos está vazia.
5. A interface é totalmente responsiva e atende aos critérios de contraste WCAG AA.