import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
    return (
        <footer>
            {/* Sección 01: Mapa del Sitio y Contacto (Pie azul) */}
            <section className="bg-primary text-white pt-4 pb-4">
                <Container>
                    <Row>
                        {/* Mapa del Sitio */}
                        <Col md={6}>
                            <h4>Mapa del Sitio</h4>
                            <ul className="list-unstyled">
                                <li><Link to="/inicio" className="text-white">Inicio</Link></li>
                                <li><Link to="/alumnos" className="text-white">Alumnos</Link></li>
                                <li><Link to="/asignaturas" className="text-white">Asignaturas</Link></li>
                                <li><Link to="/asignacion" className="text-white">Asignación</Link></li>
                                <li><Link to="/notas" className="text-white">Notas</Link></li>
                                <li><Link to="/reportes" className="text-white">Reportes</Link></li>
                            </ul>
                        </Col>

                        {/* Datos de Contacto */}
                        <Col md={6}>
                            <h4>Datos de Contacto</h4>
                            <address>
                                Dirección: Rotonda Universitaria, 100 mts al Sur. <br />
                                Managua, Nicaragua.<br />
                                PBX: 2278-7231.<br />
                                E-mail: <a href="mailto:admision@unicit.edu.ni" className="text-white">admision@unicit.edu.ni</a><br />
                                Horario de atención: 8:00am-5:00pm<br />
                                Facebook ׀ Twitter - UNICITNIC
                            </address>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Sección 02: Copyright (Pie verde) */}
            <section className="bg-success text-center text-white py-2">
                <Container>
                    &copy; copyright 2024 UNICIT - Desarrollado Por: Ramon Steven Lopez Esquivel
                </Container>
            </section>
        </footer>
    );
};

export default FooterComponent;