import render from '../router/render';
import responsTemplate from '../../pug/pages/respons.pug';
import headerTemplate from '../../pug/modules/template/header-respons.pug';

const respons = () => {
  // header markup
  const header = headerTemplate();
  const headerElem = document.getElementById('header');
  headerElem.innerHTML = header;

  // main markup
  const markup = responsTemplate();
  render('/respons', markup);
};

export default respons;
