import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Transfer} from 'src/app/interfaces/Transfer.interface';

@Component({
  templateUrl: './one-time-transfer.component.html',
  styleUrls: ['./one-time-transfer.component.css']
})
export class OneTimeTransferComponent implements OnInit {
  transferForm = this.fb.group({
    receiverName: [''],
    fromAccount: [''],
    toAccount: [''],
    amount: [''],
    transferTitle: [''],
    realizationDate: [''],
    additionalOptions: [''],
    transferType: [''],
  });

  transferList: Transfer[] = [
    {
      title: 'Standardowy przelew Elixir',
      data: 'Dziś wieczorem',
      price: 'Opłata 1.50'
    },
    {
      title: 'Ekspresowy do 5000 pln',
      data: 'Nawet do 15 minut',
      price: 'Opłata 10'
    },
    {
      title: 'Ekspresowy SORBNET bez limitu',
      data: 'Nawet za 15 minut',
      price: 'Opłata 40'
    }
  ];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  handleSubmit() {
    console.log(this.transferForm.value);
  }
}
