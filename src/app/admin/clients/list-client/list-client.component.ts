import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  public listOfData: any = [];
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.userService.getAll().subscribe((dataa) => {
      this.listOfData = dataa;
      console.log(dataa);
    });
  }
  onEdit(user:any){
this.router.navigateByUrl("admin/clients/edit/"+user.id);
  }
  onDelete(user:any){
    let v = confirm('Etes vous sure ?');
    if (v == true) {
      this.userService.delete(user).subscribe((data) => {
        this.getAll();
      });
    }
  }
}
