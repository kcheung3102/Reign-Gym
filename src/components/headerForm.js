import React from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap'
const headerForm = () => {
    return (
    <header className="masthead">
        <Container>
            <Row className="align-items-center justify-content-center">
              {/* <div className="col-lg-10 align-self-end"> */}
              <Col lg={10} className="align-self-end">
                <h1 className="header-style">Sign Up</h1>
                <hr className="divider my-5" id="header-divider"/>
              </Col>
            </Row>
           
        </Container>
    </header>
    );
}

export default headerForm;
