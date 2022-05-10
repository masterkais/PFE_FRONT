import { DemandeService } from './../../../shared/services/demande.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ajout-demande',
  templateUrl: './ajout-demande.component.html',
  styleUrls: ['./ajout-demande.component.css'],
})
export class AjoutDemandeComponent implements OnInit {
  form: FormGroup;
  Demande: any[] = [];
  selectedValue = null;

  constructor(private router: Router, private DemandeService: DemandeService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      demande_name_societe: new FormControl('', [Validators.required]),
      demande_type: new FormControl('', [Validators.required]),
      demande_matricule_fiscal_societe: new FormControl('', [
        Validators.required,
      ]),
    });
  }
  get f() {
    return this.form.controls;
  }
  submit() {
    let data = {
      matriculeFiscalSociete: this.form.value.demande_matricule_fiscal_societe,
      nameSociete: this.form.value.demande_name_societe,
      type: this.form.value.demande_type,
      state: 0,
      dateCreated: new Date(),
    };

    this.DemandeService.saveDemande(data).subscribe((res) => {
      this.router.navigateByUrl('/admin/demande');
    });
  }
}
