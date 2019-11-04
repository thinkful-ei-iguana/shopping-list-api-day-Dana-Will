const BASE_URL = 'https://thinkful-list-api.herokuapp.com/dana';

const getItems = function () {
  return fetch(`${BASE_URL}/items`);
};

const createItem = function (name) {
  const newItem = JSON.stringify({name});
  const options = {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: newItem
  };
  return fetch(BASE_URL+'/items',options);
};

const updateItem = function (id, updateData) {
  const updatedItem = JSON.stringify(updateData);
  const options = {
    method: 'PATCH',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: updatedItem
  };
  return fetch(BASE_URL+`/items/${id}`,options);
};

export default {
  getItems,
  createItem,
  updateItem

};