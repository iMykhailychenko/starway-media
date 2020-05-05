import routes from '../../router/routing';

const handlePaginationFirstPage = () => {
  window.history.pushState(
    {},
    '?page=1',
    window.location.origin + '?page=1',
  );
  routes['/']();

  window.scrollTo({ top: 0 });
};

export default handlePaginationFirstPage;
