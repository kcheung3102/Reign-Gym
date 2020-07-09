import React from 'react';
import { Row, Col, Container } from "react-bootstrap"

const headerAbout = () => {
    return (
        <header className="about-header">
            <Container fluid>
                <Row className="align-items-center justify-content-center">
                    <Col lg={10} className="">
                        <h1 className="header-style">About <span className="emphasis">Us</span></h1>
                    </Col>
                    <Col lg={8} className="align-self-baseline">
                        <p className="text-white mt-3 mb-5 text-center">Lorem ipsum dolor sit amet, consectetur adip
                        iscing elit. Donec tempor, neque non hendrerit scelerisque, dui leo blandit 
                        tellus, a vestibulum libero augue eget nibh. Praesent ut ex ut purus faucibus 
                        vinar vel ut elit.</p>
                        <hr className="divider"></hr>
                    </Col> 
                </Row>
            </Container>
        </header>
            
        
    );
}

export default headerAbout;
