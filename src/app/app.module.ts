import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { HistoryComponent } from './history/history.component';
import { DesktopComponent } from './desktop/desktop.component';
import { TransferModule } from './transfer/transfer.module';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    HistoryComponent,
    DesktopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TransferModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
