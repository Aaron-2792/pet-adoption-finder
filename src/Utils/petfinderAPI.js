// src/Utils/petfinderAPI.js
// UPDATED: Now uses local mock data since Petfinder API is decommissioned.
import { mockPets, mockTypes } from './mockData';

// We simulate a short delay to mimic a real network request (makes the spinner show up)
const SIMULATED_DELAY = 500; 

// We keep this function so we don't break code that calls it, but it just returns a fake token.
export async function getAccessToken() {
  return "mock-token-123"; 
}

// This replaces the real API call with a local filter function
export async function getPets(query, page = 1) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filteredPets = [...mockPets];

      // --- FILTERING LOGIC ---
      // This mimics what the Petfinder API server used to do
      if (query) {
        // Filter by Animal Type (e.g., "Dog")
        if (query.type && query.type !== "") {
            filteredPets = filteredPets.filter(p => p.type.toLowerCase() === query.type.toLowerCase());
        }
        
        // Filter by Name (Partial match)
        if (query.name && query.name !== "") {
            filteredPets = filteredPets.filter(p => p.name.toLowerCase().includes(query.name.toLowerCase()));
        }
        
        // Filter by Location (Simple string check against City or State)
        if (query.location && query.location !== "") {
             const loc = query.location.toLowerCase();
             filteredPets = filteredPets.filter(p => 
                p.contact.address.city.toLowerCase().includes(loc) || 
                p.contact.address.state.toLowerCase().includes(loc)
             );
        }
        
        // Filter by Age
        if (query.age && query.age !== "") {
             filteredPets = filteredPets.filter(p => p.age.toLowerCase() === query.age.toLowerCase());
        }
        
        // Filter by Size
         if (query.size && query.size !== "") {
             filteredPets = filteredPets.filter(p => p.size.toLowerCase() === query.size.toLowerCase());
        }
      }

      // --- PAGINATION MOCK ---
      // Since we have a small list, we'll just return everything as "page 1"
      // But we return the structure your App.js expects
      resolve({
        animals: filteredPets,
        pagination: { 
            total_pages: 1, 
            current_page: 1, 
            total_count: filteredPets.length 
        }
      });
    }, SIMULATED_DELAY);
  });
}

// Gets a single pet by ID from our mock list
export async function getPetById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Note: URL params are strings, so we convert pet.id to string to compare safely
      const foundPet = mockPets.find(p => p.id.toString() === id.toString());
      
      if (foundPet) {
        resolve(foundPet);
      } else {
        // We reject the promise to trigger the error handling in your component
        reject(new Error("Pet not found"));
      }
    }, SIMULATED_DELAY);
  });
}

// Returns the list of animal types
export async function getAnimalTypes() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTypes);
    }, SIMULATED_DELAY);
  });
}