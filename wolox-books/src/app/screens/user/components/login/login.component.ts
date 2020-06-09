import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formGroup: FormGroup;

  error: string;

  constructor(private readonly formBuilder: FormBuilder, private userService: UserService) {
    this.formGroup = formBuilder.group({
      'email': [null, [Validators.required, Validators.email]],
      'password': [null, [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}')]]
    });
  }

  get email() {
    return this.formGroup.controls.email;
  }

  get password() {
    return this.formGroup.controls.password;
  }

  login(values) {
    this.userService.login(values).subscribe(
      (response: HttpResponse<Object>) => {
        console.log(response.body['access_token']);
      },
      (error) => {
        console.error(`status: ${error.status}, error: ${error.message}`);
        this.error = "Email or password are invalid.";
      }
    )    
  }

}
