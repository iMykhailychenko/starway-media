const rootElem = document.getElementById('root');

const render = (pathname, markup)  => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootElem.innerHTML = markup;
};

export default render;
