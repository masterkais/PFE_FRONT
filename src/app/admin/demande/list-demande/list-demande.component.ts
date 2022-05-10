import { DemandeService } from './../../../shared/services/demande.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-demande',
  templateUrl: './list-demande.component.html',
  styleUrls: ['./list-demande.component.css'],
})
export class ListDemandeComponent implements OnInit {
  public listOfData: any = [];
  constructor(private demandeService: DemandeService) {}

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.demandeService.getAll().subscribe((dataa) => {
      this.listOfData = dataa;
      console.log(dataa);
    });
  }
  onEdit(data: any) {}
  onDelete(data: any) {}
}
