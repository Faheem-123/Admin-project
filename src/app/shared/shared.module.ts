import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialConfigModule } from '../material-config/material-config.module'
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FooterComponent, LayoutComponent, SidebarComponent],
  imports: [
    CommonModule,
    MaterialConfigModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports:[
    CommonModule,
    MaterialConfigModule, 
    RouterModule,
    FlexLayoutModule,
    LayoutComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
