import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [{ path: '', component: HomeComponent }],
  },
  {
    path: 'clients',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          loadRemoteModule('mfe1', './Component').then((m) => m.HomeComponent),
      },
    ],
  },
];
