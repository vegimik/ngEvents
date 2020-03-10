import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: "./profile.component.html",
  styles: [
    `
      em {
        float: right;
        color: E05C65;
        padding-left: 10px;
      }
      .error input {
        background-color: #e3c3c5;
      }
      .error :: -webkit-input-placeholder {
        color: #999;
      }
      .error :: -moz-placeholder {
        color: #999;
      }
      .error: -moz-placeholder {
        color: #999;
      }
      .error :: -ms-input-placeholder {
        color: #999;
      }
    `
  ]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private authService: AuthService, private router: Router) {
    //, firstName: FormControl, lastName: FormControl) {}
  }
  ngOnInit() {
    this.firstName = new FormControl(
      this.authService.currentUser.firstName,
      [Validators.required, Validators.pattern('[a-zA-Z.*]')]
    );
    this.lastName = new FormControl(
      this.authService.currentUser.lastName,
      Validators.required
    );
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  saveProfile(formValues) {
    this.authService.updateCurrentUser(
      formValues.firstName,
      formValues.lastName
    );
  }

  cancel() {
    this.router.navigate(['events']);
  }

  myFunction() {
    console.log('deri ketu kemi arritur');
    console.log(this.authService.currentUser.lastName);
  }

  validateLastName() {
    // this.profileForm.controls.lastName.invalid &&
    //   this.profileForm.controls.lastName.touched
    return  this.lastName.valid || this.lastName.untouched;
  }
  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched;
  }
  // profileForm.controls.firstName.invalid && profileForm.controls.firstName.touched
}
