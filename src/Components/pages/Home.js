// src/Components/pages/Home.js

import React, { useState, useEffect } from 'react';
// The only change is on the next line.
// We changed './PetCard' to '../PetCard' to go up one directory.
import PetCard from '../PetCard';
import { getPets } from '../../Utils/petfinderAPI';

function Home() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPets()
      .then(data => {
        // A small check to make sure data exists before setting it
        if (data) {
          setPets(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch pets', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading pets...</p>;

  // A check in case no pets are returned
  if (!pets || pets.length === 0) {
    return <p>No pets found. Check the console for API errors.</p>
  }

  return (
    // We can use Bootstrap's <Container> component for nice padding and centering
    <div className="container">
      <div className="row">
        {pets.map(pet => (
          // Use Bootstrap's column classes for a responsive grid
          <div key={pet.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <PetCard pet={pet} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;