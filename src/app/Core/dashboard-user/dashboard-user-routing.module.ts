import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {
    path: 'profile',
    component: IndexComponent,
    children: [{
      path: '',
      component: ProfileComponent
    }]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardUserRoutingModule {
}
