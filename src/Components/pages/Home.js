// src/Components/pages/Home.js

import React from 'react';
import PetCard from '../PetCard';

// Home now receives the pets and loading state as props from App js
function Home({ pets, loading }) {

  // lifted up to the App js component to create a global search

  return (
    <div className="container">
      <h1>Pet Adoption Finder</h1>

      {loading ? (
        <p>Loading pets...</p>
      ) : (
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
      )}
    </div>
  );
}

export default Home;