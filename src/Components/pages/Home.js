// src/Components/pages/Home.js

import React from 'react';
import PetCard from '../PetCard';
//imported new PaginationControls component
import PaginationControls from '../PaginationControls';

// Home now receives all the pagination props from App js
function Home({ pets, loading, currentPage, totalPages, onPageChange }) {

  // lifted up to the App js component to create a global search

  return (
    <div className="container">
      <h1>Pet Adoption Finder</h1>

      {loading ? (
        <p>Loading pets...</p>
      ) : (
        // wrap content in a React Fragment <> to return multiple elements
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

          {/* render the pagination controls at the bottom of the page */}
          {/* It receives all the necessary props to function correctly */}
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