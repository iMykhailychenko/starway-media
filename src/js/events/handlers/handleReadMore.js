import routes from '../../router/routing';

const handleReadMore = target => {
  const { id } = target.dataset;

  window.history.pushState(
    {
      pathname: window.location.pathname,
      href: window.location.href,
    },
    `/movie?id=${id}`,
    `${window.location.origin}/movie?id=${id}`,
  );
  routes['/movie']();
};

export default handleReadMore;
