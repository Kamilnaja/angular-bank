import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DateValidator} from 'src/app/validators/DateValidator';
import * as transfers from 'src/app/models/TransferList.json';
import {currencyList} from 'src/app/models/CurrencyList';

@Component({
  templateUrl: './one-time-transfer.component.html',
  styleUrls: ['./one-time-transfer.component.css']
})
export class OneTimeTransferComponent implements OnInit {
  public currencyList: String[] = currencyList;
  isModalVisible = false;
  private transferForm: FormGroup;
  private transferList;

  constructor(private fb: FormBuilder) {
  }

  get TodayDate(): string {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDay()}`;
  }

  ngOnInit() {
    this.transferList = transfers;
    this.transferForm = this.fb.group({
      receiverName: ['a', Validators.required],
      fromAccount: ['a', Validators.required],
      toAccount: ['a', Validators.required],
      amount: this.fb.group({
        value: ['1', Validators.required],
        currency: ['PLN', Validators.required]
      }),
      transferTitle: ['a', Validators.required],
      realizationDate: ['', DateValidator.ptDate],
      additionalOptions: ['a'],
      options: this.fb.group({
        kind: ['a', Validators.required]
      })
    });
  }

  handleSubmit() {
    console.log(this.transferForm.value);
  }

  onShowed() {
    console.log('showed and emitted');
    this.isModalVisible = true;
  }
}
