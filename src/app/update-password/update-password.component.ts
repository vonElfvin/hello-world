import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent {

  passwordForm = new FormGroup({
    oldPassword: new FormControl('', 
      Validators.required,
      PasswordValidators.invalidOldPassword
    ),
    newPasswords: new FormGroup({
      newPassword: new FormControl('', Validators.required),
      newPasswordRepeat: new FormControl('', Validators.required)
    }, PasswordValidators.passwordsDoNotMatch)
  });
  
  get oldPassword (){
    return this.passwordForm.get('oldPassword');
  }
  
  get newPasswords () {
    return this.passwordForm.get('newPasswords');
  }
  
  get newPassword (){
    return this.newPasswords.get('newPassword');
  }

  get newPasswordRepeat (){
    return this.newPasswords.get('newPasswordRepeat');
  }

  constructor() { }
}
