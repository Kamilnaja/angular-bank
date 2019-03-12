import {Component, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  template: `
    <span class="validation-info" *ngIf="show">
      <span *ngIf="formIsValid" class="validation-info-valid-true">
        ✔
      </span>
      <span *ngIf="!formIsValid" class="validation-info-valid-false ">
        ⁂
      </span>
    </span>`,
  selector: 'app-input-status'
})
export class InputStatusComponent {
  private _formIsValid = false;

  get formIsValid(): boolean {
    return this._formIsValid;
  }

  @Input()
  set formIsValid(formIsValid: boolean) {
    this._formIsValid = formIsValid;
  }

  private _show = false;

  get show(): boolean {
    return this._show;
  }

  @Input()
  set show(show: boolean) {
    this._show = show;
  }

  constructor(private el: ElementRef) {
  }

}
