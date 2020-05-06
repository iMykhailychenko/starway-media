import poster from '../../img/poster.jpeg';

const formateHomePage = results => {
  return results.map(({ id, backdrop_path, title, overview }) => ({
    id,
    img: backdrop_path
      ? `http://image.tmdb.org/t/p/w400${backdrop_path}`
      : poster,
    title,
    overview:
      overview.length < 150 ? overview : `${overview.slice(0, 150)} ...`,
  }));
};

export default formateHomePage;
