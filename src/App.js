// src/App.js

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/pages/Home';
import PetDetails from './Components/pages/PetDetails';
import { getPets } from './Utils/petfinderAPI';

function App() {
  // The state for our pets list and loading status now lives here in App js
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  // This state will hold the search term submitted from the header
  const [searchQuery, setSearchQuery] = useState('');

  
  // runs when the component loads or when the searchQuery changes
  useEffect(() => {
    const fetchPets = async () => {
      setLoading(true);
      try {
        const query = searchQuery ? { name: searchQuery } : {};
        const data = await getPets(query);
        setPets(data || []);
      } catch (err) {
        console.error('Failed to fetch pets', err);
      }
      setLoading(false);
    };

    fetchPets();
  }, [searchQuery]);

  // function will be passed down to the Header
  // Header will call this function when the user submits a search
  const handleSearch = (term) => {
    setSearchQuery(term);
  };

  // The appStyles object helps make the footer stick to the bottom of the page
  const appStyles = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  };

  // the return we pass the handleSearch function down to the Header as a prop
  // also pass the pets and loading state down to the Home page as props
  return (
    <div style={appStyles}>
      <Header onSearchSubmit={handleSearch} />

      <main className="py-3">
        <Routes>
          <Route path="/" element={<Home pets={pets} loading={loading} />} />
          <Route path="/pet/:id" element={<PetDetails />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;