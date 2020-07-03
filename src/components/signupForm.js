import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const signupForm = () => {
    return (
            <Card className="align-items-center card-form">
                <h1 className="header text-center mt-3">Sign Up</h1>
                <Form className="py-2">
                    <Form.Row className="justify-content-center m-3">
                            <Form.Group controlId="formGroupFirstName">
                                <Form.Control placeholder="First Name" className="input-style" />
                            </Form.Group>
                    </Form.Row>
                    <Form.Row className="justify-content-center mb-3">
                            <Form.Group controlId="formGroupLastName" >
                                <Form.Control placeholder="Last Name" className="input-style" />
                            </Form.Group>
                    </Form.Row>
                    <Form.Row className="justify-content-center mb-3">
                            <Form.Group controlId="formGroupEmail" >
                                <Form.Control type="email" placeholder="Enter Email" className="input-style" />
                            </Form.Group>
                    </Form.Row>
                    <Form.Row className="justify-content-center mb-3">
                        <Form.Group controlId="formGroupPassword">
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Password"
                                        className="input-style"
                                        />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="justify-content-center mb-3">
                        <Form.Group controlId="formGroupConfirmPassword">
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Confirm Password"
                                        className="input-style"
                                        />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="m-3">
                            <Button className="btn-style" variant="danger" type="submit" block size="md">
                                Register
                            </Button>
                    </Form.Row>
                    <Form.Row className="m-3">
                        <Button className="btn-style" variant="danger" block size="md">
                            Sign In
                        </Button>
                    </Form.Row>
                </Form>
                </Card>
    );
}

export default signupForm;
