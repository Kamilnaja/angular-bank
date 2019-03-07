import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {TransferComponent} from './transfer.component';
import {TransferRoutingModule} from './transfer.routes.module';
import {RouterModule} from '@angular/router';
import {InputStatusDirective} from '../directives/input-status.directive';

@NgModule({
  imports: [
    CommonModule,
    TransferRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    TransferComponent,
  ]
})
export class TransferModule {
}
