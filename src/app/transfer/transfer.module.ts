import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OneTimeTransferComponent } from './one-time-transfer/one-time-transfer.component';
import { TransferComponent } from './transfer.component';
import { CyclicTransferComponent } from './cyclic-transfer/cyclic-transfer.component';
import { CyclicListComponent } from './cyclic-list/cyclic-list.component';

@NgModule({
  declarations: [
    TransferComponent,
    OneTimeTransferComponent,
    CyclicTransferComponent,
    CyclicListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    TransferComponent
  ]
})
export class TransferModule { }
