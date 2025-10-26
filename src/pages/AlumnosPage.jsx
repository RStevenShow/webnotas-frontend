import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Container, Table, Alert } from 'react-bootstrap';
import axios from 'axios';

const AlumnosPage = () => {
    const [alumnos, setAlumnos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAlumnos = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    // Si no hay token, el PrivateRoute debería redirigir.
                    return; 
                }

                // Configuración de la petición con el token JWT
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}` 
                    }
                };

                // Llamada a la API protegida
                const response = await axios.get('http://localhost:3001/api/alumnos', config);
                setAlumnos(response.data.alumnos);
            } catch (err) {
                setError('Error al cargar la lista. El token podría haber expirado o la API falló.');
                console.error("Error fetching students:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchAlumnos();
    }, []);

    // Mostrar estado de carga
    if (loading) {
        return (
            <Layout>
                <Container className="my-5 text-center">
                    <h3>Cargando Alumnos...</h3>
                </Container>
            </Layout>
        );
    }

    // Mostrar errores
    if (error) {
        return (
            <Layout>
                <Container className="my-5">
                    <Alert variant="danger">{error}</Alert>
                </Container>
            </Layout>
        );
    }
    
    // Si hay datos, mostrar la tabla
    return (
        <Layout>
            <Container className="my-5">
                <h3 className="mb-4 text-center">Gestión de Alumnos</h3>
                
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>ID_Usuario</th>
                            <th>Usuario</th>
                            <th>Nombre Completo</th>
                            <th>Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alumnos.map((alumno) => (
                            // Asegúrate de que los nombres de las propiedades (ej. Id_Usuario) 
                            // coincidan con los que devuelve tu API de Node.js/MySQL
                            <tr key={alumno.Id_Usuario}>
                                <td>{alumno.Id_Usuario}</td>
                                <td>{alumno.Usuario}</td>
                                <td>{alumno.Nombre_Usuario}</td>
                                <td>{alumno.Tipo}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </Layout>
    );
};

export default AlumnosPage;