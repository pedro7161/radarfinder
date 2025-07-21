import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'radars',
    loadComponent: () => import('./components/radars/radars.component').then(m => m.RadarsComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

