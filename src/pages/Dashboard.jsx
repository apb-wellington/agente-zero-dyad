import React from 'react';
import { Plus, ExternalLink, Copy, Check } from 'lucide-react';

export default function Dashboard() {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('https://capy.cart/p/walkeriana-01');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-neutral-bg-secondary">
      <header className="bg-white border-b border-neutral-border px-4 py-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-brand-primary">CapybaraCart</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://docs.google.com/spreadsheets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-sm font-medium text-neutral-text-secondary hover:text-brand-primary transition-colors"
            >
              <span>Planilha de Pedidos</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <div className="h-8 w-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold">
              A
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-neutral-text">Seus Produtos Ativos</h1>
          <button className="inline-flex items-center space-x-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-primary hover:bg-brand-primary-dark transition-colors">
            <Plus className="h-4 w-4" />
            <span>Novo Produto</span>
          </button>
        </div>

        {/* Card de Produto Exemplo */}
        <div className="bg-white rounded-lg border border-neutral-border p-6 shadow-sm max-w-2xl">
          <div className="flex items-start space-x-4">
            <div className="h-24 w-24 bg-neutral-bg-secondary rounded-md flex items-center justify-center border border-neutral-border text-neutral-text-secondary">
              [Foto]
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-neutral-text">Muda de Orquídea Cattleya Walkeriana</h2>
              <p className="text-sm text-neutral-text-secondary mt-1">Preço: R$ 89,90 | Estoque: 1 un.</p>
              
              <div className="mt-4 flex items-center space-x-2 bg-neutral-bg-secondary p-2 rounded border border-neutral-border text-sm">
                <span className="text-neutral-text-secondary truncate flex-1">https://capy.cart/p/walkeriana-01</span>
                <button
                  onClick={handleCopy}
                  className="p-1 hover:bg-neutral-border rounded transition-colors text-neutral-text-secondary"
                  title="Copiar Link"
                >
                  {copied ? <Check className="h-4 w-4 text-brand-primary" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}