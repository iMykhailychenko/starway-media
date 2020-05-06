import paginationRouting from '../../utils/paginationRouting';

const handlePagination = target => {
  const isActive = target.parentElement.classList.contains('active');
  if (isActive) return;

  const { page } = target.dataset;
  paginationRouting(page);
};

export default handlePagination;
