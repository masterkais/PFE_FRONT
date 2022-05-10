import { Routes, RouterModule } from '@angular/router';

export const LandingPage_ROUTES: Routes = [
  {
    path: 'homePage',
    loadChildren: () =>
      import('../../landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
  },
];
