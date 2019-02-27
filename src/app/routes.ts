import { Routes } from '@angular/router';
import { DesktopComponent } from './desktop/desktop.component';
import { HistoryComponent } from './history/history.component';

export const routes: Routes = [
    {
        path: 'pulpit',
        component: DesktopComponent
    },
    {
        path: 'przelew',
        loadChildren: './transfer/transfer.module#TransferModule'
    },
    {
        path: 'historia', component: HistoryComponent
    }
];
