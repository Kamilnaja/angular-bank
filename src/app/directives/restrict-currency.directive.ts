import {Directive, ElementRef} from '@angular/core';
import {RestrictNumberDirective} from './restrict-number.directive';

@Directive({
  selector: '[appRestrictCurrency]',
})
export class RestrictCurrencyDirective extends RestrictNumberDirective {

  constructor(_el: ElementRef) {
    super(_el);
  }
}
