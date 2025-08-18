// src/App.js

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/pages/Home';
import PetDetails from './Components/pages/PetDetails';
import About from './Components/pages/About';
import Favorites from './Components/pages/Favorites';
// We need to import our new BackToTopButton component
import BackToTopButton from './Components/BackToTopButton';
import { getPets } from './Utils/petfinderAPI';

function App() {
  // state for our pets list and loading status
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // searchQuery is now an object to hold multiple filter criteria
  const [searchQuery, setSearchQuery] = useState({});
  
  // state for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // new state for favorites we initialize it by reading from localStorage
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('petFavorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // this useEffect saves the favorites to localStorage any time they change
  useEffect(() => {
    localStorage.setItem('petFavorites', JSON.stringify(favorites));
  }, [favorites]);
  
  // runs when the component loads or when searchQuery or currentPage changes
  useEffect(() => {
    const fetchPets = async () => {
      setLoading(true);
      try {
        const cleanQuery = {};
        if (searchQuery.name) cleanQuery.name = searchQuery.name;
        if (searchQuery.type) cleanQuery.type = searchQuery.type;
        if (searchQuery.location) cleanQuery.location = searchQuery.location;
        if (searchQuery.size) cleanQuery.size = searchQuery.size;
        if (searchQuery.age) cleanQuery.age = searchQuery.age;

        const data = await getPets(cleanQuery, currentPage);
        setPets(data.animals || []);
        setTotalPages(data.pagination?.total_pages || 0);
      } catch (err) {
        console.error('Failed to fetch pets', err);
      }
      setLoading(false);
    };

    fetchPets();
  }, [searchQuery, currentPage]);

  // this function now receives a search object from the Header
  const handleSearch = (searchParams) => {
    setSearchQuery(searchParams);
    setCurrentPage(1);
  };

  // function that will be passed down to our pagination component
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // new function to add or remove a pet from the favorites list
  const toggleFavorite = (pet) => {
    setFavorites(prevFavorites => {
      // check if the pet is already in the favorites list
      const isFavorited = prevFavorites.some(fav => fav.id === pet.id);
      if (isFavorited) {
        // if it is we remove it
        return prevFavorites.filter(fav => fav.id !== pet.id);
      } else {
        // if it is not we add it
        return [...prevFavorites, pet];
      }
    });
  };

  // appStyles object helps make the footer stick to the bottom of the page
  const appStyles = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  };

  return (
    <div style={appStyles}>
      <Header onSearchSubmit={handleSearch} favoriteCount={favorites.length} />

      <main className="py-3">
        <Routes>
          <Route 
            path="/" 
            element={<Home 
              pets={pets} 
              loading={loading}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              favorites={favorites}
              onFavoriteClick={toggleFavorite}
            />} 
          />
          <Route 
            path="/pet/:id" 
            element={<PetDetails 
              favorites={favorites} 
              onFavoriteClick={toggleFavorite} 
            />} 
          />
          <Route path="/about" element={<About />} />
          <Route 
            path="/favorites" 
            element={<Favorites 
              favorites={favorites} 
              onFavoriteClick={toggleFavorite} 
            />} 
          />
        </Routes>
      </main>

      <Footer />
      {/*  add the BackToTopButton here so its available on all pages */}
      <BackToTopButton />
    </div>
  );
}

export default App;
