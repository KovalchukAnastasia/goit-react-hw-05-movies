const KEY = '288ace10ced3ba69bdb97de2fe588e41';
const URL = 'https://api.themoviedb.org/3/';

function fetchSearchMovie(value, query) {
  return fetch(`${URL}${value}?&api_key=${KEY}&query=${query}`).then(
    response => {
      return response.json();
    }
  );
}

export default fetchSearchMovie;
