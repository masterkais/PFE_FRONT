import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ListClientComponent } from './list-client/list-client.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    ListClientComponent
  ],
  imports: [
    NzTableModule,
    CommonModule,
    ClientsRoutingModule,
    DatePipe,
    ReactiveFormsModule,
  
  ]
})
export class ClientsModule { }
