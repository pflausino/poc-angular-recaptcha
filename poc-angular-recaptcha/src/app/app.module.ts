import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { RecaptchaModule, RecaptchaFormsModule  } from 'ng-recaptcha';
import { HttpClientModule  } from '@angular/common/http';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations : [ AppComponent ],
  imports : [
    BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule,
    FormsModule, BrowserAnimationsModule,

    RecaptchaModule,      // this is the recaptcha main module
    RecaptchaFormsModule, // this is the module for form incase form validation
  ],
  providers : [],
  bootstrap : [ AppComponent ]
})
export class AppModule {
}
