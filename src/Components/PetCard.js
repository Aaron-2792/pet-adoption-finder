// src/Components/PetCard.js

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// We now accept onFavoriteClick and isFavorite as props
function PetCard({ pet, onFavoriteClick, isFavorite }) {
  // This variable checks if the pet has photos available to display
  const hasPhotos = pet.photos && pet.photos.length > 0;
  // We get the URL for the first photo if it exists
  const imageUrl = hasPhotos ? pet.photos[0].medium : null;

  // This function handles the click on the heart button
  const handleFavoriteClick = (event) => {
    
    //stop the click from triggering the Link navigation
    event.preventDefault();
    event.stopPropagation();
    // This calls the function that will be passed down from App.js
    onFavoriteClick(pet);
  };

  return (
    // The Link still wraps the card for navigation
    <Link to={`/pet/${pet.id}`} className="text-decoration-none">
      <Card className="h-100 shadow-sm" style={{ position: 'relative' }}>
        {/* new favorite button */}
        <Button 
          variant={isFavorite ? 'danger' : 'light'} 
          onClick={handleFavoriteClick}
          style={{ 
            position: 'absolute', 
            top: '10px', 
            right: '10px',
            zIndex: 2, // Ensures the button is on top of the image
            borderRadius: '50%'
          }}
        >
          {/* A simple heart icon using text/emoji */}
          ❤️
        </Button>

        {hasPhotos ? (
          <Card.Img 
            variant="top" 
            src={imageUrl} 
            alt={pet.name} 
            className="pet-card-img"
          />
        ) : (
          <div 
            className="pet-card-img d-flex align-items-center justify-content-center"
            style={{ 
              backgroundColor: '#f0f0f0', 
              color: '#6c757d'
            }}
          >
            No Image
          </div>
        )}
        <Card.Body className="d-flex flex-column">
          <Card.Title>{pet.name}</Card.Title>
          <Card.Text className="text-muted">
            {pet.breeds.primary}
          </Card.Text>
          {/* new section for additional details */}
          <div className="mt-auto">
            <small className="text-muted">{pet.age} • {pet.contact.address.city}, {pet.contact.address.state}</small>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default PetCard;
