import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const NavbarComponent = () => {
    // Obtener datos del usuario y token del almacenamiento local
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('usuario');
    const navigate = useNavigate();

    let userName = null;
    if (userData) {
        try {
            userName = JSON.parse(userData).nombre.split(' ')[0]; // Tomamos solo el primer nombre
        } catch (e) {
            console.error("Error al parsear datos de usuario:", e);
        }
    }

    const handleLogout = () => {
        // 1. Eliminar el token y los datos de usuario
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        
        // 2. Redirigir al login
        navigate('/login');
    };

    return (
        // Replicamos la estructura del Navbar de tu HTML original (navbar-default menu-fixed)
        <Navbar bg="light" expand="lg" className="shadow-sm menu-fixed">
            <Container fluid>
                <Navbar.Brand as={Link} to={token ? "/inicio" : "/login"} className="fw-bold">
                    UNICIT
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav">
                    
                    {/* El menú principal solo se muestra si hay un token (autenticado) */}
                    {token ? (
                        <Nav className="ms-auto">
                            {/* Los 'Link' de React Router se usan con 'as={Link}' */}
                            <Nav.Link as={Link} to="/inicio" active>Inicio</Nav.Link>
                            <Nav.Link as={Link} to="/alumnos">Alumnos</Nav.Link>
                            <Nav.Link as={Link} to="/asignaturas">Asignaturas</Nav.Link>
                            <Nav.Link as={Link} to="/asignacion">Asignación</Nav.Link>
                            <Nav.Link as={Link} to="/notas">Notas</Nav.Link>
                            <Nav.Link as={Link} to="/reportes">Reportes</Nav.Link>
                            
                            {/* Botón de Logout o Mensaje de Bienvenida */}
                            {userName && (
                                <span className="navbar-text ms-3 me-3 d-none d-lg-block">
                                    ¡Hola, {userName}!
                                </span>
                            )}
                            <Nav.Link onClick={handleLogout} style={{cursor: 'pointer'}}>
                                Cerrar Sesión
                            </Nav.Link>
                        </Nav>
                    ) : (
                         // Si no hay token, podemos mostrar un enlace al login o nada
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/login">Iniciar Sesión</Nav.Link>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;