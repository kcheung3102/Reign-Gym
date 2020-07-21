import React from "react"
import { Row, Col, Container, Button } from "react-bootstrap"
import Pricing from '../components/pricing';
import Fade from 'react-reveal/Fade';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/hero'
import OurClassesRow from '../components/ourClassesRow';
import ContactSection from '../components/contactSection';

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
          <OurClassesRow />
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
         <ContactSection />
      </Col>
    </Row>
  </Layout>
)

export default IndexPage;
