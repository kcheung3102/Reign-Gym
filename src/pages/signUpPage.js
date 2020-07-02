import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import SignUpForm from '../components/signupForm';
import { Container } from 'react-bootstrap';

const signUpPage = () => {
    return (
        <Layout pageInfo={{ pageName: "signup" }}>
        <SEO  title="Sign Up"/>
        <Container fluid className="background-signup page-section">
            <SignUpForm />
        </Container>
        </Layout>
    );
}

export default signUpPage;
