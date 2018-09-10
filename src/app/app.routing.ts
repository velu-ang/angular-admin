import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component'

const auth_routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: 'full'
    // component: LoginComponent
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }]
  }
  // { path: 'dashboard',      component: DashboardComponent },
  // { path: 'user-profile',   component: UserProfileComponent },
  // { path: 'table-list',     component: TableListComponent },
  // { path: 'typography',     component: TypographyComponent },
  // { path: 'icons',          component: IconsComponent },
  // { path: 'maps',           component: MapsComponent },
  // { path: 'notifications',  component: NotificationsComponent },
  // { path: 'upgrade',        component: UpgradeComponent },
  // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];
const unauth_routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  // {
  //   path: '**',
  //   component: LoginComponent
  // },
  {
    path: "**",
    redirectTo: "login",
    pathMatch: 'full'
    // component: LoginComponent
  }
]
// let admin = localStorage.getItem("admin")
// if (admin != undefined){
//   const routes: Routes = auth_routes;
// }
// else{
//   const routes: Routes = unauth_routes;
// }

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(localStorage.getItem("admin") != undefined ? auth_routes : unauth_routes, { useHash: true })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
