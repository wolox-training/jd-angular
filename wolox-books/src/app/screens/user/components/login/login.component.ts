import { SessionService } from '../../../../services/session.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formGroup: FormGroup;

  error: string;

  constructor(private readonly formBuilder: FormBuilder, private userService: UserService, private router: Router, private sessionService: SessionService) {
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
        console.log(response.body);
        this.sessionService.createSession(response.body['access_token']);
        this.router.navigate(['/books']);
      },
      (error) => {
        console.error(`status: ${error.status}, error: ${error.message}`);
        this.error = "Email or password are invalid.";
      }
    )    
  }

}
