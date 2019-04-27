import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateValidator } from 'src/app/validators/DateValidator';
import * as transfers from 'src/app/models/TransferList.json';
import { currencyList } from 'src/app/models/CurrencyList';

@Component({
  templateUrl: './one-time-transfer.component.html',
  styleUrls: ['./one-time-transfer.component.css']
})
export class OneTimeTransferComponent implements OnInit {
  public currencyList: String[] = currencyList;
  isModalVisible = false;
  public transferForm: FormGroup;
  public transferList;

  constructor(private fb: FormBuilder) {
  }

  get TodayDate(): string {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDay()}`;
  }

  get receiverName() {
    return this.transferForm.get('receiverName');
  }

  handleSubmit() {
    console.log(this.transferForm.value);
  }

  onShowed() {
    console.log('showed and emitted');
    this.isModalVisible = true;
  }

  get fromAccount() {
    return this.transferForm.get('fromAccount');
  }

  get toAccount() {
    return this.transferForm.get('toAccount');
  }

  get amount() {
    return this.transferForm.get('amount');
  }

  get realizationDate() {
    return this.transferForm.get('realizationDate');
  }

  get options() {
    return this.transferForm.get('options');
  }

  get pesel() {
    return this.transferForm.get('pesel');
  }

  ngOnInit() {
    this.transferList = transfers;
    this.setupForm();
  }


  private setupForm() {
    this.transferForm = this.fb.group({
      receiverName: ['', Validators.required],
      fromAccount: ['', Validators.required],
      toAccount: ['', Validators.required],
      amount: this.fb.group({
        value: ['', Validators.required],
        currency: ['PLN', Validators.required]
      }),
      pesel: ['', Validators.required],
      transferTitle: ['a', Validators.required],
      realizationDate: ['', DateValidator.ptDate],
      additionalOptions: ['a'],
      options: this.fb.group({
        kind: ['a', Validators.required]
      })
    });
  }
}
