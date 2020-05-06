import queryString from 'query-string';
import routes from '../router/routing';
import debounce from 'lodash.debounce';

// handlers
import handleReadMore from './handlers/handleReadMore';
import handlePagination from './handlers/handlePagination';
import handlePaginationPrevBtn from './handlers/handlePaginationPrevBtn';
import handlePaginationNextBtn from './handlers/handlePaginationNextBtn';
import handlePrevPageBtn from './handlers/handlePrevPageBtn';
import handleInput from './handlers/handleInput';
import handlePaginationForm from './handlers/handlePaginationForm';

// main mouse events handler
document.addEventListener('click', event => {
  event.preventDefault();
  const { target } = event;
  const search = queryString.parse(window.location.search);

  // breadcrumb link
  if (target.classList.contains('home-page-js')) routes['/']();

  // read more link
  if (target.classList.contains('movie-link')) handleReadMore(target, search);

  // bottom paggination
  if (target.classList.contains('pagination-js')) handlePagination(target);

  // home page paggination btn (pren/next/first-page)
  if (target.classList.contains('prev-btn')) handlePaginationPrevBtn(search);
  if (target.classList.contains('next-btn')) handlePaginationNextBtn(search);

  // back to home page frome movie page
  if (target.classList.contains('previous-page-js')) handlePrevPageBtn();

  // submite form manualy
  // for some reason atribute 'submit' on buttons/inputs does't work
  if (target.classList.contains('paggination-go')) {
    const form = document.querySelector('.pagination-form');
    handlePaginationForm(form);
  }
});

// input event handler
document.addEventListener('input', debounce(handleInput, 300));

// submit event handler
document.addEventListener('submit', event => {
  event.preventDefault();
  const { target } = event;

  if (target.classList.contains('pagination-form'))
    handlePaginationForm(target);
});
