
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Navbar from "./navBar"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container fluid className="main">
          <Navbar pageInfo={pageInfo} />
          <Row noGutters>
            <Col>
            <main>{children}</main>
            </Col>
          </Row>
        </Container>
        <Container fluid className="footer">
          <Row noGutters>
            <Col className="footer-col">
              <footer>
                  <span>
                  © {new Date().getFullYear()}, Built and Designed by
                  {` `}
                  <a href="https://www.kcheungcodes.com">Kevin Cheung</a>
                </span> 
              </footer>
            </Col>
          </Row>
        </Container>
      </>
    )}
  />
)

export default Layout
