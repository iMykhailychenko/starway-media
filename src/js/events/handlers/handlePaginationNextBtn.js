import paginationRouting from '../../utils/paginationRouting';

const handlePaginationNextBtn = search => {
  const { page } = search;
  const pageNum = page ? Number(page) + 1 : 2;

  paginationRouting(pageNum);
};

export default handlePaginationNextBtn;
