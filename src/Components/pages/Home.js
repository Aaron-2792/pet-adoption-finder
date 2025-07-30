// src/Components/pages/Home.js

import React from 'react';
import PetCard from '../PetCard';
import PaginationControls from '../PaginationControls';
// need to import the Spinner component from react-bootstrap
import { Spinner } from 'react-bootstrap';

// Home now receives all the pagination props from App js
function Home({ pets, loading, currentPage, totalPages, onPageChange }) {

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
      <h1>Pet Adoption Finder</h1>

      {loading ? (
        // If loading is true we now show our new spinner component
        <LoadingSpinner />
      ) : (
        // We wrap content in a React Fragment <> to return multiple elements
        <>
          <div className="row">
            {pets.length > 0 ? (
              pets.map(pet => (
                <div key={pet.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <PetCard pet={pet} />
                </div>
              ))
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