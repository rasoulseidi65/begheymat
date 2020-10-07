import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
    data: { title: 'home', breadcrumb: 'home'}
  },
  {
    path: 'home/cart',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./Auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./Core/dashboard-user/dashboard-user.module').then(m => m.DashboardUserModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./Core/dashboardAdmin/dashboard-admin.module').then(m => m.DashboardAdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
