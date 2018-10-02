import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import {BaseLayoutComponent} from './layouts/base/base-layout.component';

export const AppRouting: Routes = [
  { path: '',
    component: AuthLayoutComponent,
    children: [{
      path: 'signin',
      loadChildren: './authentication/authentication.module#AuthenticationModule',
    }, {
      path: '',
      pathMatch: 'full',
      redirectTo: '/signin'
    }]
  }, {
    path: '',
    component: BaseLayoutComponent,
    children: [{
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule',
    }]
  }
];
