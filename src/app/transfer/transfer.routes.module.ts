import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferComponent } from './transfer.component';

export const transferRoutes: Routes = [
    {
        path: '', component: TransferComponent,
        children: [{ path: 'onetimeTransfer', loadChildren: './one-time-transfer/one-time-transfer.module#OneTimeTransferModule' }]

    },
    // { path: 'cyclicTransfer', component: CyclicTransferComponent },
    // { path: 'cyclicListTransfer', component: CyclicListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(transferRoutes)],
    exports: [RouterModule]
})
export class TransferRoutingModule { }
