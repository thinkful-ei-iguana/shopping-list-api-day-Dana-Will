import $ from "jquery";

import "normalize.css";
import "./index.css";

import shoppingList from "./shopping-list";
import api from "./api";
import store from "./store";

const main = function() {
  // api
  //   .createItem("pears")
  //   .then(res => res.json())
  //   .then(newItem => {
  //     return api.getItems();
  //   })
  //   .then(res => res.json())
  //   .then(items => {
  //     console.log(items);
  //   });
  api.getItems().then(res => {
    console.log(api.BASE_URL);
    const item = store.items[0];
    console.log(item);
    console.log("current name: " + item.name);
    store.findAndUpdate(item.id, { name: "foobar" });
    console.log("new name: " + item.name);
  });

  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
