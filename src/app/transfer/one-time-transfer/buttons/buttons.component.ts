import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  @Input() transferForm: any; // todo - remove any
  @Output() showed = new EventEmitter<boolean>();

  cancelForm(): void {
    this.showed.emit();
  }
}
