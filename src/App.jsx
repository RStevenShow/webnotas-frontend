import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RootPage from './pages/RootPage';
import AlumnosPage from './pages/AlumnosPage';
import PrivateRoute from './components/PrivateRoute'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*
          Rutas Públicas
        */}
        <Route path="/" element={<RootPage />} />
        <Route path="/inicio" element={<Navigate to="/" />} /> 

        {/* Rutas Privadas (siguen necesitando autenticación) */}
        <Route element={<PrivateRoute />}>
          <Route path="/alumnos" element={<AlumnosPage />} />
          {/* ... (otras rutas protegidas) */}
        </Route>
        
        {/* Manejo de rutas no encontradas  */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;