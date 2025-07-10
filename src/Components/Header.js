// src/Components/Header.js

import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// The Header now receives the onSearchSubmit function as a prop from App js
function Header({ onSearchSubmit }) {
  // This state is local to the Header it just tracks what the user is typing
  const [searchTerm, setSearchTerm] = useState('');

  // This function runs when the form is submitted
  const handleSubmit = (event) => {
    // prevent the page from reloading
    event.preventDefault();
    // Call the function that was passed down from App js with the search term
    onSearchSubmit(searchTerm);
  };

  // new function to clear the search results
  // calls the same function from App js but passes an empty string
  const handleResetSearch = () => {
    onSearchSubmit('');
    setSearchTerm(''); // clears the text in the search input box
  };

  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        
        <Navbar.Brand as={Link} to="/" onClick={handleResetSearch}>Pet Adoption</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link as={Link} to="/" onClick={handleResetSearch}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <FormControl
              type="search"
              placeholder="Search pets"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;