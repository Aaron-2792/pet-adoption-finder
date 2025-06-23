import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="mt-auto py-3 bg-light">
      <Container>
        <p className="text-center text-muted">
          &copy; 2025 Pet Adoption Finder. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;