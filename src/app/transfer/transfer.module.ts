import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CyclicListComponent } from './cyclic-list/cyclic-list.component';
import { CyclicTransferComponent } from './cyclic-transfer/cyclic-transfer.component';
import { OneTimeTransferComponent } from './one-time-transfer/one-time-transfer.component';
import { TransferComponent } from './transfer.component';
import { TransferRoutingModule } from './transfer.routes.module';

@NgModule({
  imports: [
    CommonModule,
    TransferRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    TransferComponent,
    OneTimeTransferComponent,
    CyclicListComponent,
    CyclicTransferComponent
  ]
})
export class TransferModule { }
