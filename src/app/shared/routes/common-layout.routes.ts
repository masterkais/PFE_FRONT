import { AuthGuard } from './../guards/auth.guard';
import { Routes } from '@angular/router';

export const CommonLayout_ROUTES: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('../../admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard],
  },
];
