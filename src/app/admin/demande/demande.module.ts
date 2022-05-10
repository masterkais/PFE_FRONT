import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandeRoutingModule } from './demande-routing.module';
import { ListDemandeComponent } from './list-demande/list-demande.component';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    DemandeRoutingModule,
    NzTableModule
  ]
})
export class DemandeModule { }
