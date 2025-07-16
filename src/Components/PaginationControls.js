// src/Components/PaginationControls.js

import React from 'react';
import { Pagination } from 'react-bootstrap';

// component receives the current page total pages and a function to handle page changes
function PaginationControls({ currentPage, totalPages, onPageChange }) {
  // dont want to show the controls if theres only one page or no pages
  if (totalPages <= 1) {
    return null;
  }

  // function creates the page number items
  const createPageItems = () => {
    let items = [];
    // show a limited number of page links to avoid a huge list
    const maxPagesToShow = 5;
    let startPage, endPage;

    if (totalPages <= maxPagesToShow) {
      // If total pages is less than our max show all pages
      startPage = 1;
      endPage = totalPages;
    } else {
      // If total pages is more than our max calculate which pages to show
      if (currentPage <= Math.ceil(maxPagesToShow / 2)) {
        startPage = 1;
        endPage = maxPagesToShow;
      } else if (currentPage + Math.floor(maxPagesToShow / 2) >= totalPages) {
        startPage = totalPages - maxPagesToShow + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - Math.floor(maxPagesToShow / 2);
        endPage = currentPage + Math.floor(maxPagesToShow / 2);
      }
    }

    // Create page number buttons
    for (let number = startPage; number <= endPage; number++) {
      items.push(
        <Pagination.Item 
          key={number} 
          active={number === currentPage} 
          onClick={() => onPageChange(number)}
        >
          {number}
        </Pagination.Item>,
      );
    }
    return items;
  };

  return (
    //  used Bootstraps Pagination component and utility classes to center it
    <div className="d-flex justify-content-center">
      <Pagination>
        {/* Button to go to the first page */}
        <Pagination.First onClick={() => onPageChange(1)} disabled={currentPage === 1} />
        {/* Button to go to the previous page */}
        <Pagination.Prev onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} />
        
        {/* The generated page number buttons go here */}
        {createPageItems()}

        {/* Button to go to the next page */}
        <Pagination.Next onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} />
        {/* Button to go to the last page */}
        <Pagination.Last onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages} />
      </Pagination>
    </div>
  );
}

export default PaginationControls;