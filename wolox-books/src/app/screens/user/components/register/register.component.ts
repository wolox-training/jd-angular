import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup;

  data: any;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.formGroup = formBuilder.group({
      'first_name': [null, Validators.required],
      'last_name': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.compose([Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}')])],
      'password_confirmation': [null, Validators.required]
    },
    {
      validators: this.equalTo
    })
  }

  ngOnInit(): void {
  }

  addUser(data) {
    this.userService.add(data.value).subscribe(
      (response: HttpResponse<Object>) => {
        if (response.status === 201) {
          console.log('success');
        } else {
          console.log(`status: ${response.status}, body: ${response.body}`);
        }
      },
      (error) => {
        console.error(`status: ${error.status}, error: ${error.message}`);
      });
  }

  equalTo(formGroup: FormGroup) {
    return formGroup.get('password').value === formGroup.get('password_confirmation').value ? null : { notSame: true }  
  }

}
