import React from 'react';
import Layout from '../components/layout'
import Profile from '../components/profile'
import { withAuthenticationRequired } from '@auth0/auth0-react';


const account = () => {
    
    return (
        <Layout>
            <Container>
                <Profile />
            </Container>
        </Layout>
    )
}

export default withAuthenticationRequired(account, {
    onRedirecting: () => <div>Redirecting you to login page</div>,
});
