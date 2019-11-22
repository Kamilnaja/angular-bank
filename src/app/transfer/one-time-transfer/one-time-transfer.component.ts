import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
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
    if (this.transferForm.valid) {
      console.log(this.transferForm.value); // todo - http request
    } else {
      this.validateAllFormFields(this.transferForm);
    }
  }

  private validateAllFormFields(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
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

  get tags(): FormArray {
    return this.transferForm.get('tags') as FormArray;
  }

  ngOnInit() {
    this.transferList = transfers;
    this.setupForm();
  }

  private setupForm() {
    this.transferForm = this.fb.group({
      tags: new FormArray([]),
      receiverName: ['', Validators.required],
      fromAccount: ['', Validators.required],
      toAccount: ['', Validators.required],
      amount: this.fb.group({
        value: ['', Validators.required],
        currency: ['PLN', Validators.required]
      }),
      transferTitle: ['a', Validators.required],
      realizationDate: ['', DateValidator.ptDate],
      additionalOptions: ['a'],
      tagControl: [],

      options: this.fb.group({
        kind: ['a', Validators.required]
      })
    });
  }

  public addItem() {
    const control = this.transferForm.controls.tagControl;
    if (control.value && control.value.length) {
      const tags = this.transferForm.get('tags') as FormArray;
      tags.push(new FormControl(control.value));
      control.setValue('');
    }
  }
}
