import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PetCard({ pet }) {
  // sets up a fallback URL to a service that generates placeholder images
  const placeholderImage = 'https://via.placeholder.com/300x300.png?text=No+Image';
  // ternary operator
  const imageUrl = pet.photos && pet.photos.length > 0 ? pet.photos[0].medium : placeholderImage;

  return (
    // turns the entire card into a link that navigates to the pets unique details page
    <Link to={`/pet/${pet.id}`} className="text-decoration-none">
      <Card className="h-100 shadow-sm">
        <Card.Img 
          variant="top" 
          src={imageUrl} 
          alt={pet.name} 
          style={{ height: '200px', objectFit: 'cover' }} 
        />
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