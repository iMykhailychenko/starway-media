import headerTemplate from '../../../pug/modules/template/header-movie.pug';

const headerElem = document.getElementById('header');

export const movieHeader = () => {
  const header = headerTemplate();
  headerElem.innerHTML = header;
};

export const homeHeader = () => {
  const header = headerTemplate();
  headerElem.innerHTML = header;
};
