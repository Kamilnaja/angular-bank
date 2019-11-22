import { Routes } from '@angular/router';
import { DesktopComponent } from './desktop/desktop.component';
import { HistoryComponent } from './history/history.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountFormResolver } from './resolvers/AccontFormResolver';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/pulpit',
        pathMatch: 'full'
    },
    {
        path: 'pulpit',
        component: DesktopComponent,
        resolve: {
          account: AccountFormResolver
        }
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
