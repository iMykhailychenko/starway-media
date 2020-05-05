export const KEY = '9d6e1ea09b630bd9f25250a95c28140d';

export const moviesListLayout = movies => {
  const grid = document.querySelectorAll('.card');

  grid.forEach((card, index) => {
    const refs = {
      img: card.children[0],
      title: card.children[1].children[0],
      text: card.children[1].children[1],
      link: card.children[1].children[2],
    };

    // render ajax data
    refs.img.src = movies[index].img;
    refs.title.textContent = movies[index].title;
    refs.text.textContent = movies[index].overview;
    refs.link.dataset.id = movies[index].id;
  });
};

export const moviePageLayout = movie => {
  const refs = {
    title: document.querySelector('.card-header'),
    img: document.querySelector('.card-img'),
    overview: document.querySelector('.card-text'),
    vote: document.querySelector('.vote'),
    popularity: document.querySelector('.popularity'),
    original_title: document.querySelector('.original_title'),
    genres: document.querySelector('.genres'),
  }

  // render ajax data
  refs.img.src = movie.img;
  refs.title.textContent = movie.title;
  refs.overview.textContent = movie.overview;
  refs.vote.textContent = movie.vote;
  refs.popularity.textContent = movie.popularity;
  refs.original_title.textContent = movie.original_title;
  refs.genres.textContent = movie.genres;
}