const KEY = '288ace10ced3ba69bdb97de2fe588e41';
const URL = 'https://api.themoviedb.org/3/';

function fetchTheMoviedb(value) {
  return fetch(`${URL}${value}?&api_key=${KEY}`).then(response => {
    return response.json();
  });
}

export default fetchTheMoviedb;
