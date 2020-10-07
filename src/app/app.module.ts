import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedmoduleModule} from "./SharedModule/sharedmodule.module";

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
   SharedmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
