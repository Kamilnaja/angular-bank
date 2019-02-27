import { Routes } from '@angular/router';
import { TransferComponent } from './transfer/transfer.component';
import { HistoryComponent } from './history/history.component';
import { DesktopComponent } from './desktop/desktop.component';

export const routes: Routes = [
    { path: 'pulpit', component: DesktopComponent },
    { path: 'przelew', component: TransferComponent },
    { path: 'historia', component: HistoryComponent }
];
