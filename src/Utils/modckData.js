// This file contains static data to replace the decommissioned Petfinder API.
// It mimics the exact structure the API used to return.

export const mockPets = [
  {
    id: 12345,
    name: "Buddy",
    type: "Dog",
    breeds: { primary: "Golden Retriever" },
    age: "Young",
    gender: "Male",
    size: "Large",
    status: "adoptable",
    contact: { address: { city: "Chicago", state: "IL" } },
    photos: [
      { 
        medium: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=500&q=60", 
        full: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1000&q=80" 
      }
    ],
    description: "Buddy is a super friendly Golden Retriever who loves to play fetch! He gets along great with kids and other dogs.",
    url: "#",
    tags: ["Friendly", "Playful", "Smart"]
  },
  {
    id: 67890,
    name: "Luna",
    type: "Cat",
    breeds: { primary: "Siamese" },
    age: "Adult",
    gender: "Female",
    size: "Medium",
    status: "adoptable",
    contact: { address: { city: "New York", state: "NY" } },
    photos: [
      { 
        medium: "https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=500&q=60", 
        full: "https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=1000&q=80" 
      }
    ],
    description: "Luna is a calm and elegant cat looking for a quiet home. she loves sleeping in sunbeams.",
    url: "#",
    tags: ["Calm", "Indoor", "Affectionate"]
  },
  {
    id: 11223,
    name: "Rocky",
    type: "Dog",
    breeds: { primary: "Bulldog" },
    age: "Senior",
    gender: "Male",
    size: "Medium",
    status: "adoptable",
    contact: { address: { city: "Seattle", state: "WA" } },
    photos: [
      { 
        medium: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=500&q=60", 
        full: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1000&q=80" 
      }
    ],
    description: "Rocky is a sweet old man who loves naps on the couch. He doesn't need much exercise, just lots of love.",
    url: "#",
    tags: ["Lazy", "Sweet", "Couch Potato"]
  },
  {
    id: 44556,
    name: "Mittens",
    type: "Cat",
    breeds: { primary: "Tabby" },
    age: "Baby",
    gender: "Female",
    size: "Small",
    status: "adoptable",
    contact: { address: { city: "Austin", state: "TX" } },
    photos: [], // Intentionally empty to test the "No Image" placeholder
    description: "Mittens is a tiny kitten with a big personality. She is full of energy and loves to chase laser pointers.",
    url: "#",
    tags: ["Kitten", "Energetic", "Playful"]
  },
  {
    id: 99887,
    name: "Oreo",
    type: "Rabbit",
    breeds: { primary: "Dutch" },
    age: "Young",
    gender: "Male",
    size: "Small",
    status: "adoptable",
    contact: { address: { city: "Denver", state: "CO" } },
    photos: [
        {
            medium: "https://images.unsplash.com/photo-1585110396065-88b725896a2e?auto=format&fit=crop&w=500&q=60",
            full: "https://images.unsplash.com/photo-1585110396065-88b725896a2e?auto=format&fit=crop&w=1000&q=80"
        }
    ],
    description: "Oreo is a friendly bunny who loves carrots and hopping around the yard.",
    url: "#",
    tags: ["Quiet", "Soft"]
  },
  {
    id: 77441,
    name: "Max",
    type: "Dog",
    breeds: { primary: "German Shepherd" },
    age: "Adult",
    gender: "Male",
    size: "Large",
    status: "adoptable",
    contact: { address: { city: "Chicago", state: "IL" } },
    photos: [
        {
            medium: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=500&q=60",
            full: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=1000&q=80"
        }
    ],
    description: "Max is a loyal and protective companion. He is house trained and knows basic commands.",
    url: "#",
    tags: ["Loyal", "Protective", "Smart"]
  }
];

export const mockTypes = [
    { name: "Dog" },
    { name: "Cat" },
    { name: "Rabbit" },
    { name: "Bird" }
];