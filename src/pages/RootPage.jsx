import React from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import CarouselComponent from '../components/Carousel';
import LoginForm from '../components/LoginForm'; // Separamos la lógica del formulario
import { Container, Row, Col } from 'react-bootstrap';

const isAuthenticated = () => localStorage.getItem('token');

const RootPage = () => {
    // Si el usuario ya tiene un token, lo redirigimos a la primera ruta protegida (Alumnos, por ejemplo)
    if (isAuthenticated()) {
        return <Navigate to="/alumnos" replace />;
    }

    // Si NO está autenticado, mostramos la página de Inicio con el Login incrustado
    return (
        <Layout>
            <CarouselComponent />
            
            {/* Título Central */}
            <section className="container text-center py-4">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Sistema de Registro de Notas <br/> en Línea</h3>
                    </div>
                </div>
            </section>
            
            {/* Contenido Principal: Formulario de Login y Logo */}
            <Container className="mb-5">
                <Row className="align-items-start">
                    
                    {/* Columna del Formulario de Login */}
                    <Col md={6}>
                        <div className="mb-3">
                            <h4 style={{borderBottom: '3px solid red', paddingBottom: '5px'}}>
                                Inicio de Sesión
                            </h4>
                            <p>Para ingresar digite los siguientes datos:</p>
                        </div>
                        {/* El formulario de login separado */}
                        <LoginForm /> 
                    </Col>
                    
                    {/* Columna del Logo UNICIT */}
                    <Col md={6} className="text-center">
                        <img 
                            src="/img/LogoUnicit.jpg" 
                            alt="Logo UNICIT" 
                            width="300" 
                            height="250" 
                        />
                    </Col>
                </Row>
            </Container>
            
        </Layout>
    );
};

export default RootPage;