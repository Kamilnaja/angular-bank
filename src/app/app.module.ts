import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DesktopComponent} from './desktop/desktop.component';
import {HistoryComponent} from './history/history.component';
import {MainNavbarComponent} from './main-navbar/main-navbar.component';
import {ThanksScreenComponent} from './thanks-screen/thanks-screen.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { AccountFormService } from './account-form/account-form.service';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    HistoryComponent,
    DesktopComponent,
    ThanksScreenComponent,
    PageNotFoundComponent,
    AccountFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AccountFormService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
