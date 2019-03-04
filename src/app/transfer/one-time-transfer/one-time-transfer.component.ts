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

  ngOnInit() {
    this.transferForm = this.fb.group({
      receiverName: ['', Validators.required],
      fromAccount: ['', Validators.required],
      toAccount: ['', Validators.required],
      amount: this.fb.group({
        value: ['', Validators.required],
        currency: ['', Validators.required]
      }),
      transferTitle: ['', Validators.required],
      realizationDate: ['', DateValidator.ptDate],
      additionalOptions: [''],
      options: this.fb.group({
        kind: ['', Validators.required]
      })
    });
  }

  handleSubmit() {
    console.log(this.transferForm.value);

  }
}
