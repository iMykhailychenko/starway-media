import home from '../pages/home';
import movie from '../pages/movie';
import respons from '../pages/respons';

const routes = {
  '/': home,
  '/respons': respons,
  '/movie': movie,
};

const { pathname } = window.location;

// init page template according to uri
window.addEventListener('load', () => {
  routes[pathname]();
});

// change pages after histoty push event
window.onpopstate = () => {
  routes[pathname]();
};

export default routes;
