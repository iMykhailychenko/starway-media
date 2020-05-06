import { paginationRouting } from '../../utils/utils';

const handlePaginationForm = target => {
  const pagination = document.getElementById('pagination');
  const { value } = target[0];
  const maxPage = pagination.dataset.max;
  const page = Number(value) > Number(maxPage) ? maxPage : value;

  paginationRouting(page);
};

export default handlePaginationForm;
