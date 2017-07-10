import {Directive, Input} from '@angular/core';
import {AbstractControl, FormControl, NG_VALIDATORS, ValidatorFn} from '@angular/forms';

function validateEmail(emailPattern: RegExp): ValidatorFn {
  return (c: AbstractControl) => {
    return emailPattern.test(c.value) ? null : {
      valid: false
    };
  };
}

@Directive({
  selector: '[appValidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: ValidatorDirective, multi: true}
  ]
})
export class ValidatorDirective {
  emailPattern = new RegExp('[a-zA-Z0-9]+@[a-z]+\.(com|in)');

  validator: ValidatorFn;
  @Input() autoiqConflictValidator: number;

  constructor() {
    this.validator = validateEmail(this.emailPattern);
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

}


// @Directive({
//   selector: '[appValidator1]',
//   providers: [
//     {
//       provide: NG_VALIDATORS, useValue: (c: FormControl) => {
//       return {valid: true}
//     },
//       multi: true
//     }
//   ]
// })
// export class ValidatorDirective1 {
//   // emailPattern = new RegExp('/^[a-zA-Z0-9]+@[a-z]+\.(com|in)$/');
//   //
//   // validator: ValidatorFn;
//   // @Input() autoiqConflictValidator: number;
//   //
//   // constructor() {
//   //   this.validator = validateEmail(this.emailPattern);
//   // }
//   //
//   // validate(c: FormControl) {
//   //   return this.validator(c);
//   // }
//
// }
