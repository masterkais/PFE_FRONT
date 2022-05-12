import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GroupService } from 'src/app/shared/services/group.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  form: FormGroup;
  Demande: any = [];
  group$: any;
  id: number;
  selectedValue = null;
  groups: any = [];
  constructor(
    private datePipe: DatePipe,
    private router: Router,
    private groupService: GroupService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.groupService.getAll().subscribe((data) => {
      this.groups = data;
    });
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      cin: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required]),
      dateNaissanced: new FormControl('', [Validators.required]),
      group: new FormControl('', [Validators.required]),
      adress: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
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
    this.id = this.form.value.group;
    this.groupService.getById(this.id).subscribe((res) => {
      this.group$ = res;
    });
    const myDate = this.form.value.dateNaissanced;
    var maDate = this.datePipe.transform(myDate, 'yyyy-MM-ddT14:20:29');
    let data = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      userName: this.form.value.userName,
      password: this.form.value.password,
      cin: this.form.value.cin,
      groups: [this.group$],
      dateNaissanced: maDate,
      dateCreated: new Date(),
      adress: this.form.value.adress,
      fax: null,
      email: this.form.value.email,
      city: null,
      picture: null,
      active: true,
    };
    this.userService.save(data).subscribe((res) => {
      this.router.navigateByUrl('/admin/clients');
    });

    /*   this.ProductService.create(this.form.value).subscribe((res) => {
      console.log('Product created successfully!');
      this.router.navigateByUrl('product/index');
    }); */
  }
}
