import { AbstractControl } from "@angular/forms/src/model";
import { ValidationErrors } from "@angular/forms";



export class PasswordValidators {
    static passwordsDoNotMatch(control: AbstractControl) : ValidationErrors | null {
        let newPassword = control.get('newPassword').value;
        let newPasswordRepeat = control.get('newPasswordRepeat').value;
        if(newPassword!=newPasswordRepeat) 
            return {passwordsDoNotMatch: true};
        else 
            return null;
    }

    static invalidOldPassword(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value!='1234')
                    resolve({invalidOldPassword: true});
                else
                    resolve(null);
            }, 2000);
        });
    }
}