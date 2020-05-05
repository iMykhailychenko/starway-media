import routes from '../../router/routing';

const handlePagination = target => {
  const { page } = target.dataset;

  window.history.pushState(
    {},
    `?page=${page}`,
    `${window.location.origin}?page=${page}`,
  );
  routes['/']();

  window.scrollTo({ top: 0 });
};

export default handlePagination;
