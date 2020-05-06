import searchMovie from '../../server/searchMovie';
import { KEY } from '../../utils/utils';
import listTemplate from '../../../pug/modules/template/search-list.pug';

const formateData = results => {
  return results.filter(({ title, id }, index) => {
    return index < 9 ? { title, id } : null;
  });
};

const handleInput = ({ target }) => {
  if (!target.classList.contains('search')) return;

  const { value } = target;
  const listRoot = document.getElementById('search-list');

  if (value.length < 3) {
    listRoot.innerHTML = '';
    return;
  }

  searchMovie(KEY, value).then(data => {
    const { results } = data;

    const list = formateData(results);
    listRoot.innerHTML = listTemplate({ list });
  });
};

export default handleInput;
