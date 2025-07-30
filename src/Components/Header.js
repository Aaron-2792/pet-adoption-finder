// src/Components/Header.js

import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAnimalTypes } from '../Utils/petfinderAPI';

// The Header now receives the onSearchSubmit function as a prop from App js
function Header({ onSearchSubmit }) {
  // state for the text input
  const [searchTerm, setSearchTerm] = useState('');
  // new state for the animal type dropdown
  const [selectedType, setSelectedType] = useState('');
  // new state for the location input
  const [location, setLocation] = useState('');
  // new state to hold the list of all animal types from the API
  const [animalTypes, setAnimalTypes] = useState([]);

  // useEffect to fetch animal types when the component first loads
  useEffect(() => {
    const fetchAnimalTypes = async () => {
      try {
        const types = await getAnimalTypes();
        setAnimalTypes(types);
      } catch (error) {
        console.error("Failed to fetch animal types", error);
      }
    };

    fetchAnimalTypes();
  }, []); // The empty array means this effect runs only once

  // This function runs when the form is submitted
  const handleSubmit = (event) => {
    // prevent the page from reloading
    event.preventDefault();
    // We now pass an object with name type and location to the parent
    onSearchSubmit({ name: searchTerm, type: selectedType, location: location });
  };

  // new function to clear the search results
  const handleResetSearch = () => {
    // pass an empty object to clear all search parameters
    onSearchSubmit({});
    setSearchTerm('');
    setSelectedType('');
    setLocation(''); // Also clear the location input
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
            <Form.Select
              aria-label="Select animal type"
              className="me-2"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">Any Type</option>
              {animalTypes.map(type => (
                <option key={type.name} value={type.name}>{type.name}</option>
              ))}
            </Form.Select>

            
            <FormControl
              type="search"
              placeholder="City, State or Zip"
              className="me-2"
              aria-label="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <FormControl
              type="search"
              placeholder="Search by name..."
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