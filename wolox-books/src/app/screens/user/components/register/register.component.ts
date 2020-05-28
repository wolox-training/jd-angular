import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup;

  data: any;

  constructor(private readonly formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      'first_name': [null, Validators.required],
      'last_name': [null, Validators.required],
      'email': [null, [Validators.required, Validators.email]],
      'password': [null, [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}')]],
      'password_confirmation': [null, Validators.required]
    },
    {
      validators: this.equalTo
    })
  }

  ngOnInit(): void {
  }

  request(data) {
    console.info(Object.assign({ user: {...data.value, locale: 'en'} }));
  }

  equalTo(formGroup: FormGroup) {
    return formGroup.get('password').value === formGroup.get('password_confirmation').value ? null : { notSame: true }  
  }

}
