import queryString from 'query-string';
import popularMovies from '../server/popularMovies';
import renderPagination from '../utils/renderPagination';
import formateHomePage from '../utils/formateHomePage';
import { homeHeader } from '../utils/headersTempl';

// template
import initialTemplate from '../../pug/modules/template/preloader.pug';
import homeTemplate from '../../pug/pages/home.pug';

//img
import preloader from '../../img/home-preloader.gif';

const rootElem = document.getElementById('root');

const home = () => {
  // header markup
  homeHeader();

  // initial markup
  const initialMarkup = initialTemplate({ preloader });
  rootElem.innerHTML = initialMarkup;

  // get query string with page namber
  const search = queryString.parse(window.location.search);
  const page = search.page ? `page=${search.page}` : null;

  // main markup
  popularMovies(page).then(data => {
    const { results } = data;
    const maxPage = data.total_pages;
    const list = formateHomePage(results);

    // render main layout
    const markup = homeTemplate({ list });
    rootElem.innerHTML = markup;

    // render pagination
    renderPagination(search, maxPage);
  });
};

export default home;
