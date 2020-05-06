import routes from '../../router/routing';

const homePageBtn = () => {
  window.history.pushState({}, '/', window.location.origin);
  routes['/']();
};

export default homePageBtn;
