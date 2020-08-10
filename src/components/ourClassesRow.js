import React from 'react';
import Fade from 'react-reveal';
import { Row, Col, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRunning, faDumbbell, faLink } from "@fortawesome/free-solid-svg-icons";

export const ourClassesRow = () => {
    return (
        <section className="page-section" id="classes">
         <Fade top>
            <Container fluid>
              <h2 className="header mt-4" id="classes-header">Our Classes</h2>
              <hr className="divider my-4" id="divider-classes"/>
              <Row className="justify-content-center">
                {/* <div className="col-lg-3 col-md-7 text-center"> */}
                <Col xl={3} md={8} lg={5} className="text-center">
                  <div className="mt-5">
                  <FontAwesomeIcon icon={faRunning} size="4x" className="mb-3 icon-color" />
                    <h3 className="h4 mb-2">Lorem ipsum dolor sit amet</h3>
                    <p className="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus, turpis sed rhoncus facilisis, justo magna pharetra velit, accumsan eleifend ex turpis ac tellus. </p>
                    <div className="mt-2">
                      <Button variant="outline-danger btn-style">Learn More</Button>{' '}
                    </div>
                  </div>
                </Col>
                <Col xl={3} md={8} lg={5} className="text-center">
                  <div className="mt-5">
                  <FontAwesomeIcon icon={faDumbbell} size="4x" className="mb-3" />
                    <h3 className="h4 mb-2">Lorem ipsum dolor sit amet</h3>
                    <p className="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus, turpis sed rhoncus facilisis, justo magna pharetra velit, accumsan eleifend ex turpis ac tellus. </p>
                    <div className="mt-2">
                      <Button variant="outline-danger btn-style">Learn More</Button>{' '}
                    </div>
                  </div>
                </Col>
                <Col xl={3} md={8} lg={5} className="text-center">
                  <div className="mt-5">
                  <FontAwesomeIcon icon={faLink} size="4x" className="mb-3 icon-color" />
                    <h3 className="h4 mb-2">Lorem ipsum dolor sit amet</h3>
                    <p className="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus, turpis sed rhoncus facilisis, justo magna pharetra velit, accumsan eleifend ex turpis ac tellus. </p>
                    <div className="mt-2">
                    <Button variant="outline-danger btn-style">Learn More</Button>{' '}
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            </Fade>
          </section>
    )
}


