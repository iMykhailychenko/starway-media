import routes from '../../router/routing';

const handlePaginationNextBtn = search => {
  const { page } = search;
  const pageNum = page ? Number(page) : 1;

  window.history.pushState(
    {},
    `?page=${pageNum + 1}`,
    `${window.location.origin}?page=${pageNum + 1}`,
  );
  routes['/']();

  window.scrollTo({ top: 0 });
};

export default handlePaginationNextBtn;
