import React from 'react';
import { ArrowLeft, Sparkles, Image as ImageIcon } from 'lucide-react';

export default function NewProduct() {
  return (
    <div className="min-h-screen bg-neutral-bg-secondary">
      <header className="bg-white border-b border-neutral-border px-4 py-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center space-x-4">
          <button className="p-1 hover:bg-neutral-bg-secondary rounded transition-colors">
            <ArrowLeft className="h-6 w-6 text-neutral-text-secondary" />
          </button>
          <h1 className="text-xl font-bold text-neutral-text">Novo Produto</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulário */}
          <div className="bg-white p-6 rounded-lg border border-neutral-border shadow-sm space-y-6">
            <h2 className="text-lg font-bold text-neutral-text border-b border-neutral-border pb-2">
              Formulário do Produto
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-text-secondary">Fotos do Produto</label>
                <div className="mt-1 border-2 border-dashed border-neutral-border rounded-md p-6 flex flex-col items-center justify-center hover:border-brand-primary transition-colors cursor-pointer">
                  <ImageIcon className="h-8 w-8 text-neutral-text-secondary mb-2" />
                  <span className="text-sm text-neutral-text-secondary">Clique para enviar foto</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-text-secondary">Título do Produto</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-neutral-border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-text-secondary">Descrição do Produto</label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border border-neutral-border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-text-secondary">Preço (R$)</label>
                  <input
                    type="number"
                    placeholder="0,00"
                    className="mt-1 block w-full px-3 py-2 border border-neutral-border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-text-secondary">Estoque (un.)</label>
                  <input
                    type="number"
                    placeholder="1"
                    className="mt-1 block w-full px-3 py-2 border border-neutral-border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-primary hover:bg-brand-primary-dark transition-colors">
              Salvar e Publicar
            </button>
          </div>

          {/* Assistente de IA */}
          <div className="bg-white p-6 rounded-lg border border-neutral-border shadow-sm flex flex-col h-[500px]">
            <div className="flex items-center space-x-2 border-b border-neutral-border pb-2 mb-4">
              <Sparkles className="h-5 w-5 text-brand-primary" />
              <h2 className="text-lg font-bold text-neutral-text">Assistente de IA (Copiloto)</h2>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 p-2 bg-neutral-bg-secondary rounded border border-neutral-border mb-4 text-sm">
              <div className="bg-brand-primary-light text-brand-primary-dark p-3 rounded-lg max-w-[85%]">
                Olá! Me fale um pouco sobre o produto que você quer cadastrar hoje.
              </div>
            </div>

            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                className="flex-1 px-3 py-2 border border-neutral-border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
              />
              <button className="px-4 py-2 bg-brand-primary hover:bg-brand-primary-dark text-white rounded-md text-sm font-medium transition-colors">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}