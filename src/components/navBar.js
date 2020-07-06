import React from "react"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar, Nav, Container, Button } from "react-bootstrap"

const UserNav = () => {
  const { isLoading, isAuthenticated, logout, loginWithRedirect } = useAuth0();
  
  if(isLoading) return null;
  
  if(isAuthenticated) return (
      <Button variant="outline-danger btn-style" onClick={() => logout() }>Log out</Button>
  )

  return (
    <Button onClick={loginWithRedirect} variant="outline-danger btn-style">Login</Button>
  )
}

const CustomNavbar = ({ pageInfo }) => {
    

  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        <Container>
        <Fade left>
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span" className="logo-style">Reign Gym</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav navbar-light" />
        <UserNav />
          </Fade>
        <Navbar.Collapse id="basic-navbar-nav" className="text-center">
          <Nav className="ml-auto" activeKey={pageInfo && pageInfo.pageName}>
          <Fade>
          <Link to="/" className="link-no-style  nav-link">
                <Nav.Link as="span" eventKey="home" className="nav-item">
                  Home
                </Nav.Link>
              </Link>
              <Link to="/about" className="link-no-style  nav-link">
                <Nav.Link as="span" eventKey="about" className="nav-item">
                  About
                </Nav.Link>
              </Link>
              <Link to="/account" className="link-no-style  nav-link">
                <Nav.Link as="span" eventKey="account" className="nav-item">
                  Account
                </Nav.Link>
              </Link>
              </Fade>
          </Nav>
        </Navbar.Collapse>
        </Container>       
      </Navbar>
    </>
  )
}

export default CustomNavbar
