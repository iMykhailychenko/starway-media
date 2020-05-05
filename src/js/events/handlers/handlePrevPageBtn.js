import routes from '../../router/routing';

const handlePrevPageBtn = () => {
  const { page } = history.state;
  
  window.history.pushState(
    {},
    `?page=${page}`,
    `${window.location.origin}?page=${page}`,
  );
  routes['/']();

  window.scrollTo({ top: 0 });
};

export default handlePrevPageBtn;
