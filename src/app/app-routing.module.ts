import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path:'',component:LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'offer-category',
        loadChildren: () => import('./offer/offer.module').then(m => m.OfferModule)
      },
      {
        path: 'network',
        loadChildren: () => import('./network/network.module').then(m => m.NetworkModule)
      },
    ]
  }, 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
