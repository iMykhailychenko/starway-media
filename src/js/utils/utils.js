import routes from '../router/routing';
import queryString from 'query-string';

export const KEY = '9d6e1ea09b630bd9f25250a95c28140d';

export const moviePageLayout = movie => {
  const refs = {
    title: document.querySelector('.card-header'),
    img: document.querySelector('.card-img'),
    overview: document.querySelector('.card-text'),
    vote: document.querySelector('.vote'),
    popularity: document.querySelector('.popularity'),
    original_title: document.querySelector('.original_title'),
    genres: document.querySelector('.genres'),
  };

  // render ajax data
  refs.img.src = movie.img;
  refs.title.textContent = movie.title;
  refs.overview.textContent = movie.overview;
  refs.vote.textContent = movie.vote;
  refs.popularity.textContent = movie.popularity;
  refs.original_title.textContent = movie.original_title;
  refs.genres.textContent = movie.genres;
};

export const paginationRouting = page => {
  const currentTemplate = window.location.pathname;

  switch (currentTemplate) {
    case '/':
      window.history.pushState(
        {},
        `?page=${page}`,
        `${window.location.origin}?page=${page}`,
      );
      routes['/']();

      break;

    case '/respons':
      const search = queryString.parse(window.location.search);
      const query = search && search.q ? search.q : '';

      window.history.pushState(
        {},
        `/respons?q=${query}&page=${page}`,
        `${window.location.origin}/respons?q=${query}&page=${page}`,
      );
      routes['/respons']();

      break;
  }

  window.scrollTo({ top: 0 });
};
