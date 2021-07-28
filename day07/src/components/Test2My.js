import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Carousel, Dropdown} from 'react-bootstrap';

const Test2My = () => {
   return (
      <div>
         <Button variant="primary">Primary</Button>{' '}
         <Button variant="secondary">Secondary</Button>{' '}
         <Button variant="success">Success</Button>{' '}
         <Button variant="warning">Warning</Button>{' '}
         <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
         <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
         <Button variant="link">Link</Button>

         <Carousel fade>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=First slide&bg=373940"
                  alt="First slide"
               />
               <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Second slide&bg=282c34"
                  alt="Second slide"
               />

                     <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                     </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                     <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                     />
                     <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                     </Carousel.Caption>
                  </Carousel.Item>
               </Carousel>
               <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
      Dropdown Button
   </Dropdown.Toggle>

   <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
   </Dropdown.Menu>
   </Dropdown>
      </div>
   );
};

export default Test2My;