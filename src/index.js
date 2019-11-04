import $ from 'jquery';

import 'normalize.css';
import './index.css';

import shoppingList from './shopping-list';
import api from './api';
import store from './store';

const main = function () {
  api.createItem('pears') .then(res => res.json()) .then((newItem) => { return api.getItems(); }) .then(res => res.json()) .then((items) => { console.log(items); });
  api.getItems() .then(res => res.json()) .then((items) => { const item = items[0]; return api.updateItem(item.id, { name: 'foobar' }); }) .then(res => res.json()) .then(() => console.log('updated!'));
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
