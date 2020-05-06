import poster from '../../../img/poster.jpeg';

export const formateHomePage = results => {
  return results.map(
    ({ id, backdrop_path, title, overview }) => ({
      id,
      img: backdrop_path
        ? `http://image.tmdb.org/t/p/w400${backdrop_path}`
        : poster,
      title,
      overview:
        overview.length < 150 ? overview : `${overview.slice(0, 150)} ...`,
    }),
  );
};

export const formateMoviePage = ({
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
