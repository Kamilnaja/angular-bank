import {FormControl} from '@angular/forms';

export class DateValidator {
  static ptDate(control: FormControl): { [key: string]: any } {
    let ptDatePattern2 = /\d{4}-\d{2}-\d{2}/;

    if (!control.value.match(ptDatePattern2)) {
      return {'ptDate': true};
    }

    return null;
  }
}
