// src/Components/pages/Favorites.js

import React from 'react';
import PetCard from '../PetCard';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// The Favorites page receives the list of favorite pets and the click handler from App js
function Favorites({ favorites, onFavoriteClick }) {

  //  improved component for empty state
  const EmptyFavorites = () => (
    <div className="text-center p-5 my-5 bg-light rounded-3">
      <h2>No Favorites Yet!</h2>
      <p className="lead text-muted">
        You haven't saved any pets. Click the heart on any pet's card to add them to your list.
      </p>
      <Button as={Link} to="/" variant="primary" size="lg" className="mt-3">
        Find a Pet
      </Button>
    </div>
  );

  return (
    <Container className="mt-4">
      <h1>Your Favorite Pets</h1>
      <hr />
      
      {/*check if the favorites array is empty */}
      {favorites.length > 0 ? (
        // If not empty display the grid of pet cards
        <Row>
          {favorites.map(pet => {
            return (
              <Col key={pet.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <PetCard 
                  pet={pet} 
                  onFavoriteClick={onFavoriteClick}
                  isFavorite={true}
                />
              </Col>
            );
          })}
        </Row>
      ) : (
        // If the favorites array is empty display new component
        <EmptyFavorites />
      )}
    </Container>
  );
}

export default Favorites;
