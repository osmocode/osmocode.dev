import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.routes')
  },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.routes')
  }
];
