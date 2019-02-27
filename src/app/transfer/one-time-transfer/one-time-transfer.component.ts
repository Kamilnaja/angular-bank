import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './one-time-transfer.component.html',
  styleUrls: ['./one-time-transfer.component.css']
})
export class OneTimeTransferComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  transferGroup = this.fb.group({
    receiverName: ['']
  });
  ngOnInit() {
  }

}
