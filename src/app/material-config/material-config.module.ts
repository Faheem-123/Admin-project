import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    MatPaginatorModule
  ],
  exports:[
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    MatPaginatorModule
  ]
})
export class MaterialConfigModule { }
