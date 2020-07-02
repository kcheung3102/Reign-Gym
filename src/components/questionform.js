import React from 'react';
import { Form, Button, Col, Row} from 'react-bootstrap'

const contact = () => {
    return (
            <Form>
                <Row>
                    <Col xs="auto">
                        <Form.Control placeholder="First name" />
                    </Col>
                    <Col xs="auto">
                        <Form.Control placeholder="Email" />
                    </Col>
                </Row>
                <Row className="justify-content-center mt-3" xs="auto">
                    <Col>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows="4" placeholder="Message" />
                        </Form.Group>
                        <Button variant="danger btn-style" type="submit">
                        Send
                        </Button>
                    </Col>
                </Row>
            </Form>
            
        
    );
}

export default contact;
