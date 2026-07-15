import React from 'react';
import { ShieldCheck, Truck, CreditCard } from 'lucide-react';

export default function ProductVitrine() {
  return (
    <div className="min-h-screen bg-neutral-bg-secondary py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg border border-neutral-border shadow-sm overflow-hidden">
        {/* Foto do Produto */}
        <div className="h-64 bg-neutral-bg-secondary flex items-center justify-center border-b border-neutral-border text-neutral-text-secondary">
          [FOTO DO PRODUTO]
        </div>

        {/* Detalhes do Produto */}
        <div className="p-6 space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-neutral-text">Muda de Orquídea Cattleya Walkeriana</h1>
            <p className="text-3xl font-bold text-brand-primary mt-2">R$ 89,90</p>
          </div>

          <div className="text-sm text-neutral-text-secondary space-y-2">
            <p className="font-semibold text-neutral-text">Descrição:</p>
            <p>
              Esta muda de Cattleya walkeriana é uma divisão direta da planta matriz da minha coleção pessoal. Flor rosa altamente perfumada e saudável.
            </p>
          </div>

          <div className="border-t border-neutral-border pt-4 space-y-6">
            <h2 className="text-lg font-bold text-neutral-text uppercase tracking-wider text-center bg-neutral-bg-secondary py-2 rounded">
              Finalizar Compra (Sem criar conta)
            </h2>

            {/* Seção 1: Entrega */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-neutral-text font-semibold">
                <Truck className="h-5 w-5 text-brand-primary" />
                <span>1. Dados de Entrega</span>
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-text-secondary">CEP</label>
                <div className="mt-1 flex space-x-2">
                  <input
                    type="text"
                    placeholder="25620-000"
                    className="flex-1 px-3 py-2 border border-neutral-border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
                  />
                  <button className="px-3 py-2 bg-neutral-bg-secondary hover:bg-neutral-border border border-neutral-border rounded-md text-sm font-medium transition-colors">
                    Calcular
                  </button>
                </div>
              </div>
            </div>

            {/* Seção 2: Pagamento */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-neutral-text font-semibold">
                <CreditCard className="h-5 w-5 text-brand-primary" />
                <span>2. Pagamento (Stripe)</span>
              </div>
              <div className="space-y-2">
                <div>
                  <label className="block text-xs font-medium text-neutral-text-secondary">Número do Cartão</label>
                  <input
                    type="text"
                    placeholder="4111 1111 1111 1111"
                    className="mt-1 block w-full px-3 py-2 border border-neutral-border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-medium text-neutral-text-secondary">Validade</label>
                    <input
                      type="text"
                      placeholder="12/26"
                      className="mt-1 block w-full px-3 py-2 border border-neutral-border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-text-secondary">CVC</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="mt-1 block w-full px-3 py-2 border border-neutral-border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Botão de Confirmação */}
            <div className="pt-4">
              <button className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-brand-primary hover:bg-brand-primary-dark transition-colors flex items-center justify-center space-x-2">
                <ShieldCheck className="h-5 w-5" />
                <span>Confirmar e Pagar Agora</span>
              </button>
              <p className="text-center text-xs text-neutral-text-secondary mt-2">
                Seus dados estão protegidos e processados com segurança.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}