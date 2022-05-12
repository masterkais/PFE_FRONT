import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from 'src/app/shared/services/group.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  nrSelect = 1;
  editForm?: FormGroup;
  Demande: any = [];
  group$: any;
  user: any;
  id: number;
  selectedValue = null;
  groups: any = [];
  idClient?: number;
  constructor(
    private datePipe: DatePipe,
    private router: Router,
    private groupService: GroupService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.idClient = this.activatedRoute.snapshot.params.idClient;
  }
  submit() {
    if(this.editForm?.invalid) return;
     this.id = this.editForm.value.group;
    this.groupService.getById(this.id).subscribe((res) => {
      this.group$ = res;
    });
    const myDate = this.editForm.value.dateNaissanced;
    var maDate = this.datePipe.transform(myDate, 'yyyy-MM-ddT14:20:29');
    let data = {
      id:this.idClient,
      firstName: this.editForm.value.firstName,
      lastName: this.editForm.value.lastName,
      userName: this.editForm.value.userName,
      password: this.editForm.value.password,
      cin: this.editForm.value.cin,
     // groups: [this.group$],
      dateNaissanced: maDate,
      dateCreated: new Date(),
      adress: this.editForm.value.adress,
      fax: null,
      email: this.editForm.value.email,
      city: null,
      picture: null,
      active: true,
    };
    this.userService.edit(data).subscribe((res) => {
      this.router.navigateByUrl('/admin/clients');
    }); 
  }

  ngOnInit(): void {
    
   
    this.userService.getById(this.idClient).subscribe(
      (user)=>{
 
   
   
        this.editForm=this.formBuilder.group({
          firstName:[user.firstName,Validators.required],
          lastName: [user.lastName, Validators.required],
          email: [user.email, Validators.required],
          userName: [user.userName, Validators.required],
          cin: [user.cin, Validators.required],
          adress: [user.adress, Validators.required],
          password: [' ', Validators.required],
          group: ['1', Validators.required],
          
        })
      }
    );
    this.groupService.getAll().subscribe((data) => {
      this.groups = data;
    });

  
  }
}
