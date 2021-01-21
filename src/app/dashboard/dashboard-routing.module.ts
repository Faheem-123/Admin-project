import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../shared/layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
