import React from "react"
import { Row, Col, Container } from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroAbout from '../components/headerAbout';
import Img from "gatsby-image"
import { graphql } from "gatsby";
import ValueCard from '../components/transparentCard';



const AboutPage = ({data}) => {
  return (
  <Layout pageInfo={{ pageName: "about" }}>
    <SEO title="About" />
    <Row>
      <Col>
          <HeroAbout />
      </Col>
    </Row>
    <Row>
      <Col>
        <section className="section-padding bg-grey justify-content-center" id="sign-up">
            <Container fluid>
            <h2 className="text-center header mt-3">Lorem ipsum dolor</h2>
            <div className="m-4 text-center">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus, turpis sed rhoncus facilisis, justo magna pharetra velit, accumsan eleifend ex turpis ac tellus.</p>
            </div>
            <hr className="divider"></hr>
            </Container>
        </section>
      </Col>
    </Row>
    <Row>
      <Col>
        <section className="page-section values-background justify-content-center align-items-center">
        <Container fluid>
              <h1 className="header text-white text-center">Values</h1>
            <Container fluid>
              <Row className="justify-content-center">
                <Col md={3} lg={2}  className="mb-3">
                  <ValueCard />
                </Col>
                <Col md={3} lg={2}  className="mb-3">
                  <ValueCard />
                </Col>
                <Col md={3} lg={2} className="mb-3">
                  <ValueCard />
                </Col>
                <Col md={3} lg={2} className="mb-3">
                  <ValueCard />
                </Col>
                <Col md={3} lg={2} className="mb-3">
                  <ValueCard />
                </Col>
              </Row>
            </Container>
          </Container>
        </section>
      </Col>
    </Row>
    <Row>
      <Col>
      <section className="justify-center m-3">
              <Row>
                  <Col lg={4} md={5} xs={12}>
                    <Container fluid className="p-3 mt-3">
                    <h1 className="header text-center mt-5">Stronger Together</h1>
                    <hr className="divider"></hr>
                    <p className="m-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus, turpis sed rhoncus facilisis, justo magna pharetra velit, accumsan eleifend ex turpis ac tellus</p>
                    <p className="m-3 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus, turpis sed rhoncus facilisis, justo magna pharetra velit, accumsan eleifend ex turpis ac tellus</p>
                    </Container>
                  </Col>
                  <Col lg={6} md={4}>
                  <Img
                    
                    fluid={data.image.childImageSharp.fluid}
                    alt="guy deadlifting"
                  />
                  </Col>
                  <Col>
                      <Img 
                        className="mb-2"
                        fluid={data.weightImage.childImageSharp.fluid} 
                        alt="weights" />
                      <Img 
                        fluid={data.pullupImage.childImageSharp.fluid} 
                        alt="guy doing pull ups" />
                  </Col>
              </Row>
              </section>
      </Col>
    </Row>
  </Layout>
  )
}

export const query = graphql`
  query {
    image: file(relativePath: { eq: "about-image.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 930, maxHeight: 635, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    weightImage: file(relativePath: {eq: "pricing-image1.jpg"}) {
      id
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 275, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    pullupImage: file(relativePath: {eq: "pricing-image2.jpg"}) {
      id
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 575, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

  }
`

export default AboutPage;



