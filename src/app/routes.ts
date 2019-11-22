import { Routes } from '@angular/router';
import { DesktopComponent } from './desktop/desktop.component';
import { HistoryComponent } from './history/history.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/pulpit',
        pathMatch: 'full'
    },
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
    },
    {
        path: '**', component: PageNotFoundComponent
    }
];
