import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './core/guards/admin.guard';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'demo',
    loadChildren: () => import('./features/demo/demo.module').then(m => m.DemoModule),

  },
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule),
  },
  {
    path: '',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'client',
    loadChildren: () => import('./features/client/client.module').then(m => m.ClientModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'area',
    loadChildren: () => import('./features/area/area.module').then(m => m.AreaModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'payment',
    loadChildren: () => import('./features/payment/payment.module').then(m => m.PaymentModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'society',
    loadChildren: () => import('./features/society/society.module').then(m => m.SocietyModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./features/admin-user/admin-user.module').then(m => m.AdminUserModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./features/user/user.module').then(m => m.UserModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
