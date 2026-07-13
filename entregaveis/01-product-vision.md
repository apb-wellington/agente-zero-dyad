# Product Vision — CapybaraCart

## 1. Declaração de Visão (The Elevator Pitch)

Para hobbistas, colecionadores e vendedores eventuais, que precisam expor e vender suas peças de forma profissional sem a burocracia de um e-commerce tradicional e sem o desgaste da barganha direta no WhatsApp, o CapybaraCart é uma vitrine e checkout PWA ultra-simples que resolve a transação de forma autônoma, elegante e direta. Diferente de alternativas de mercado, nós operamos sob o modelo BYOK (Bring Your Own Key) com armazenamento zero de dados de compradores, garantindo custo operacional nulo para a plataforma, privacidade absoluta e simplicidade bruta.

---

## 2. Público-Alvo Detalhado

O público-alvo do CapybaraCart é composto por hobbistas, colecionadores e pequenos produtores artesanais (como criadores de orquídeas raras, colecionadores de discos de vinil, curadores de brechós vintage e artesãos de nicho). Esses vendedores compartilham características psicográficas muito específicas:

*   **Orgulho e Identidade:** Eles vendem o que amam e o que produzem/garimpam com paixão. A venda é uma consequência do seu estilo de vida, não necessariamente uma operação comercial agressiva de escala.
*   **Aversão à Burocracia:** Eles rejeitam plataformas tradicionais como Shopify ou WooCommerce porque o setup é exaustivo, exige configurações de ERP, emissão de notas fiscais complexas, taxas mensais fixas e uma curva de aprendizado desproporcional para quem vende apenas alguns itens por semana ou mês.
*   **Exaustão do WhatsApp:** Embora usem o Instagram ou Pinterest para expor seus produtos, eles detestam o fluxo de fechamento no WhatsApp. A negociação manual ("qual o frete?", "faz por menos?", "qual a chave Pix?") consome tempo, gera atrito, exige respostas imediatas e causa desgaste emocional com barganhas desnecessárias.

O CapybaraCart resolve essa dor oferecendo um link de checkout direto e profissional que permite ao comprador fechar a transação de forma 100% autônoma, preservando a paz mental do vendedor.

---

## 3. Diferenciais Competitivos (A Filosofia Fusca & BYOK)

O CapybaraCart não tenta competir em volume de funcionalidades, mas sim em simplicidade radical e soberania de dados. Nossos diferenciais estruturam-se em três pilares:

### A Filosofia "Fusca" (Simplicidade Bruta)
Inspirado no clássico automóvel, o CapybaraCart é projetado para ser bruto, robusto, confiável e de mecânica simples. A interface é despida de distrações visuais, focando exclusivamente na conversão. O PWA carrega instantaneamente mesmo em conexões móveis instáveis (comuns em feiras ou eventos ao ar livre) e funciona perfeitamente dentro dos navegadores integrados de redes sociais (Instagram, TikTok, Pinterest). Se um módulo falhar (como a IA de fotos), o motor principal (checkout e gravação de pedidos) continua rodando sem interrupções.

### Modelo BYOK (Bring Your Own Key)
Ao exigir que o vendedor traga suas próprias chaves de API (Stripe, Google Sheets, OpenAI/Anthropic), o CapybaraCart elimina o intermediário financeiro e operacional:
*   **Custo Zero de Plataforma:** O vendedor não paga mensalidades ou comissões sobre vendas para o CapybaraCart. Ele paga apenas as taxas diretas do gateway (Stripe) e o consumo real de tokens da IA.
*   **Independência:** O vendedor é dono absoluto de sua infraestrutura. Ele não está preso (lock-in) a uma plataforma que pode mudar as regras de preços ou termos de serviço arbitrariamente.

### Armazenamento Zero (Privacidade por Design)
Para o comprador, o fluxo é totalmente frictionless: não há necessidade de criar conta, definir senhas ou fazer login. Para o vendedor, a segurança é máxima: o CapybaraCart não armazena dados de compradores em seus servidores. Os dados de pagamento são processados de forma segura pelo Stripe, e os dados de entrega vão diretamente para a planilha do Google Sheets do próprio vendedor. Isso elimina o risco de vazamento de dados centralizado e simplifica drasticamente a conformidade com leis de privacidade (LGPD/GDPR).

---

## 4. Métricas de Sucesso Macro

Para validar a viabilidade do MVP do CapybaraCart durante o soft launch, acompanharemos as seguintes métricas macro:

1.  **Taxa de Ativação de Chaves (Time-to-Value):** % de novos sellers que conseguem inserir e validar com sucesso suas chaves de API (Stripe e Google Sheets) dentro dos primeiros 15 minutos após o primeiro acesso. *Meta: > 70%*.
2.  **Taxa de Conversão do Checkout:** % de compradores que acessam a vitrine PWA e finalizam a compra com sucesso. *Meta: > 12%* (aproveitando o tráfego altamente qualificado e de nicho vindo das redes sociais).
3.  **Coeficiente de Crescimento Viral (K-factor):** Número de novos sellers atraídos de forma orgânica através do growth loop de marcas d'água e tags do CapybaraCart presentes nas vitrines e posts gerados pela plataforma. *Meta: K > 0.15* (cada 100 sellers ativos trazem 15 novos sellers organicamente).
4.  **Retenção de Uso Ativo:** % de sellers que realizam pelo menos uma venda por mês através da plataforma após o primeiro setup. *Meta: > 50%*.

---

## 5. Contexto de Mercado e Concorrência

O CapybaraCart posiciona-se em um espaço único, desatendido pelas soluções atuais de mercado:

```
                   [Complexidade / Robustez]
                               │
                               │   Shopify / Nuvemshop
                               │   (E-commerce tradicional pesado)
                               │
[Foco em Catálogo] ────────────┼──────────── [Foco em Transação Direta]
                               │
      CapybaraCart             │   Stripe Payment Links / Pix Manual
      (Vitrine + Checkout)     │   (Sem contexto visual, seco)
                               │
                               │
                   [Simplicidade / Agilidade]
```

*   **Gigantes do E-commerce (Shopify, Nuvemshop):** São excelentes para operações comerciais estruturadas, mas representam um "canhão para matar uma mosca" para o hobbista. Exigem manutenção constante, mensalidades caras e configuração complexa de catálogo.
*   **Links de Pagamento Puros (Stripe Links, Mercado Pago):** Resolvem a transação, mas são frios e sem contexto. Não oferecem uma vitrine atraente para o produto, exigindo que o vendedor ainda precise explicar detalhes, enviar fotos adicionais e calcular frete manualmente no WhatsApp antes de enviar o link.
*   **CapybaraCart (O Doce Ponto Médio):** Oferece a beleza e o contexto de uma vitrine de produto elegante combinada com a automação de um checkout de passo único, sem exigir qualquer infraestrutura de servidor ou banco de dados do criador da plataforma.

---

## 6. Riscos Estratégicos

Identificamos três riscos estratégicos principais que devem ser mitigados no design do produto:

1.  **A Fricção Técnica do Setup BYOK:** Obter chaves de API do Stripe e configurar credenciais do Google Cloud Console (para o Sheets) pode ser intimidador para usuários leigos.
    *   *Mitigação:* O fluxo de setup deve conter tutoriais visuais extremamente simples, passo a passo interativos e, se possível, caminhos simplificados de conexão (como OAuth para o Google Sheets).
2.  **Dependência de APIs de Terceiros:** Mudanças repentinas nas políticas de API do Google, Stripe ou OpenAI podem quebrar funcionalidades do PWA.
    *   *Mitigação:* A arquitetura modular ("Filosofia Fusca") garante que se a API de IA ou de redes sociais falhar, o fluxo de checkout e gravação de pedidos continue funcionando de forma manual e resiliente.
3.  **Risco de Churn por Falta de Confiança do Comprador:** Compradores podem hesitar em inserir dados de cartão de crédito em um PWA desconhecido.
    *   *Mitigação:* O checkout deve exibir de forma proeminente selos de segurança oficiais do Stripe ("Powered by Stripe") e operar sob HTTPS estrito, garantindo que a transação ocorra diretamente no ambiente seguro do gateway.