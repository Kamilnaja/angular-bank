import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
