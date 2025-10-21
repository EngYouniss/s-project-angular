import { Routes } from '@angular/router';
import { Register } from './components/register/register';
import { Login } from './components/login/login';
import { Home } from './components/home/home';

export const routes: Routes = [

  {
    path:'login',component:Login
  },
  {
    path:'register',component:Register
  },
  {
    path:'home',loadComponent:()=>import('./components/home/home').then(c=>c.Home),
  },
  {
    path:'admin',loadChildren:()=>import('./admin/admin-module').then((m)=>m.AdminModule)
  }
];
