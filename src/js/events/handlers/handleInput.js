import searchMovie from '../../server/searchMovie';
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

  searchMovie(value).then(({ results, total_results }) => {
    const list = formateData(results);
    listRoot.innerHTML = listTemplate({ list });

    // get total results element here as it is avalible only after listTemplate insert
    const totalResults = document.querySelector('.total-result');

    // we should do extra check here becouse it's async operation and some times it can 
    // resolves after we change template page (route).
    // next code will brake code if we dont have totalResults element in DOM
    if (!totalResults) return;
    totalResults.textContent = `${total_results} results for your search query`;
  });
};

export default handleInput;
