import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms/';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    FormBuilder
  ],
  exports: [
    ReactiveFormsModule
  ]
})
export class OneTimeTransferModule { }
