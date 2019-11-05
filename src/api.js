// import { promises } from "fs";

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/dana';

const getItems = function () {
  return apiFetch(`${BASE_URL}/items`);
    
};

const createItem = function (name) {
  const newItem = JSON.stringify({name});
  const options = {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: newItem
  };
  return apiFetch(BASE_URL+'/items',options);
};

const updateItem = function (id, updateData) {
  const updatedItem = JSON.stringify(updateData);
  console.log(updatedItem);
  const options = {
    method: 'PATCH',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: updatedItem
  };
  return apiFetch(BASE_URL+`/items/${id}`,options);
};

const deleteItem = function (id, deletedItem) {
  const options = {
    method: 'DELETE',
    headers: new Headers({'Content-Type': 'application/json'})
  };
  return apiFetch(BASE_URL+`/items/${id}`,options);
};

const apiFetch = function (...args) {
  let error;
  return fetch(...args)
    .then(res=>{
      if(!res.ok){
        error = {code: res.status};
      }
      return res.json();
    })
    .then(data=>{
      if(error){
        error.message = data.message;
        return Promise.reject(error.message);
      }
      return data;
    });
};

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};