import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';

import { FullLayout_ROUTES } from './shared/routes/full-layout.routes';
import { CommonLayout_ROUTES } from './shared/routes/common-layout.routes';

import { LandingPage_ROUTES } from './shared/routes/landing-page.routes';
import { LandingPageComponent } from './layouts/landing-page/landing-page.component';

const appRoutes: Routes = [
  /*   {
        path: '',
        redirectTo: '/admin/home',
        pathMatch: 'full',
    }, */
 /*    {
        path: 'admin',
        redirectTo: '/auth/login',
        pathMatch: 'full',
    }, */
  {
    path: '',
    redirectTo: '/homePage',
    pathMatch: 'full',
  },
  {
    path: '',
    component: CommonLayoutComponent,
    children: CommonLayout_ROUTES,
  },
  {
    path: '',
    component: LandingPageComponent,
    children: LandingPage_ROUTES,
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: FullLayout_ROUTES,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules,
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
