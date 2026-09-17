import { Routes } from '@angular/router';
import { sesionGuard } from './guards/sesion.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full',
  },
  {
    path: 'bienvenida',
    loadComponent: () => import('./pages/bienvenida/bienvenida').then((a) => a.Bienvenida),
    canActivate: [sesionGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.routes'),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/error/error').then((a) => a.Error),
  },
];
