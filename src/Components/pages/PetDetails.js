// src/Components/pages/PetDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPetById } from '../../Utils/petfinderAPI';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

function PetDetails() {
  // 'pet' will hold the single pet's data object once it's fetched.
  const [pet, setPet] = useState(null);
  // 'loading' and 'error' are used to manage the UI state during the API call.
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // The useParams hook from React Router reads the URL and gives us the 'id' parameter.
  // This comes from the route we defined in App.js: /pet/:id
  const { id } = useParams();

  // The useEffect hook runs once when the component first loads to fetch the pet data.
  // It will also re-run if the 'id' in the URL ever changes.
  useEffect(() => {
    const fetchPet = async () => {
      try {
        setLoading(true);
        const petData = await getPetById(id);
        setPet(petData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch pet details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPet();
  }, [id]);

  // The following 'if' statements handle the display of the component
  // while data is loading or if an error occurs.
  if (loading) {
    return <Container><p>Loading pet details...</p></Container>;
  }

  if (error) {
    return <Container><p className="text-danger">{error}</p></Container>;
  }

  if (!pet) {
    return <Container><p>No pet data found.</p></Container>;
  }
  
  // The 'dangerouslySetInnerHTML' prop is React's way of rendering raw HTML.
  // It's needed here because the pet description from the API includes HTML tags.
  // We only use this when we trust the source of the HTML content.

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img 
              variant="top" 
              src={pet.primary_photo_cropped?.full || 'https://via.placeholder.com/600x600?text=No+Image'}
              alt={pet.name}
            />
          </Card>
        </Col>
        <Col md={6}>
          <h1>{pet.name}</h1>
          <p className="text-muted">{pet.breeds.primary}</p>
          <hr />
          <h5>Details</h5>
          <ul>
            <li><strong>Age:</strong> {pet.age}</li>
            <li><strong>Gender:</strong> {pet.gender}</li>
            <li><strong>Size:</strong> {pet.size}</li>
            <li><strong>Status:</strong> <Badge bg="success">{pet.status}</Badge></li>
          </ul>
          
          {pet.description && (
            <>
              <h5>About Me</h5>
              <div dangerouslySetInnerHTML={{ __html: pet.description }} />
            </>
          )}

          <Button href={pet.url} target="_blank" rel="noopener noreferrer" className="mt-3">
            Adopt Me on Petfinder
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default PetDetails;
