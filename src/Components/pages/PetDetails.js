// src/Components/pages/PetDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPetById } from '../../Utils/petfinderAPI';
import { Container, Row, Col, Badge, Button, Carousel, Card, Spinner } from 'react-bootstrap';

// The component now needs to receive the favorites list and the toggle function
function PetDetails({ favorites, onFavoriteClick }) {
  // state for the pet data
  const [pet, setPet] = useState(null);
  // state for loading and error UI
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useParams hook reads the pet's ID from the URL
  const { id } = useParams();

  // useEffect hook fetches the pet data when the component loads
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

  // A simple spinner component for a better loading experience
  const LoadingSpinner = () => (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );

  // Render logic for loading, error, or no data states
  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <Container><p className="text-danger text-center mt-5">{error}</p></Container>;
  }

  if (!pet) {
    return <Container><p className="text-center mt-5">No pet data found.</p></Container>;
  }
  
  // This variable checks if the pet has photos to display
  const hasPhotos = pet.photos && pet.photos.length > 0;
  // This variable checks if the current pet is in the favorites list
  const isFavorite = favorites.some(fav => fav.id === pet.id);

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xxl={10}>
          <Row>
            {/* Left Column for Images */}
            <Col lg={7}>
              {hasPhotos ? (
                <Carousel>
                  {pet.photos.map((photo) => (
                    <Carousel.Item key={photo.full}>
                      <img
                        className="d-block w-100 details-page-img"
                        src={photo.full}
                        alt={pet.name}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              ) : (
                <div 
                  className="d-flex align-items-center justify-content-center details-page-placeholder"
                >
                  No Image Available
                </div>
              )}
            </Col>

            {/* Right Column for Details */}
            <Col lg={5}>
              <Card>
                <Card.Header as="div" className="d-flex justify-content-between align-items-center">
                  <h2 className="mb-0">{pet.name}</h2>
                  {/* new favorite button */}
                  <Button 
                    variant={isFavorite ? 'danger' : 'outline-danger'}
                    onClick={() => onFavoriteClick(pet)}
                    style={{ 
                      borderRadius: '50%', 
                      width: '40px', 
                      height: '40px',
                      // center the heart icon
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 0
                    }}
                  >
                    ❤️
                  </Button>
                </Card.Header>
                <Card.Body>
                  <Card.Subtitle className="mb-3 text-muted text-center">
                    {pet.breeds.primary}
                  </Card.Subtitle>

                  {/* Displaying tags like "Friendly", "Playful" as badges */}
                  <div className="text-center mb-3">
                    {pet.tags.map(tag => (
                      <Badge pill bg="info" className="me-1" key={tag}>{tag}</Badge>
                    ))}
                  </div>

                  {/* Using a grid for key attributes to make them easy to scan */}
                  <Row className="text-center mb-3">
                    <Col><strong>Age</strong><br/>{pet.age}</Col>
                    <Col><strong>Size</strong><br/>{pet.size}</Col>
                    <Col><strong>Gender</strong><br/>{pet.gender}</Col>
                  </Row>
                  
                  {pet.description && (
                    <>
                      <hr />
                      <h5>About Me</h5>
                      <div dangerouslySetInnerHTML={{ __html: pet.description }} />
                    </>
                  )}
                </Card.Body>
                <Card.Footer>
                  <Button href={pet.url} target="_blank" rel="noopener noreferrer" className="w-100" size="lg">
                    Adopt Me on Petfinder
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default PetDetails;
