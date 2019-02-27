import { Routes, RouterModule } from '@angular/router';
import { OneTimeTransferComponent } from './one-time-transfer/one-time-transfer.component';
import { CyclicTransferComponent } from './cyclic-transfer/cyclic-transfer.component';
import { CyclicListComponent } from './cyclic-list/cyclic-list.component';
import { NgModule } from '@angular/core';
import { TransferComponent } from './transfer.component';

export const transferRoutes: Routes = [
    { path: '', component: TransferComponent },
    { path: 'onetimeTransfer', component: OneTimeTransferComponent },
    { path: 'cyclicTransfer', component: CyclicTransferComponent },
    { path: 'cyclicListTransfer', component: CyclicListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(transferRoutes)],
    exports: [RouterModule]
})
export class TransferRoutingModule { }
