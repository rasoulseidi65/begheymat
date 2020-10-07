import {Injectable} from '@angular/core';
import {ProductLayoutModel} from '../Layout/ProductLayout.model';
import {Subject} from "rxjs";
import {ItemCart} from "./itemCart";

let itemsInCart = [];
let cart = [];
let subject = new Subject<any>();

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: ItemCart;

  constructor() {
  }

  addToCart(Product: any) {

    let local_Storage;
    let itemsInCart = [];
    this.items = {
      product: Product,
    }

    if (localStorage.getItem('cartList') === null) {
      itemsInCart.push(this.items);
      localStorage.setItem('cartList', JSON.stringify(itemsInCart));
      subject.next('changed');
    } else {
      local_Storage = JSON.parse(localStorage.getItem('cartList'));

      for (var i in local_Storage) {
        if (this.items['product']['cartList']._id === local_Storage[i]['product']['cartList']._id) {
          let index = parseInt(i);
          local_Storage.splice(index, 1);
          localStorage.setItem('cartList', JSON.stringify(local_Storage));
          break;
        }
      }
    }
    if (this.items) {
      itemsInCart.push(this.items);
    }
    local_Storage.forEach(function (item) {
      itemsInCart.push(item);
    })
    localStorage.setItem('cartList', JSON.stringify(itemsInCart));
    subject.next('changed');
    let xx = JSON.parse(localStorage.getItem('cartList'));

    // console.log(xx)
  }

  deleteItem(item) {
    console.log("Deleting : ", item['product']['cartList']._id);
    let shopping_cart;
    let index;
    shopping_cart = JSON.parse(localStorage.getItem('cartList'));
    for (let i in shopping_cart) {
      if (item['product']['cartList']._id === shopping_cart[i]['product']['cartList']._id) {
        index = i;
      }
    }
    shopping_cart.splice(index, 1);
    console.log("shopping_cart ", shopping_cart);
    localStorage.setItem('cartList', JSON.stringify(shopping_cart));

  }

  getItems() {
    return this.items = JSON.parse(localStorage.getItem('cartList'));

  }
}
