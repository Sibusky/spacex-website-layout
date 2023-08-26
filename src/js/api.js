const apiKey = process.env.REACT_APP_API_KEY;

export function getPhotos(query) {
  const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`;
  return fetch(apiUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Request failed');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
