import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms/';
import {RouterModule, Routes} from '@angular/router';
import {OneTimeTransferComponent} from './one-time-transfer.component';
import {TooltipDirective} from 'src/app/tooltip.directive';
import {TransferOptionCardComponent} from './transfer-option-card/transfer-option-card.component';
import {ButtonsComponent} from './buttons/buttons.component';

const routes: Routes = [
  {
    path: '', component: OneTimeTransferComponent
  }
];

@NgModule({
  declarations: [
    OneTimeTransferComponent,
    TooltipDirective,
    TransferOptionCardComponent,
    ButtonsComponent
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
export class OneTimeTransferModule {
}
