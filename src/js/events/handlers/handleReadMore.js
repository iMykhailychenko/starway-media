import routes from '../../router/routing';

const handleReadMore = (target, search) => {
  const { id } = target.dataset;
  const { page } = search;
  const pageNum = page ? Number(page) : 1;

  window.history.pushState(
    { page: pageNum },
    `/movie?id=${id}`,
    `${window.location.origin}/movie?id=${id}`,
  );
  routes['/movie']();
};

export default handleReadMore;
