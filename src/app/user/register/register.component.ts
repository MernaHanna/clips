import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(
    private auth: AuthService
  ){}

  inSubmission = false;

  //angular may change the type of form control to abstract control
  // if we need to access the form controls we need to separate them to tackle this issue
  name= new FormControl('', [
    Validators.required,
    Validators.minLength(3)//minLength for strings while min is for numbers
  ]);
  // email validator has minlength and maxlength and therefore no need to add those validators here
  email= new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  age= new FormControl('', [
    Validators.required,
    Validators.min(18),
    Validators.max(120)
  ]);
  password= new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ]);
  confirmPassword= new FormControl('', [
    Validators.required,
  ]);
  phoneNumber= new FormControl('', [
    Validators.required,
    Validators.minLength(13),
    Validators.maxLength(13)
  ]);

  showAlert: boolean = false;
  alertMsg: string = 'Please wait! Your account is being created.';
  alertColor: string = 'blue';

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirmPassword: this.confirmPassword,
    phoneNumber: this.phoneNumber
  });

  async register() {
    this.showAlert = true;
    this.alertMsg = 'Please wait! Your account is being created.';
    this.alertColor = 'blue';
    this.inSubmission = true;

    try {
      await this.auth.createUser(this.registerForm.value);
    } catch (error) {
      console.log(error);

      this.alertMsg = 'An unexpected error occurred. Please try again later'
      this.alertColor = 'red';
      this.inSubmission = false
      return
    }

    this.alertMsg = 'Success! Your account has been created.'
    this.alertColor = 'green'
  }
}
