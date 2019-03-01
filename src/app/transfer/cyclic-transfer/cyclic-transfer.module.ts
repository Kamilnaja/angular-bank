import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CyclicTransferComponent} from './cyclic-transfer.component';

@NgModule({
  declarations: [
    CyclicTransferComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CyclicTransferComponent
  ]
})
export class CyclicTransferModule {
}
