import {Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormControlName} from '@angular/forms';

@Directive({
  selector: '[appInputStatus]'
})
export class InputStatusDirective implements OnChanges {
  @Input() formStatus: FormControlName;

  constructor(private el: ElementRef) {
  }

  @HostListener('change') ngOnChanges() {
    const info = document.querySelector('#form-input-info');
    if (info) {
      this.el.nativeElement.parentElement.removeChild(info);
    }

    let isVisible = false;
    if (!isVisible) {
      if (this.formStatus.valid) {
        this.addStatusInfo(true);
      } else if (this.formStatus.invalid) {
        this.addStatusInfo(false);
      }
    }
    isVisible = false;
  }

  private addStatusInfo(isValid: boolean) {
    const child = document.createElement('span');
    child.classList.add('validation-info');
    child.classList.add(`validation-info-valid-${isValid}`);
    if (isValid) {
      child.innerText = '✔';
    } else {
      child.innerText = '⁂';
    }

    child.id = 'form-input-info';
    this.el.nativeElement.parentNode.insertBefore(child, this.el.nativeElement);
  }
}

