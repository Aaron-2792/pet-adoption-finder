// src/App.js

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/pages/Home';
import PetDetails from './Components/pages/PetDetails';
import About from './Components/pages/About';
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

  
  // runs when the component loads or when searchQuery or currentPage changes
  useEffect(() => {
    const fetchPets = async () => {
      setLoading(true);
      try {
        // created a clean query object to avoid sending empty parameters to the API
        const cleanQuery = {};
        if (searchQuery.name) {
          cleanQuery.name = searchQuery.name;
        }
        if (searchQuery.type) {
          cleanQuery.type = searchQuery.type;
        }
        // This is the new line to handle the location search
        if (searchQuery.location) {
          cleanQuery.location = searchQuery.location;
        }

        // pass the clean query and the currentPage to our API function
        const data = await getPets(cleanQuery, currentPage);
        // correctly set the pets list from data.animals
        setPets(data.animals || []);
        // also set the total number of pages from data.pagination
        setTotalPages(data.pagination?.total_pages || 0);
      } catch (err) {
        console.error('Failed to fetch pets', err);
      }
      setLoading(false);
    };

    fetchPets();
  }, [searchQuery, currentPage]);

  // This function now receives a search object from the Header
  const handleSearch = (searchParams) => {
    setSearchQuery(searchParams);
    // When a new search is made we must reset the page to 1
    setCurrentPage(1);
  };

  // function that will be passed down to our pagination component
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // appStyles object helps make the footer stick to the bottom of the page
  const appStyles = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  };

  return (
    <div style={appStyles}>
      <Header onSearchSubmit={handleSearch} />

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
            />} 
          />
          <Route path="/pet/:id" element={<PetDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;