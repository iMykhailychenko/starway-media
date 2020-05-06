import routes from '../router/routing';
import queryString from 'query-string';

const paginationRouting = page => {
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

export default paginationRouting;
