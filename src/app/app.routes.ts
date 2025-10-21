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
    path:'home',component:Home
  }
];
