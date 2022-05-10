import { AjoutDemandeComponent } from './demande/ajout-demande/ajout-demande.component';
import { ListDemandeComponent } from './demande/list-demande/list-demande.component';
import { EditComponent } from './clients/edit/edit.component';
import { TableComponent } from './clients/table/table.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './clients/add/add.component';

const routes: Routes = [
  { path: 'clients/add', component: AddComponent },
  { path: 'clients', component: TableComponent },
  { path: 'clients/edit/:clientID', component: EditComponent },
  //demande
  { path: 'demande', component: ListDemandeComponent },
  { path: 'demande/add', component: AjoutDemandeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
