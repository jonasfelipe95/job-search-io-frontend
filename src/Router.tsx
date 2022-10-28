import LoginPage from 'pages/Login/Login';
import MyProfile from 'pages/MyProfile/MyProfile';
import RegisterPage from 'pages/Register/Register';
import ServiceDetail from 'pages/ServiceDetail/ServiceDetail';
import CreateService from 'pages/ServiceRegister/CreateService';
import ServicesPage from 'pages/Services/Services';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { saveToken } from 'stores/auth/AuthEvents';

const Router = () => {
  const authToken = localStorage.getItem('authToken');

  if (authToken) saveToken(authToken);
  return (
    <BrowserRouter>
      <Routes>
        {authToken ? (
          <>
            <Route path="/" element={<Navigate to="/services" />} />
            <Route path="/login" element={<Navigate to="/services" />} />
            <Route path="/register" element={<Navigate to="/services" />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/new" element={<CreateService />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/my-profile" element={<MyProfile />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/services" element={<Navigate to="/login" />} />
            <Route path="/services/new" element={<Navigate to="/login" />} />
            <Route path="/services/:id" element={<Navigate to="/login" />} />
            <Route path="/my-profile" element={<Navigate to="/login" />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </>
        )}
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
};

export default Router;
