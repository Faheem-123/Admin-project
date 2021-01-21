import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../shared/layout/layout.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { OfferCategoryComponent } from './offer-category/offer-category.component';

const routes: Routes = [
      {
        path:"",component:OfferCategoryComponent
      },
      {
        path:'edit-category',component:EditCategoryComponent
      }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule { }
