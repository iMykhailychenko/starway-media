import axios from 'axios';

const oneMovie = (key, id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;
  return axios(url).then(response => response.data);
};

export default oneMovie;
