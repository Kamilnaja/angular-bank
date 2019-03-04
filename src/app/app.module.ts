import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DesktopComponent} from './desktop/desktop.component';
import {HistoryComponent} from './history/history.component';
import {MainNavbarComponent} from './main-navbar/main-navbar.component';
import {ThanksScreenComponent} from './thanks-screen/thanks-screen.component';
import {ButtonsComponent} from './transfer/one-time-transfer/buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    HistoryComponent,
    DesktopComponent,
    ThanksScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
