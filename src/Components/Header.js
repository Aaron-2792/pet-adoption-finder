// src/Components/Header.js

import React, { useState, useEffect } from 'react';
// We need to import Badge for our new count display
import { Navbar, Nav, Form, FormControl, Button, Container, Dropdown, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAnimalTypes } from '../Utils/petfinderAPI';

// The Header now receives onSearchSubmit and favoriteCount as props
function Header({ onSearchSubmit, favoriteCount }) {
  // state for the text input
  const [searchTerm, setSearchTerm] = useState('');
  // state for the animal type dropdown
  const [selectedType, setSelectedType] = useState('');
  // state for the location input
  const [location, setLocation] = useState('');
  // state for the size dropdown
  const [selectedSize, setSelectedSize] = useState('');
  // new state for the age dropdown
  const [selectedAge, setSelectedAge] = useState('');
  // state to hold the list of all animal types from the API
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
    // now pass an object with all search filters to the parent
    onSearchSubmit({ 
      name: searchTerm, 
      type: selectedType, 
      location: location,
      size: selectedSize,
      age: selectedAge
    });
  };

  // new function to clear the search results
  const handleResetSearch = () => {
    // pass an empty object to clear all search parameters
    onSearchSubmit({});
    setSearchTerm('');
    setSelectedType('');
    setLocation('');
    setSelectedSize('');
    setSelectedAge(''); // Also clear the age dropdown
  };

  return (
    <Navbar variant="dark" expand="lg" className="mb-4 navbar-custom">
      <Container>
        
        <Navbar.Brand as={Link} to="/" onClick={handleResetSearch}>Pet Adoption</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link as={Link} to="/" onClick={handleResetSearch}>Home</Nav.Link>
            <Nav.Link as={Link} to="/favorites">
              Favorites 
              {/* only show the badge if there is at least one favorite */}
              {favoriteCount > 0 && (
                <Badge pill bg="primary" className="ms-1">
                  {favoriteCount}
                </Badge>
              )}
            </Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            
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

            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                More Filters
              </Dropdown.Toggle>

              <Dropdown.Menu className="p-2" style={{ minWidth: '250px' }} autoClose="outside">
                <Form.Label>Animal Type</Form.Label>
                <Form.Select
                  aria-label="Select animal type"
                  className="mb-2"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="">Any Type</option>
                  {animalTypes.map(type => (
                    <option key={type.name} value={type.name}>{type.name}</option>
                  ))}
                </Form.Select>

                <Form.Label>Size</Form.Label>
                <Form.Select
                  aria-label="Select pet size"
                  className="mb-2"
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                >
                  <option value="">Any Size</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                  <option value="xlarge">X-Large</option>
                </Form.Select>

                <Form.Label>Age</Form.Label>
                <Form.Select
                  aria-label="Select pet age"
                  value={selectedAge}
                  onChange={(e) => setSelectedAge(e.target.value)}
                >
                  <option value="">Any Age</option>
                  <option value="baby">Baby</option>
                  <option value="young">Young</option>
                  <option value="adult">Adult</option>
                  <option value="senior">Senior</option>
                </Form.Select>
              </Dropdown.Menu>
            </Dropdown>

            <Button variant="primary" type="submit" className="ms-2">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
