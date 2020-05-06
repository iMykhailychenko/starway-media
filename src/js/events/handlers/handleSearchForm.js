import routes from '../../router/routing';

const handleSearchForm = target => {
  const { value } = target[0];

  // to improve ajax performance we won't send short requests
  if (value.length < 3) return;

  // formate input value to correct query string
  const querySrting = value.replace(/\s+/g, ' ').trim().split(' ').join('-');

  window.history.pushState(
    {},
    `/respons?q=${querySrting}&page=1`,
    `${window.location.origin}/respons?q=${querySrting}&page=1`,
  );
  routes['/respons']();
};

export default handleSearchForm;
