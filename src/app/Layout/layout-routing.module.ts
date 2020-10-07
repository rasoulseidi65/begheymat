import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {CartComponent} from "./cart/cart.component";

const routes: Routes = [
  {
    path:'' ,
    component:IndexComponent
  },
  {
    path:'cart',
    component:  CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
