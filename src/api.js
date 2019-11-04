const BASE_URL = 'https://thinkful-list-api.herokuapp.com/dana';

const getItems = function () {
  return fetch(`${BASE_URL}/items`);
};

const createItem = function (name) {
  const newItem = {name};
  JSON.stringify(newItem);
  return fetch();
};

export default {
  getItems,
  createItem

};