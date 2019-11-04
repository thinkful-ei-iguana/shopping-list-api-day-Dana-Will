import $ from "jquery";

import "normalize.css";
import "./index.css";

import shoppingList from "./shopping-list";
import api from "./api";
import store from "./store";

const main = function() {
 
  // api.getItems()
  //   .then(res => res.json())
  //   .then((items) => {
  //     console.log(api.BASE_URL);
  //     store.items = items;
  //     const item = store.items[0];
  //     console.log(item);
  //     console.log("current name: " + item.name);
  //     store.findAndUpdate(item.id, { name: "foobar" });
  //     console.log("new name: " + item.name);
  //   })
  //   .then(res => res.json())
  //   .then(() => console.log('updated!'));
         
      
    


  
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
