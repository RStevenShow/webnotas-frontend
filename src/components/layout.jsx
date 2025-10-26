import React from 'react';
import { Container } from 'react-bootstrap';
import NavbarComponent from './Navbar'; // Lo crearemos en el siguiente paso
import FooterComponent from './Footer'; // Lo crearemos más abajo

// El Layout recibe el contenido específico de la página (children)
const layout = ({ children }) => {
    return (
        <>
            {/* Aquí se incluye la barra de navegación que aparecerá en todas las rutas */}
            <NavbarComponent /> 
            
            {/* Contenido principal de la página (HomePage, AlumnosPage, etc.) */}
            <main style={{ minHeight: '80vh' }}>
                <Container fluid className="p-0">
                    {children}
                </Container>
            </main>
            
            {/* Pie de página que aparecerá en todas las rutas */}
            <FooterComponent />
        </>
    );
};

export default layout;