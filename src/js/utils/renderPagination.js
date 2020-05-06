import paginationTempl from '../../pug/modules/template/pagination.pug';

const renderPagination = (search, maxPage) => {
  // insert pagginatiom markup
  // paggination will change according to the number of pages
  const pageNum = search.page ? Number(search.page) : 1;
  const markup = paginationTempl({ maxPage });
  const paginationWrp = document.getElementById('pagination');
  paginationWrp.innerHTML = markup;

  // set max page number
  const container = document.getElementById('pagination');
  container.dataset.max = maxPage;

  // next code will run if we download more then 3 pages of content
  const refs = {
    prev: document.querySelector('.prev'),
    next: document.querySelector('.next'),
    navBtn: document.querySelectorAll('[data-page]'),
  };

  if (maxPage > 2) {
    switch (pageNum >= 2 && pageNum < maxPage) {
      case false:
        refs.prev.classList.add('disabled');
        refs.next.classList.remove('disabled');

        refs.navBtn[0].textContent = 1;
        refs.navBtn[0].dataset.page = 1;
        refs.navBtn[0].parentNode.classList.add('active');

        refs.navBtn[1].textContent = 2;
        refs.navBtn[1].dataset.page = 2;
        refs.navBtn[1].parentNode.classList.remove('active');

        refs.navBtn[2].textContent = 3;
        refs.navBtn[2].dataset.page = 3;
        refs.navBtn[2].parentNode.classList.remove('active');
        break;

      case true:
        refs.prev.classList.remove('disabled');
        refs.next.classList.remove('disabled');

        refs.navBtn[0].textContent = pageNum - 1;
        refs.navBtn[0].dataset.page = pageNum - 1;
        refs.navBtn[0].parentNode.classList.remove('active');

        refs.navBtn[1].textContent = pageNum;
        refs.navBtn[1].dataset.page = pageNum;
        refs.navBtn[1].parentNode.classList.add('active');

        refs.navBtn[2].textContent = pageNum + 1;
        refs.navBtn[2].dataset.page = pageNum + 1;
        refs.navBtn[2].parentNode.classList.remove('active');
        break;
    }

    if (pageNum === maxPage && maxPage > 2) {
      refs.prev.classList.remove('disabled');
      refs.next.classList.add('disabled');

      refs.navBtn[0].textContent = pageNum - 2;
      refs.navBtn[0].dataset.page = pageNum - 2;
      refs.navBtn[0].parentNode.classList.remove('active');

      refs.navBtn[1].textContent = pageNum - 1;
      refs.navBtn[1].dataset.page = pageNum - 1;
      refs.navBtn[1].parentNode.classList.remove('active');

      refs.navBtn[2].textContent = pageNum;
      refs.navBtn[2].dataset.page = pageNum;
      refs.navBtn[2].parentNode.classList.add('active');
    }
  }

  if (pageNum === 2 && maxPage === 2) {
    refs.navBtn[0].textContent = 1;
    refs.navBtn[0].dataset.page = 1;
    refs.navBtn[0].parentNode.classList.remove('active');

    refs.navBtn[1].textContent = 2;
    refs.navBtn[1].dataset.page = 2;
    refs.navBtn[1].parentNode.classList.add('active');
  }
};

export default renderPagination;
