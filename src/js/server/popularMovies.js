import axios from 'axios';

const popularMovies = (key, page = 'page=1') => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&sort_by=popularity.desc&language=en-US&${page}`;
  return axios(url).then(response => response.data);
};

export default popularMovies;
