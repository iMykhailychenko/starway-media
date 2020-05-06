import queryString from 'query-string';
import debounce from 'lodash.debounce';

// == handlers ==
// click
import homePageBtn from './handlers/homePageBtn';
import handleReadMore from './handlers/handleReadMore';
import handlePagination from './handlers/handlePagination';
import handlePaginationPrevBtn from './handlers/handlePaginationPrevBtn';
import handlePaginationNextBtn from './handlers/handlePaginationNextBtn';
import handlePrevPageBtn from './handlers/handlePrevPageBtn';

// form
import handleInput from './handlers/handleInput';
import handlePaginationForm from './handlers/handlePaginationForm';
import handleSearchForm from './handlers/handleSearchForm';

// == main mouse events handler ==
document.addEventListener('click', event => {
  event.preventDefault();
  const { target } = event;
  const search = queryString.parse(window.location.search);

  // breadcrumb link
  if (target.classList.contains('home-page-js')) homePageBtn();

  // read more link
  if (target.classList.contains('movie-link')) handleReadMore(target);

  // open movie detailes on search list
  if (target.classList.contains('serch-item')) handleReadMore(target);

  // bottom pagination
  if (target.classList.contains('pagination-js')) handlePagination(target);

  // home page pagination btn (pren/next/first-page)
  if (target.classList.contains('prev-btn')) handlePaginationPrevBtn(search);
  if (target.classList.contains('next-btn')) handlePaginationNextBtn(search);

  // back to home page frome movie page
  if (target.classList.contains('previous-page-js')) handlePrevPageBtn();

  // submite form manualy
  // for some reason attribute 'submit' on buttons/inputs does't work
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

  if (target.classList.contains('search-form')) handleSearchForm(target);

  if (target.classList.contains('pagination-form'))
    handlePaginationForm(target);
});
