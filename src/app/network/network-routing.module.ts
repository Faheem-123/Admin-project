import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../shared/layout/layout.component';
import { NetworkComponent } from './network/network.component';

const routes: Routes = [
  {
    path:"",component:NetworkComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetworkRoutingModule { }
