import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworkRoutingModule } from './network-routing.module';
import { NetworkComponent } from './network/network.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [NetworkComponent],
  imports: [
    CommonModule,
    NetworkRoutingModule,
    SharedModule
  ]
})
export class NetworkModule { }
