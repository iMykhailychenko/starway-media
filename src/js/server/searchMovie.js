import axios from 'axios';

const searchMovie = (key, query, page = 1) => {
  const uri = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}&page=${page}`;
  return axios(uri).then(response => response.data);
};

export default searchMovie;
