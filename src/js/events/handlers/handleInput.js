import searchMovie from '../../server/searchMovie';
import { KEY } from '../../utils/utils';
import listTemplate from '../../../pug/modules/template/search-list.pug';

const formateData = results => {
  return results.filter(({ title, id }, index) => {
    return index < 9 ? { title, id } : null;
  });
};

const handleInput = ({ target }) => {
  // chack to handle correct input
  if (!target.classList.contains('search')) return;

  // disable on other pages
  const currentPage = window.location.pathname;
  if (currentPage !== '/') return;

  const { value } = target;
  const listRoot = document.getElementById('search-list');

  // to improve ajax performance we won't send short requests
  if (value.length < 3) {
    listRoot.innerHTML = '';
    return;
  }

  searchMovie(KEY, value).then(({ results, total_results }) => {
    const list = formateData(results);
    listRoot.innerHTML = listTemplate({ list });

    // get total results element here as it is avalible only after listTemplate insert
    const totalResults = document.querySelector('.total-result');
    totalResults.textContent = `${total_results} results for your search query`;
  });
};

export default handleInput;
