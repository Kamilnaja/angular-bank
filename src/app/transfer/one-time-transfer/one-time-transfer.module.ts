import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms/';
import {RouterModule, Routes} from '@angular/router';
import {OneTimeTransferComponent} from './one-time-transfer.component';
import {TooltipDirective} from 'src/app/directives/tooltip.directive';
import {TransferOptionCardComponent} from './transfer-option-card/transfer-option-card.component';
import {ButtonsComponent} from './buttons/buttons.component';
import {RestrictCurrencyDirective} from '../../directives/restrict-currency.directive';
import {InputStatusComponent} from '../../shared/input-status/input-status.component';

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
    ButtonsComponent,
    RestrictCurrencyDirective,
    InputStatusComponent
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
