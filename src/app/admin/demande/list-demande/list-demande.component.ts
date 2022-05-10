import { DemandeService } from './../../../shared/services/demande.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-demande',
  templateUrl: './list-demande.component.html',
  styleUrls: ['./list-demande.component.css'],
})
export class ListDemandeComponent implements OnInit {
  public data: any = [];
  constructor(private demandeService: DemandeService) {}

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    /*   this.demandeService.getAll().subscribe(
      (dataa) => {
        this.data = dataa;
      }
    ); */
    this.demandeService.getAll().subscribe((dataa) => {
      this.data = dataa;
      console.log(dataa);
    });
  }
  onEdit(data: any) {}
  onDelete(data: any) {}
}
