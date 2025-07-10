// src/Components/PetCard.js

import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PetCard({ pet }) {
  // This variable checks if the pet has photos available to display
  const hasPhotos = pet.photos && pet.photos.length > 0;
  // We get the URL for the first photo if it exists
  const imageUrl = hasPhotos ? pet.photos[0].medium : null;

  return (
    // This turns the entire card into a link that navigates to the pets unique details page
    <Link to={`/pet/${pet.id}`} className="text-decoration-none">
      <Card className="h-100 shadow-sm">
        {hasPhotos ? (
          // If photos exist render image using new custom class
          <Card.Img 
            variant="top" 
            src={imageUrl} 
            alt={pet.name} 
            className="pet-card-img"
          />
        ) : (
          // If no photos exist render placeholder using the same custom class
          // Bootstrap utility classes for centering
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
        <Card.Body>
          <Card.Title>{pet.name}</Card.Title>
          <Card.Text className="text-muted">
            {pet.breeds.primary}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default PetCard;