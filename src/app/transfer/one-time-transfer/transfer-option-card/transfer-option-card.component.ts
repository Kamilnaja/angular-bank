import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Transfer} from '../../../interfaces/Transfer.interface';

@Component({
  selector: 'app-transfer-option-card',
  templateUrl: './transfer-option-card.component.html',
  styleUrls: ['./transfer-option-card.component.css']
})
export class TransferOptionCardComponent {
  @Input() transfer: Transfer;
  @Input() options: FormGroup;
}
