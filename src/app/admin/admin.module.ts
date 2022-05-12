import { EnvoyerDemandeComponent } from './demande/envoyer-demande/envoyer-demande.component';
import { AjoutDemandeComponent } from './demande/ajout-demande/ajout-demande.component';
import { ListDemandeComponent } from './demande/list-demande/list-demande.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddComponent } from './clients/add/add.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListClientComponent } from './clients/list-client/list-client.component';
import { EditComponent } from './clients/edit/edit.component';

@NgModule({
  declarations: [AddComponent,EditComponent, ListDemandeComponent,AjoutDemandeComponent, EnvoyerDemandeComponent,ListClientComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NzTableModule,
    NzDropDownModule,
    NzButtonModule,
    NzIconModule,
    NzPageHeaderModule,
    NzModalModule,
    NzInputModule,
    NzFormModule,
    NzSelectModule,
    NzAlertModule,
    NzInputNumberModule,
    
  ],
})
export class AdminModule {}
