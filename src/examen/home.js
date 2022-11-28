import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'


      
const home = ()=> {
    return(<div className='container-sm'>
        
            <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="3.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>HEROES Y VILLANOS</h3>
          <p>Enfrentandose en una pelea.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="4.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>HEROES</h3>
          <p>Los heroes mas poderosos del planeta.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="villanos2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>VILLANOS</h3>
          <p>
            Los villanos mas malvados del mundo.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  
</div>)
}

export default home;
