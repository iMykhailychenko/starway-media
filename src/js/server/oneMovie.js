import axios from 'axios';

const oneMovie = (key, id) => {
  const uri = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;
  return axios(uri).then(response => response.data);
};

export default oneMovie;
