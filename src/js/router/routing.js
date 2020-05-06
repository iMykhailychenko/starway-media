import home from '../pages/home';
import movie from '../pages/movie';
import respons from '../pages/respons';

const routes = {
  '/': home,
  '/respons': respons,
  '/movie': movie,
};


// init page template according to uri
window.addEventListener('load', () => {
  const { pathname } = window.location;
  routes[pathname]();
});

// change pages after histoty push event
window.onpopstate = () => {
  const { pathname } = window.location;
  routes[pathname]();
};

export default routes;
