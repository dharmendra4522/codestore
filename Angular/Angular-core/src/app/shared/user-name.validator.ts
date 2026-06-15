import { AbstractControl } from "@angular/forms";


// custom validator function to check for forbidden names in a form control
export function forbiddenNameValidator(control: AbstractControl): {[key: string]: any} | null {
    const forbidden = /admin/.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
}