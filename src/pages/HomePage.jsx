import React from 'react';
import Layout from './components/layout'; // Importar el Layout
import CarouselComponent from '../components/Carousel'; // Lo crearemos pronto

function HomePage() {
    // Lógica para obtener el nombre de usuario (si es necesario)
    //const usuarioData = JSON.parse(localStorage.getItem('usuario'));

    return (
        <Layout>
            {/* Aquí va el contenido específico de la página de inicio */}
            <CarouselComponent />
            
            <section className="container text-center py-5">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h3>Sistema de Registro de Notas <br/> en Línea</h3>
                    </div>
                </div>
            </section>
            
            <section className="container text-center pb-5">
                <div className="row">
                    <div className="col-md-12">
                        {/* Reemplaza esta línea con la imagen de tu logo si la tienes */}
                        <img src="./img/LogoUnicit.jpg" alt="Logo UNICIT" width="300" height="250" />
                    </div>
                </div>
            </section>
            {/* Fin del contenido específico */}
        </Layout>
    );
}

export default HomePage;