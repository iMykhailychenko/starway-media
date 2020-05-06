import poster from '../../img/poster.jpeg';

const formateMoviePage = ({
  poster_path,
  genres,
  original_title,
  title,
  overview,
  popularity,
  vote_average,
  vote_count,
}) => {
  const genresStr = genres.reduce((acc, curr) => (acc += `${curr.name} `), '');

  return {
    img: poster_path ? `http://image.tmdb.org/t/p/w400${poster_path}` : poster,
    title,
    original_title,
    popularity,
    overview,
    vote: `${vote_average} / ${vote_count}`,
    genres: genresStr,
  };
};

export default formateMoviePage;
