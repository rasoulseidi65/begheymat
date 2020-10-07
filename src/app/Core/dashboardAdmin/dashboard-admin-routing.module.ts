import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {ProductsComponent} from "./products/products.component";
import {HomepageComponent} from "./homepage/homepage.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: '',
    component: IndexComponent,
    children: [{
      path: 'product',
      component: ProductsComponent
    }]
  },
  {
    path: '',
    component: IndexComponent,
    children: [{
      path: 'homepage',
      component: HomepageComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAdminRoutingModule {
}
