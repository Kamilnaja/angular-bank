import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneTimeTransferComponent } from './one-time-transfer.component';
import { ReactiveFormsModule } from '@angular/forms/';

@NgModule({
  declarations: [
    OneTimeTransferComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    OneTimeTransferComponent
  ]
})
export class OneTimeTransferModule { }
