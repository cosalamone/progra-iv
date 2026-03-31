import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { HomePage } from './pages/home-page/home-page';
import { DashboardPage } from './pages/dashboard-page/dashboard-page';

/**
 * Acá se definen las rutas.
 * Asocian nombre a componentes.
 * Permite varias configuraciones
 */

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full', component: HomePage },
  { path: 'home', component: HomePage },
  { path: 'dashboard', component: DashboardPage },
];
