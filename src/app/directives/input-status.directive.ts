import {Directive, ElementRef, HostBinding} from '@angular/core';

@Directive({
  selector: '[appInputStatus]'
})
export class InputStatusDirective {

  @HostBinding('class')
  elementClass = 'form-input-valid';

  constructor() {
  }

}
