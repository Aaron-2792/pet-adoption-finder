// src/Components/Footer.js

import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    //  new custom class
    <footer className="mt-auto py-3 footer-custom">
      <Container>
        {/*  'text-white-50' to make the text readable on dark background */}
        <p className="text-center text-white-50 mb-0">
          &copy; 2025 Pet Adoption Finder. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;