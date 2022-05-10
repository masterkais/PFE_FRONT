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

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      demande_name_societe: new FormControl('', [Validators.required]),
      demande_type: new FormControl('', [Validators.required]),
      demande_matricule_fiscal_societe: new FormControl('', [
        Validators.required,
      ]),
    });
    /* this.CategoryService.getAll().subscribe((data: Category[]) => {
      this.Category = data;
      console.log(this.Category);
    }); */
  }
  get f() {
    return this.form.controls;
  }
  submit() {
    console.log(this.form.valid);

    /*   this.ProductService.create(this.form.value).subscribe((res) => {
      console.log('Product created successfully!');
      this.router.navigateByUrl('product/index');
    }); */
  }
}
