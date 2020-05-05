import queryString from 'query-string';
import routes from '../router/routing';

// handlers
import handleReadMore from './handlers/handleReadMore';
import handlePagination from './handlers/handlePagination';
import handlePaginationPrevBtn from './handlers/handlePaginationPrevBtn';
import handlePaginationNextBtn from './handlers/handlePaginationNextBtn';
import handlePaginationFirstPage from './handlers/handlePaginationFirstPage';
import handlePrevPageBtn from './handlers/handlePrevPageBtn';

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
  if (target.classList.contains('to-first-page')) handlePaginationFirstPage();

  // back to home page frome movie page
  if (target.classList.contains('previous-page-js')) handlePrevPageBtn();
});

// input event handler
document.addEventListener('input', event => {
  console.log(event);
});
