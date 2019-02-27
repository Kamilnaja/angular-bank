import { Routes } from '@angular/router';
import { OneTimeTransferComponent } from './one-time-transfer/one-time-transfer.component';
import { CyclicTransferComponent } from './cyclic-transfer/cyclic-transfer.component';
import { CyclicListComponent } from './cyclic-list/cyclic-list.component';

export const transferRoutes: Routes = [
    { path: '', redirectTo: 'onetimeTransfer', pathMatch: 'full' },
    { path: 'onetimeTransfer', component: OneTimeTransferComponent },
    { path: 'cyclicTransfer', component: CyclicTransferComponent },
    { path: 'cyclicListTransfer', component: CyclicListComponent }
];
