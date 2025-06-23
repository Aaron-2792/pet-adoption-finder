const API_BASE = 'https://api.petfinder.com/v2';

// will cache token so i dont have to fetch it every single time
let token = null;

// this function handles getting the access token and is used by our other functions
export async function getAccessToken() {
  // if already have a valid token return it immediately
  if (token) {
    return token;
  }

  // the corrected secure way to get the token
  // uses URLSearchParams instead of JSON.stringify for body
  const body = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: process.env.REACT_APP_PETFINDER_API_KEY,
    client_secret: process.env.REACT_APP_PETFINDER_SECRET,
  });

  const response = await fetch(`${API_BASE}/oauth2/token`, {
    method: 'POST',
    body: body,
  });
  
  if (!response.ok) {
    throw new Error('Failed to get access token');
  }

  const data = await response.json();
  token = data.access_token;
  return token;
}


// This function gets a list of all pets (home page)
export async function getPets() {
  const accessToken = await getAccessToken();

  const response = await fetch(`${API_BASE}/animals`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch pets');
  }

  const data = await response.json();
  return data.animals; // returns an array of pets
}


// function to get a single pet by its ID
export async function getPetById(id) {
  //  ensure we have an access token
  const accessToken = await getAccessToken();

  // URL is now specific to the pets ID
  const response = await fetch(`${API_BASE}/animals/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch pet with id ${id}`);
  }

  const data = await response.json();
  // API returns the single pet object inside an "animal" property
  return data.animal;
}