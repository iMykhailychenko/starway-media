const renderPagination = search => {
  const refs = {
    prev: document.querySelector('.prev'),
    next: document.querySelector('.next'),
    navBtn: document.querySelectorAll('[data-page]'),
    firstPage: document.querySelector('.to-first-page'),
  };

  search.page === '1'
    ? (refs.prev.classList.add('disabled'),
      refs.firstPage.classList.add('disabled'))
    : (refs.prev.classList.remove('disabled'),
      refs.firstPage.classList.remove('disabled'));

  const pageNum = search.page ? Number(search.page) : 1;
  refs.navBtn[0].textContent = pageNum;
  refs.navBtn[0].dataset.page = pageNum;

  refs.navBtn[1].textContent = pageNum + 1;
  refs.navBtn[1].dataset.page = pageNum + 1;

  refs.navBtn[2].textContent = pageNum + 2;
  refs.navBtn[2].dataset.page = pageNum + 2;
};

export default renderPagination;