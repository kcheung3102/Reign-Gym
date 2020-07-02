import React from "react"
import { Row, Col, Container, Button } from "react-bootstrap"
import Pricing from '../components/pricing';
import Questions from '../components/questionform';
import Contact from '../components/contact';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRunning, faDumbbell, faLink } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/hero'

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`Reign`, `Gym`, `Workout`]} />
    <Row>
      <Col>
        <Hero />
      </Col>
    </Row>
    <Row>
    <Col>
        <section className="page-section bg-grey" id="about">
          <Container fluid>
                <Row>
                  <Col>
                  <Fade bottom>
                        <h2  id="about-header" className="header mt-4">Changing Fitness one step at a time</h2>
                        <hr className="divider my-4" id="divider-about"/>
                        <p  id="about-text" className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor, neque non hendrerit scelerisque, dui leo blandit tellus, a vestibulum libero augue eget nibh. Praesent ut ex ut purus faucibus pulvinar vel ut elit. Quisque faucibus, ipsum ut iaculis ultricies, augue orci gravida neque, ac mattis tortor est ut eros.</p>
                  </Fade>      
                  </Col>
                </Row>
          </Container>
        </section>
    </Col>
    </Row>
    <Row>
    <Col>
        <section className="page-section" id="classes">
            <Fade top>
            <Container fluid>
              <h2 className="header mt-4" id="classes-header">Our Classes</h2>
              <hr className="divider my-4" id="divider-classes"/>
              <Row className="justify-content-center">
                {/* <div className="col-lg-3 col-md-7 text-center"> */}
                <Col lg={3} md={7} className="text-center">
                  <div className="mt-5">
                  <FontAwesomeIcon icon={faRunning} size="4x" className="mb-3 icon-color" />
                    <h3 className="h4 mb-2">Lorem ipsum dolor sit amet</h3>
                    <p className="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus, turpis sed rhoncus facilisis, justo magna pharetra velit, accumsan eleifend ex turpis ac tellus. </p>
                    <div className="mt-2">
                      <Button variant="outline-danger btn-style">Learn More</Button>{' '}
                    </div>
                  </div>
                </Col>
                <Col lg={3} md={6} className="text-center">
                  <div className="mt-5">
                  <FontAwesomeIcon icon={faDumbbell} size="4x" className="mb-3" />
                    <h3 className="h4 mb-2">Lorem ipsum dolor sit amet</h3>
                    <p className="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus, turpis sed rhoncus facilisis, justo magna pharetra velit, accumsan eleifend ex turpis ac tellus. </p>
                    <div className="mt-2">
                      <Button variant="outline-danger btn-style">Learn More</Button>{' '}
                    </div>
                  </div>
                </Col>
                <Col lg={3} md={6} className="text-center">
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
    </Col>
    </Row>
    <Row>
      <Col>
        <Pricing />
      </Col>
    </Row>
    <Row>
      <Col>
        <section className="page-section justify-content-center" id="sign-up">
          <Container fluid>
            <Fade right>
              <h2 className="text-center header m-4">Sign up Today!</h2>
              <hr className="divider"></hr>
            </Fade>
            <Fade bottom>
              <div className="mt-5 text-center">
                <Button variant="danger btn-style" size="lg">Sign Up</Button>{' '}
              </div>
            </Fade>
          </Container>
        </section>
      </Col>
    </Row>
    <Row>
      <Col>
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
      </Col>
    </Row>
  </Layout>
)

export default IndexPage;
