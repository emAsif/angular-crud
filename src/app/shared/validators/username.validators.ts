import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        // null or undefined check
        if (control.value) {
            if ((control.value as string).indexOf(' ') >= 0)
                return { cannotContainSpace: true };
        }

        return null;
    }
}