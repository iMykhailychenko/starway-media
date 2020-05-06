import routes from '../../router/routing';

const handlePaginationForm = target => {
  const pagination = document.getElementById('pagination');
  const { value } = target[0];
  const maxPage = pagination.dataset.max;
  const page = Number(value) > Number(maxPage) ? maxPage : value;

  window.history.pushState(
    {},
    `?page=${page}`,
    `${window.location.origin}?page=${page}`,
  );
  routes['/']();

  window.scrollTo({ top: 0 });
};

export default handlePaginationForm;
