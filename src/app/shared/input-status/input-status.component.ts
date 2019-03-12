import {Component, ElementRef, Input} from '@angular/core';

@Component({
  templateUrl: './input-status.html',
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
