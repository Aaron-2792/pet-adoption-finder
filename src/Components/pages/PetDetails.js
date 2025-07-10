// src/Components/pages/PetDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPetById } from '../../Utils/petfinderAPI';
import { Container, Row, Col, Card, Badge, Button, Carousel } from 'react-bootstrap';

function PetDetails() {
  // 'pet' will hold the single pets data object once its fetched
  const [pet, setPet] = useState(null);
  // 'loading' and 'error' are used to manage the UI state during the API call
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useParams hook from React Router reads the URL and gives us the 'id' parameter
  // from the route defined in App js /pet/:id
  const { id } = useParams();

  // useEffect hook runs once when the component first loads to fetch the pet data
  // will also rerun if the 'id' in the URL ever changes
  useEffect(() => {
    const fetchPet = async () => {
      try {
        setLoading(true);
        const petData = await getPetById(id);
        setPet(petData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch pet details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPet();
  }, [id]);

  // if statements handle the display of the component while data is loading or if an error occurs
  if (loading) {
    return <Container><p>Loading pet details...</p></Container>;
  }

  if (error) {
    return <Container><p className="text-danger">{error}</p></Container>;
  }

  if (!pet) {
    return <Container><p>No pet data found.</p></Container>;
  }
  
  // This variable checks if the pet has photos available to display
  const hasPhotos = pet.photos && pet.photos.length > 0;

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          {hasPhotos ? (
            <Carousel>
              {pet.photos.map((photo) => (
                <Carousel.Item key={photo.full}>
                  <img
                    className="d-block w-100"
                    src={photo.full}
                    alt={pet.name}
                    style={{ height: '500px', objectFit: 'cover', borderRadius: '8px' }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            // more reliable placeholder
            //  div with styling to create a gray box to reliably relay that no image is available
            <div 
              className="d-flex align-items-center justify-content-center"
              style={{ 
                height: '500px', 
                backgroundColor: '#f0f0f0', 
                borderRadius: '8px',
                color: '#6c757d',
                fontSize: '1.5rem'
              }}
            >
              No Image Available
            </div>
          )}
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