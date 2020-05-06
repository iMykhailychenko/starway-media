import queryString from 'query-string';
import searchMovie from '../server/searchMovie';
import { KEY } from '../utils/utils';
import { responsHeader } from './helpers/headers';
import { formateHomePage } from './helpers/formateResponsData';
import renderPagination from './helpers/renderPagination';

// template
import initialTemplate from '../../pug/modules/template/preloader.pug';
import responsTemplate from '../../pug/pages/respons.pug';

//img
import preloader from '../../img/home-preloader.gif';

const respons = () => {
  // routing query data
  const search = queryString.parse(window.location.search);
  const query = search && search.q ? search.q : '';
  const inputValue = query.split('-').join(' ');

  // routing page data
  const page = search && search.page ? Number(search.page) : 1;

  // main refs
  const refs = {
    rootElem: document.getElementById('root'),
    headerElem: document.getElementById('header'),
  };

  // header markup
  responsHeader();

  // initial markup
  const markup = initialTemplate({ preloader });
  refs.rootElem.innerHTML = markup;

  // input value
  const searchInput = document.querySelector('.search');
  searchInput.value = inputValue;

  // main markup
  searchMovie(KEY, query, page).then(data => {
    const { results } = data;
    const maxPage = data.total_pages;
    const list = formateHomePage(results);

    // render main layout
    const markup = responsTemplate({ list });
    refs.rootElem.innerHTML = markup;

    // render pagination
    renderPagination(search, maxPage);
  });
};

export default respons;
