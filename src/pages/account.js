import React from 'react';
import Layout from '../components/layout'
import Profile from '../components/profile'
import { withAuthenticationRequired } from '@auth0/auth0-react';


const account = () => {
    
    return (
        <Layout>
            <h1>Your Account Info</h1>
            <Profile />
        </Layout>
    )
}

export default withAuthenticationRequired(account, {
    onRedirecting: () => <div>Redirecting you to login page</div>,
});
