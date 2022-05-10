import { Router } from '@angular/router';
import { DemandeService } from './../../../shared/services/demande.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-demande',
  templateUrl: './list-demande.component.html',
  styleUrls: ['./list-demande.component.css'],
})
export class ListDemandeComponent implements OnInit {
  public listOfData: any = [];
  constructor(private demandeService: DemandeService, private router: Router) {}

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.demandeService.getAll().subscribe((dataa) => {
      this.listOfData = dataa;
      console.log(dataa);
    });
  }
  accepteDemande(id: any) {
    this.demandeService.AccepterDemande(id).subscribe((res) => {
      this.ngOnInit();
    });
  }

  refusDemande(id: any) {
    this.demandeService.RefuserDemande(id).subscribe((res) => {
      this.ngOnInit();
    });
  }

  EnvoyerDemande(id: any) {
    /* this.demandeService.EnvoyerDemande(id).subscribe((res) => {
      this.ngOnInit();
    }); */
    this.router.navigateByUrl('/admin/demande/envoyer');
  }
}
