import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandeRoutingModule } from './demande-routing.module';
import { ListDemandeComponent } from './list-demande/list-demande.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AjoutDemandeComponent } from './ajout-demande/ajout-demande.component';
import { EnvoyerDemandeComponent } from './envoyer-demande/envoyer-demande.component';

@NgModule({
  declarations: [
    ListDemandeComponent,
    AjoutDemandeComponent,
    EnvoyerDemandeComponent,
  ],
  imports: [CommonModule, DemandeRoutingModule, NzTableModule],
})
export class DemandeModule {}
