// src/Components/BackToTopButton.js

import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function BackToTopButton() {
  // This state tracks whether the button should be visible or not
  const [isVisible, setIsVisible] = useState(false);

  // This function checks how far the user has scrolled
  const toggleVisibility = () => {
    // If the user has scrolled more than 300px down the page, show the button
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  
  const scrollToTop = () => {
    // This scrolls the window smoothly back to the top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // This useEffect hook adds an event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // cleanup function that removes the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {/*button is only rendered if isVisible is true */}
      {isVisible && 
        <Button 
          onClick={scrollToTop}
          variant="primary"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000, 
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            fontSize: '24px',
            lineHeight: '1.2'
          }}
        >
          ↑
        </Button>
      }
    </div>
  );
}

export default BackToTopButton;
