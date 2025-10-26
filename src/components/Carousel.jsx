import React from 'react';
import { Carousel } from 'react-bootstrap';



const CarouselComponent = () => {
    return (
        // Usamos el componente Carousel de react-bootstrap
        <Carousel id="carousel1" data-bs-ride="carousel">
            
            {/* Primer Item del Carrusel */}
            <Carousel.Item className="item active">
                <img 
                    className="d-block w-100" 
                    src="/img/banner1.jpg" // Ruta relativa desde la carpeta 'public'
                    alt="First slide image" 
                    style={{ height: '350px', objectFit: 'cover' }} // Estilos para que se vea bien
                />
                <Carousel.Caption>
                   
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>

            {/* Segundo Item del Carrusel */}
            <Carousel.Item className="item">
                <img 
                    className="d-block w-100" 
                    src="/img/banner2.jpg" // Ruta relativa desde la carpeta 'public'
                    alt="Second slide image" 
                    style={{ height: '350px', objectFit: 'cover' }} 
                />
                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>

            {/* Tercer Item del Carrusel */}
            <Carousel.Item className="item">
                <img 
                    className="d-block w-100" 
                    src="/img/banner3.jpg" // Ruta relativa desde la carpeta 'public'
                    alt="Third slide image" 
                    style={{ height: '350px', objectFit: 'cover' }} 
                />
                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselComponent;