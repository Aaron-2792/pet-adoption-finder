import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
// link is a component from React Router that lets us navigate without a page refresh
import { Link } from 'react-router-dom';

function Header() {
  // to make React Bootstrap components work with React Router use the 'as' prop.
  // tell the <Navbar.Brand> or <Nav.Link> component to render "as" a <Link> component
  // and then we can pass the "to" prop to specify the destination URL
  
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">Pet Adoption</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            
            // future about page
            // <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search pets"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

