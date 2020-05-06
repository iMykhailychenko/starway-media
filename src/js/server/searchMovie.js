import axios from 'axios';
import KEY from '../utils/key';

const searchMovie = (query, page = 1) => {
  const uri = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}&page=${page}`;
  return axios(uri).then(response => response.data);
};

export default searchMovie;
