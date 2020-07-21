import React from 'react'
import Questions from '../components/questionform';
import Contact from '../components/contact';
import { Row, Col, Container, Button } from "react-bootstrap";
import Fade from 'react-reveal';

export const contactSection = () => {
    return (
        <section className="page-section bg-grey">
          <Row>
            <Col lg={6} xs={12}>
              <Container fluid className="justify-content-center">
              <Fade>
                <h2 className="text-center header m-2 letter-spacing"><span className="emphasis">Contact</span> Us</h2>
                <hr className="divider"></hr>           
              <Row className="justify-content-center mt-4">
                    <Contact />
              </Row>
              </Fade>
              </Container>
            </Col>
            <Col lg={6} xs={12}>
              <Fade>
                <Container fluid className="justify-content-center">           
                  <h2 className="text-center header m-2 letter-spacing">Questions?</h2>
                  <hr className="divider"></hr>
                  <Row className="justify-content-center mt-4">
                        <Questions/>
                  </Row>
                </Container>
              </Fade>
            </Col>
          </Row>
        </section>
    )
}


