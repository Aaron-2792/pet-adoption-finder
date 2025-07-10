// src/Components/pages/About.js

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title as="h1" className="text-center mb-4">About This Project</Card.Title>
              <Card.Text>
                This Pet Adoption Finder is a capstone project built using modern web technologies the goal is to create a seamless and intuitive experience for users looking to find their next furry friend
              </Card.Text>
              <hr />
              <h5 className="mt-4">Technologies Used:</h5>
              <ul>
                <li><strong>React:</strong> A powerful JavaScript library for building user interfaces</li>
                <li><strong>React Router:</strong> For handling client side navigation between pages</li>
                <li><strong>React-Bootstrap:</strong> A library of pre-built components for a professional and responsive design</li>
                <li><strong>Petfinder API:</strong> The official API used to source live data of adoptable pets</li>
              </ul>
              <Card.Text className="mt-4">
                This project demonstrates key concepts in frontend development including component based architecture, API integration, and client side routing
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;