import HomePage from 'pages/Home/Home';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      <Route path="/home" element={<HomePage />} />
      <Route
        path="*"
        element={
          <main style={{ padding: '1rem' }}>
            <p>Pagina inexistente</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default Router;
