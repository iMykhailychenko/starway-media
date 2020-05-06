import routes from '../../router/routing';

const handlePrevPageBtn = () => {
  const pathname = history.state ? history.state.pathname : '/';
  const href = history.state ? history.state.href : window.location.origin;

  window.history.pushState({}, pathname, href);
  routes['/']();

  window.scrollTo({ top: 0 });
};

export default handlePrevPageBtn;
