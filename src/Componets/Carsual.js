import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
function Carusal() {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://images.priceoye.pk/banners/pakistan-priceoye-slider-mxp79.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>SUPER SALE DISCOUNT 50%</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://images.priceoye.pk/banners/pakistan-priceoye-slider-8g2l9.jpg" alt="First slide" />
          <Carousel.Caption>
            <h5>SUPER SALE DISCOUNT 50%</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://images.priceoye.pk/banners/pakistan-priceoye-slider-ue36y.jpg" alt="Second slide" />
          <Carousel.Caption>
            <h5>SUPER SALE DISCOUNT 50%</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://images.priceoye.pk/banners/pakistan-priceoye-slider-rx1r8.jpg" alt="Second slide" />
          <Carousel.Caption>
            <h5>SUPER SALE DISCOUNT 50%</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </>
  );
}

export default Carusal;
