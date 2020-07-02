import React from 'react';
import {  Button, Row, Col, Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram , faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"
import Fade from 'react-reveal/Fade';

const hero = () => {
    return (
        <header className="masthead">
          <Container fluid>
            <Row className="h-100 align-items-center justify-content-center text-center">
              <Col lg={10} className="align-self-end">
              <Fade>
                <h1 className="header-style">Go One <span className="emphasis">More</span></h1>
              </Fade>  
                <hr className="divider my-4" id="header-divider"/>
              </Col>
              {/* <div className="col-lg-8 align-self-baseline"> */}
           
              <Col lg={8} className="align-self-baseline">
                <Fade left cascade>
                  <p className="text-white mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor, neque non hendrerit scelerisque, dui leo blandit tellus, a vestibulum libero augue eget nibh. Praesent ut ex ut purus faucibus pulvinar vel ut elit.</p>
                  <Button variant="outline-light btn-style btn-lg">Explore</Button>{' '}
                </Fade>  
              </Col>
               
            </Row>
            <Row className="justify-content-center align-self-baseline mt-5">
            <ul className="list-unstyled list-inline text-center mt-5">
            <Fade bottom>
              <li className="list-inline-item m-2">
                <FontAwesomeIcon icon={faInstagram} size="3x" className="insta-icon" />
              </li>
              <li className="list-inline-item m-2">
                <FontAwesomeIcon icon={faFacebook} size="3x" className="fb-icon" />
              </li>
              <li className="list-inline-item m-2">
                <FontAwesomeIcon icon={faTwitter} size="3x" className="twitter-icon"  />
              </li>
              </Fade>
            </ul>
              </Row>  
            </Container>
        </header>
    );
}

export default hero;
