import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Button} from 'react-bootstrap';

const Profile = () => (
  <Container className="d-flex flex-column justify-content-center align-items-center py-5">
    <h1 className="mb-3">My Profile</h1>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.cinejosh.com/newsimg/newsmainimg/dulquer-made-startling-revelations-about-his-dad-and-wife_b_2707230335.jpg" />
      <Card.Body>
        <Card.Title>Dulquer Salmaan</Card.Title>
        <Card.Subtitle className="mb-3">Honolulu, HI</Card.Subtitle>
        <Card.Text>
          Dulquer Salmaan is an Indian actor, playback singer and film producer who predominantly works in Malayalam films in addition to Tamil, Telugu and Hindi films.
        </Card.Text>
        <Button variant="outline-primary" href="#"> Edit Profile </Button>
      </Card.Body>
    </Card>
  </Container>
);

export default Profile;
