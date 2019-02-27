import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  templateUrl: './one-time-transfer.component.html',
  styleUrls: ['./one-time-transfer.component.css']
})
export class OneTimeTransferComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  transferGroup = this.fb.group({
    receiverName: ['']
  });

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  ngOnInit() {
  }

}
