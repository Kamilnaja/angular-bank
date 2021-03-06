import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CyclicTransferComponent} from './cyclic-transfer.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: '', component: CyclicTransferComponent
}];

@NgModule({
  declarations: [
    CyclicTransferComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CyclicTransferComponent
  ]
})
export class CyclicTransferModule {
}
