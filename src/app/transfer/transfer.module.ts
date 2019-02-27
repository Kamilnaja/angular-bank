import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TransferComponent } from './transfer.component';
import { TransferRoutingModule } from './transfer.routes.module';

@NgModule({
  imports: [
    CommonModule,
    TransferRoutingModule
  ],
  declarations: [
    TransferComponent
  ],
})
export class TransferModule { }
