// src/Components/pages/About.js

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center text-center mb-4">
        <Col md={8}>
          <h1 className="display-4">About Pet Adoption Finder</h1>
          <p className="lead text-muted">
            Connecting loving homes with pets in need.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title as="h3" className="mb-3">Our Mission</Card.Title>
              <Card.Text>
                In the U.S. alone, millions of wonderful companion animals enter shelters every year, waiting for a second chance. We believe that this can bridge the gap between these pets and their future families. Our mission is to provide a clean, modern, and easy-to-use platform that simplifies the adoption process, making it easier than ever to find your perfect companion.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title as="h3" className="mb-3">How It Works</Card.Title>
              <Card.Text>
                This application is powered by the official Petfinder API, providing you with live, up-to-date listings from thousands of shelters across the country. Simply use our advanced search and filtering tools to narrow down your options, click on a pet to view their details, and use the link provided to connect directly with the shelter for adoption.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center text-center mt-4">
        <Col md={8}>
          <h3>Core Technologies</h3>
          <p className="text-muted">
            This project was built as a capstone to demonstrate a full range of modern web development skills.
          </p>
          <ul className="list-inline">
            <li className="list-inline-item"><span className="badge bg-primary p-2 m-1">React</span></li>
            <li className="list-inline-item"><span className="badge bg-primary p-2 m-1">React Router</span></li>
            <li className="list-inline-item"><span className="badge bg-primary p-2 m-1">React-Bootstrap</span></li>
            <li className="list-inline-item"><span className="badge bg-primary p-2 m-1">Petfinder API</span></li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
