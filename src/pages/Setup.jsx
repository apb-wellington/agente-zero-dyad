import React from 'react';
import { Key, Shield, CheckCircle } from 'lucide-react';

export default function Setup() {
  return (
    <div className="min-h-screen bg-neutral-bg-secondary flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto space-y-8 bg-white p-8 rounded-lg border border-neutral-border shadow-sm">
        <div>
          <div className="flex justify-center">
            <div className="bg-brand-primary-light p-3 rounded-full">
              <Key className="h-8 w-8 text-brand-primary" />
            </div>
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold text-neutral-text">
            Configuração BYOK
          </h2>
          <p className="mt-2 text-center text-sm text-neutral-text-secondary">
            Traga suas próprias chaves de API para operar com custo zero de comissão.
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-neutral-text-secondary">
              Stripe Publishable Key
            </label>
            <input
              type="text"
              placeholder="pk_live_..."
              className="mt-1 block w-full px-3 py-2 border border-neutral-border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-text-secondary">
              Google Sheets Spreadsheet ID
            </label>
            <input
              type="text"
              placeholder="1X2y3Z..."
              className="mt-1 block w-full px-3 py-2 border border-neutral-border rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
            />
          </div>

          <div className="flex items-center space-x-2 text-status-success-text bg-status-success-bg p-3 rounded-md text-sm">
            <Shield className="h-5 w-5" />
            <span>Suas chaves são criptografadas localmente com AES-GCM-256.</span>
          </div>

          <button
            type="button"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-primary hover:bg-brand-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors"
          >
            Validar e Salvar Chaves
          </button>
        </form>
      </div>
    </div>
  );
}