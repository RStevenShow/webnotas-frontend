import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';

function LoginForm() {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
           // const response = await axios.post('http://localhost:3001/api/login', {
                const API_URL = 'https://webnotas-api.onrender.com'; // ¡PEGA AQUÍ TU URL DE RENDER!
// ...
                const response = await axios.post(`${API_URL}/api/login`, {
                Usuario: usuario,
                Password: password
            });

            localStorage.setItem('token', response.data.token);
            localStorage.setItem('usuario', JSON.stringify(response.data.usuario));

            // Redirige al Home (la ruta '/') después del login
            navigate('/'); 

        } catch (err) {
            if (err.response && err.response.status === 401) {
                setError('Usuario o contraseña incorrectos.');
            } else {
                setError('Error de conexión con el servidor.');
            }
            console.error("Login Error:", err);
        }
    };

    return (
        <Form onSubmit={handleLogin}>
            <div className="mb-3">
                <label htmlFor="usuario" className="form-label">Usuario</label>
                <input
                    type="text"
                    className="form-control"
                    id="usuario"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    placeholder="Introduce tu Usuario"
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Introduce tu Contraseña"
                    required
                />
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            <Button type="submit" variant="primary">Entrar</Button>
        </Form>
    );
}

export default LoginForm;