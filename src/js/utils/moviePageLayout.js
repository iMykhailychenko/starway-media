const moviePageLayout = movie => {
  const refs = {
    title: document.querySelector('.card-header'),
    img: document.querySelector('.card-img'),
    overview: document.querySelector('.card-text'),
    vote: document.querySelector('.vote'),
    popularity: document.querySelector('.popularity'),
    original_title: document.querySelector('.original_title'),
    genres: document.querySelector('.genres'),
  };

  // render ajax data
  refs.img.src = movie.img;
  refs.title.textContent = movie.title;
  refs.overview.textContent = movie.overview;
  refs.vote.textContent = movie.vote;
  refs.popularity.textContent = movie.popularity;
  refs.original_title.textContent = movie.original_title;
  refs.genres.textContent = movie.genres;
};

export default moviePageLayout;
