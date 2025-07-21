import { Routes } from '@angular/router';
import { RadarsComponent } from './components/radars/radars.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'radar',
    pathMatch: 'full'
  },
  {
    path: 'radar',
    loadComponent: () => import('./components/radars/radars.component').then(m => m.RadarsComponent)
  },
  {
    path: '**',
    redirectTo: 'radar'
  }
];

