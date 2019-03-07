import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DesktopComponent} from './desktop/desktop.component';
import {HistoryComponent} from './history/history.component';
import {MainNavbarComponent} from './main-navbar/main-navbar.component';
import {ThanksScreenComponent} from './thanks-screen/thanks-screen.component';
import {InputStatusDirective} from './directives/input-status.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    HistoryComponent,
    DesktopComponent,
    ThanksScreenComponent,
    InputStatusDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
