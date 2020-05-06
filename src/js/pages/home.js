import queryString from 'query-string';
import popularMovies from '../server/popularMovies';
import { KEY, moviesListLayout } from '../utils/utils';
import renderPagination from './helpers/renderPagination';
import { formateHomePage } from './helpers/formateResponsData';
import { homeHeader } from './helpers/headers';

// template
import homeTemplate from '../../pug/pages/home.pug';
import { listPreloader } from '../preloaders/preloader.js';

const rootElem = document.getElementById('root');

const home = () => {
  // header markup
  homeHeader();

  // initial markup
  const markup = homeTemplate(listPreloader);
  rootElem.innerHTML = markup;

  // get query string with page namber
  const search = queryString.parse(window.location.search);
  const page = search.page ? `page=${search.page}` : null;

  // main markup
  popularMovies(KEY, page).then(data => {
    const { results } = data;
    const maxPage = data.total_pages;
    const moviesList = formateHomePage(results);

    // render main layout
    moviesListLayout(moviesList);

    // render pagination
    renderPagination(search, maxPage);
  });
};

export default home;
