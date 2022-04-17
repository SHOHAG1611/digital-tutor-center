import React from 'react';
import { Carousel } from 'react-bootstrap';
import benar1 from '../../img/benar/benar1.jpg'
import benar2 from '../../img/benar/benar2.jpg'
import benar3 from '../../img/benar/benar3.jpg'
import './Banar.css'

const Banar = () => {
    return (
        <div className='home-benar'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={benar1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Carol Burnett</h3>
                        <p>“When you have a dream, you ve got to grab it and never let go.”</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={benar2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Audrey Hepburn</h3>
                        <p>“Nothing is impossible. The word itself says i'm possible!”</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={benar3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Alexander the Great</h3>
                        <p>“There is nothing impossible to they who will try.”</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banar;