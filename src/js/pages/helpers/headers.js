import homeHeaderTemplate from '../../../pug/modules/template/header-home.pug';
import movieHeaderTemplate from '../../../pug/modules/template/header-movie.pug';
import responsHeaderTemplate from '../../../pug/modules/template/header-respons.pug';

const headerElem = document.getElementById('header');

export const homeHeader = () => {
  const header = homeHeaderTemplate();
  headerElem.innerHTML = header;
};

export const movieHeader = () => {
  const header = movieHeaderTemplate();
  headerElem.innerHTML = header;
};

export const responsHeader = () => {
  const header = responsHeaderTemplate();
  headerElem.innerHTML = header;
};
