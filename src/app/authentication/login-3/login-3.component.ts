import { AuthenticationService } from './../../shared/services/authentication.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  templateUrl: './login-3.component.html',
})
export class Login3Component {
  loginForm: FormGroup;

  submitForm(): void {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }
    this.onLogin(this.loginForm.value);
  }

  constructor(
    private fb: FormBuilder,
    private AuthenticationService: AuthenticationService,
    private router: Router
  ) {}
  mode: number = 0;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
  onLogin(dataForm: any) {
    this.AuthenticationService.login(dataForm).subscribe(
      (resp) => {
        let jwt = resp.headers.get('Authorization');
        this.AuthenticationService.saveToken(jwt);
        this.router.navigateByUrl('/admin');
      },
      (err) => {
        this.mode = 1;
      }
    );
  }
}
