import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  @Input() transferForm: any; // todo - remove any
  @Output() showed = new EventEmitter<boolean>();

  constructor(private router: Router) {

  }

  cancelForm(): void {
    this.showed.emit();
  }
}
