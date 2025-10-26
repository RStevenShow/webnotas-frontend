import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    // Verifica si existe el token en el almacenamiento local
    const isAuthenticated = localStorage.getItem('token'); 

    // Si el token existe, renderiza el componente anidado (<Outlet> es la página: HomePage
    // Si no, redirige al usuario a la página de login
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;