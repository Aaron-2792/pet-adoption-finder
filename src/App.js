import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/pages/Home';
import PetDetails from './Components/pages/PetDetails';

function App() {
  //  main layout and routing for the entire app
  // <Routes> component switches between our different pages
  // Route 1 "/" is the path for our main homepage it renders <Home> component
  // Route 2 "/pet/:id" is a dynamic path The ":id" part is a variable that will
  // hold the specific ID of a pet and it renders the <PetDetails> component

  const appStyles = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  };

  return (
    <div style={appStyles}>
      <Header />

      <main className="py-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet/:id" element={<PetDetails />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;