import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  templateUrl: "./one-time-transfer.component.html",
  styleUrls: ["./one-time-transfer.component.css"]
})
export class OneTimeTransferComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  transferForm = this.fb.group({
    receiverName: [""],
    fromAccount: [""],
    toAccount: [""],
    amount: [""],
    transferTitle: [""],
    realizationDate: [""],
    transferType: [""],
    additionalOptions: [""]
  });

  ngOnInit() {}

  handleSubmit() {
    console.log(this.transferForm.value);
  }
}
