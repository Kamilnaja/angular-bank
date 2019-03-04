import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Transfer} from 'src/app/interfaces/Transfer.interface';
import {DateValidator} from 'src/app/validators/DateValidator';

@Component({
  templateUrl: './one-time-transfer.component.html',
  styleUrls: ['./one-time-transfer.component.css']
})
export class OneTimeTransferComponent implements OnInit {
  transferList: Transfer[] = [
    {
      title: 'Standardowy przelew Elixir',
      data: 'Dziś wieczorem',
      price: 'Opłata 1.50',
      value: 1
    },
    {
      title: 'Ekspresowy do 5000 pln',
      data: 'Nawet do 15 minut',
      price: 'Opłata 10',
      value: 2
    },
    {
      title: 'Ekspresowy SORBNET bez limitu',
      data: 'Nawet za 15 minut',
      price: 'Opłata 40',
      value: 3
    }
  ];
  public currencyList: String[] = ['PLN', 'USD'];

  private transferForm: FormGroup;


  constructor(private fb: FormBuilder) {
  }

  get TodayDate(): string {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDay()}`;
  }

  ngOnInit() {
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
}
