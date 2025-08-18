// src/Components/pages/Home.js

import React from 'react';
import PetCard from '../PetCard';
import PaginationControls from '../PaginationControls';
// need to import the Spinner component from react-bootstrap
import { Spinner } from 'react-bootstrap';

// Home now receives favorites and onFavoriteClick from App js
function Home({ pets, loading, currentPage, totalPages, onPageChange, favorites, onFavoriteClick }) {

  // lifted up to the App js component to create a global search

  // small component specifically forloading spinner
  // centers the spinner nicely on the page
  const LoadingSpinner = () => (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );

  return (
    <div className="container">
      {/* use Bootstrap's flexbox utilities to align the icon and title */}
      <div className="d-flex align-items-center">
        {/* image from public folder */}
        <img 
          src={process.env.PUBLIC_URL + '/paw-icon.png'} 
          alt="Paw print icon" 
          style={{ width: '40px', height: '40px', marginRight: '15px' }}
        />
        <h1>Pet Adoption Finder</h1>
      </div>
      {/*  decorative line */}
      <hr style={{ 
        height: '3px', 
        backgroundColor: '#2c3e50', 
        border: 'none', 
        opacity: 1, 
        marginTop: '0.5rem' 
      }}/>

      {loading ? (
        // If loading is true now show our new spinner component
        <LoadingSpinner />
      ) : (
        // wrap content in a React Fragment <> to return multiple elements
        <>
          <div className="row mt-4">
            {pets.length > 0 ? (
              pets.map(pet => {
                // For each pet we check if its id is in our favorites array
                const isFavorited = favorites.some(fav => fav.id === pet.id);
                
                return (
                  <div key={pet.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    {/* pass the onFavoriteClick function and the isFavorited status down to the card */}
                    <PetCard 
                      pet={pet} 
                      onFavoriteClick={onFavoriteClick}
                      isFavorite={isFavorited}
                    />
                  </div>
                );
              })
            ) : (
              <p>No pets found for your search Try another name</p>
            )}
          </div>

          <PaginationControls 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </>
      )}
    </div>
  );
}

export default Home;
