import queryString from 'query-string';
import oneMovie from '../server/oneMovie';
import { KEY, moviePageLayout } from '../utils/utils';
import { formateMoviePage } from './helpers/formateResponsData';
import { movieHeader } from './helpers/headers';

// templates
import movieTemplate from '../../pug/pages/movie.pug';
import { moviePreloader } from '../preloaders/preloader.js';


const rootElem = document.getElementById('root');

const movie = () => {
  // header markup
  movieHeader();

  // get query string with movie id
  const search = queryString.parse(window.location.search);

  // initial markup
  const markup = movieTemplate(moviePreloader);
  rootElem.innerHTML = markup;

  // main markup
  oneMovie(KEY, search.id).then(data => {
    const respons = formateMoviePage(data);
    moviePageLayout(respons);
  });
};

export default movie;
