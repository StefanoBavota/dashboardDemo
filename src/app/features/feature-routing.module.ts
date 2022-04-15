import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { FeaturesComponent } from './features.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'demo',
        loadChildren: () => import('./demo/demo.module').then((m) => m.DemoModule),
      },
      {
        path: 'client',
        loadChildren: () => import('./client/client.module').then((m) => m.ClientModule),
      },
      {
        path: 'area',
        loadChildren: () => import('./area/area.module').then((m) => m.AreaModule),
      },
      {
        path: 'payment',
        loadChildren: () =>
          import('./payment/payment.module').then((m) => m.PaymentModule),
      },
      {
        path: 'society',
        loadChildren: () =>
          import('./society/society.module').then((m) => m.SocietyModule),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./admin-user/admin-user.module').then((m) => m.AdminUserModule),
          canActivate: [AdminGuard],
      },
      {
        path: 'profile',
        loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
