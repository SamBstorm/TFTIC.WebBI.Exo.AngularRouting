import { ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';

export function yearsOldValidator(yearsOld : number) : ValidatorFn{
    return function(control : AbstractControl) : ValidationErrors | null{
        let birthdate : Date = new Date(control.value);
        let ms : number = Date.now() - birthdate.getTime();
        let year = new Date(ms).getFullYear() - new Date(0).getFullYear();
        return (year < yearsOld)? {message : 'Too young', value : year} : null;
    }
}