import {Component, OnInit} from '@angular/core';
import {CartService} from "../../serviceCart/cart.service";

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  display: boolean;
  displayModalLogin: boolean;
  displayForgetpassword: boolean;
  displayRegister: boolean;
  cartlist: any;

  constructor(private serviceCart: CartService) {
    this.display = false;
  }

  showModalDialogRegister() {
    this.displayRegister = !this.displayRegister;
    this.displayForgetpassword = false;
    this.displayModalLogin = false;
  }

  showModalDialogLogin() {
    this.displayModalLogin = true;
    this.displayForgetpassword = false;
    this.displayRegister = false;
  }

  showModalShoppingCart() {
    this.display = true;
    this.displayRegister = false;
    this.displayModalLogin = false;
    this.cartlist = this.serviceCart.getItems();
    console.log( this.cartlist)
  }

  showModalDialogForgetPassword() {
    this.displayModalLogin = false;
    this.displayForgetpassword = !this.displayForgetpassword;
    this.displayRegister = false;
  }

  ngOnInit(): void {
    // localStorage.removeItem("cartList");

  }
onDeleteCart(item:any){
    this.serviceCart.deleteItem(item);
  this.cartlist = this.serviceCart.getItems();
}
}
