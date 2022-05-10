import { ListDemandeComponent } from './demande/list-demande/list-demande.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddComponent } from './clients/add/add.component';

@NgModule({
  declarations: [AddComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
