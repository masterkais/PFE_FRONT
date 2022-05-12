import { EnvoyerDemandeComponent } from './demande/envoyer-demande/envoyer-demande.component';
import { AjoutDemandeComponent } from './demande/ajout-demande/ajout-demande.component';
import { ListDemandeComponent } from './demande/list-demande/list-demande.component';
import { EditComponent } from './clients/edit/edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './clients/add/add.component';
import { ListClientComponent } from './clients/list-client/list-client.component';

const routes: Routes = [
  { path: 'clients/add', component: AddComponent },
  { path: 'clients', component: ListClientComponent },
  { path: 'clients/edit/:idClient', component: EditComponent },
  //demande
  { path: 'demande', component: ListDemandeComponent },
  { path: 'demande/add', component: AjoutDemandeComponent },
  { path: 'demande/envoyer', component: EnvoyerDemandeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
