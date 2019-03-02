import {Component, Input, OnInit} from '@angular/core';
import {Transfer} from '../../../interfaces/Transfer.interface';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-transfer-option-card',
  templateUrl: './transfer-option-card.component.html',
  styleUrls: ['./transfer-option-card.component.css']
})
export class TransferOptionCardComponent implements OnInit {
  @Input() transfer: Transfer;
  @Input() formGroup: FormGroup;
  transferForm = this.fb.group({
    transferType: new FormControl('')
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

}
