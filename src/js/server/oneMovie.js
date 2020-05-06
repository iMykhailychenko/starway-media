import axios from 'axios';
import KEY from '../utils/key';

const oneMovie = id => {
  const uri = `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`;
  return axios(uri).then(response => response.data);
};

export default oneMovie;
