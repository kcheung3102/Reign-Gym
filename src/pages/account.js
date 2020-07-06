import React from 'react';
import Layout from '../components/layout'
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';


const account = () => {
    
    return (
        <Layout>
            <p>Your Account Info</p>
        </Layout>
    )
}

export default withAuthenticationRequired(account, {
    onRedirecting: () => <div>Redirecting you to login page</div>,
});
