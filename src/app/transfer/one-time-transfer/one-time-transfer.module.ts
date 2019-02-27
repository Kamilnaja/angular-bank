import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms/';
import { RouterModule, Routes } from '@angular/router';
import { OneTimeTransferComponent } from './one-time-transfer.component';

const routes: Routes = [
  {
    path: '', component: OneTimeTransferComponent
  }
];

@NgModule({
  declarations: [
    OneTimeTransferComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    FormBuilder
  ],
  exports: [
    ReactiveFormsModule
  ]
})
export class OneTimeTransferModule { }
