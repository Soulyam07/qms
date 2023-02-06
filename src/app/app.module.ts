import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CallComponent } from './ticket/call/call.component';
import { DisplayComponent } from './ticket/display/display.component';
import { KioskComponent } from './ticket/kiosk/kiosk.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {RouterModule, Routes} from "@angular/router";
import {TicketModule} from "./ticket/ticket.module";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ConnexionComponent } from './admin/component/connexion/connexion.component';



@NgModule({
  declarations: [
    AppComponent,
    KioskComponent,
    CallComponent,
    DisplayComponent,
    HomeComponent,
    ConnexionComponent

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
