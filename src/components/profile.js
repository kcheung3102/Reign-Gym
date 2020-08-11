import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, Image } from 'react-bootstrap';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <Card>
          <Card.Header>Account Info</Card.Header>
          <Card.Body>
            <Image src={user.picture} alt={user.name} roundedCircle/>
            <Card.Text>
              Username: {user.nickname}
            </Card.Text>
            <Card.Text>
              Email: {user.email}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  );
};

export default Profile;