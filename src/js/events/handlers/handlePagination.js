import routes from '../../router/routing';

const handlePagination = target => {
  const isActive = target.parentElement.classList.contains('active');
  if (isActive) return;

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
