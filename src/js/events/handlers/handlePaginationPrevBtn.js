import paginationRouting from '../../utils/paginationRouting';

const handlePaginationPrevBtn = search => {
  const { page } = search;
  const pageNum = page ? Number(page) - 1 : 1;

  paginationRouting(pageNum);
};

export default handlePaginationPrevBtn;
