import { Routes } from '@angular/router';
import { TransferComponent } from './transfer/transfer.component';
import { HistoryComponent } from './history/history.component';
import { DesktopComponent } from './desktop/desktop.component';
import { OneTimeTransferComponent } from './transfer/one-time-transfer/one-time-transfer.component';
import { transferRoutes } from './transfer/transfer.routes';

export const routes: Routes = [
    { path: 'pulpit', component: DesktopComponent },
    {
        path: 'przelew', component: TransferComponent,
        children: transferRoutes
    },
    { path: 'historia', component: HistoryComponent }
];
