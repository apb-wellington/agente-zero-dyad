import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Setup from './pages/Setup';
import Dashboard from './pages/Dashboard';
import NewProduct from './pages/NewProduct';
import ProductVitrine from './pages/ProductVitrine';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Redireciona a raiz para o dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        
        <Route path="/setup" element={<Setup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/produtos/novo" element={<NewProduct />} />
        <Route path="/p/:id" element={<ProductVitrine />} />
        
        {/* Fallback para rotas não encontradas */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}