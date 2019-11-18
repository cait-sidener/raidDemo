import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PeopleModule } from './people/people.module';
import { RailroadModule } from './railroad/railroad.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
         MatFormFieldModule,
         MatIconModule,
         MatInputModule,
         MatSidenavModule,
         MatToolbarModule } from '@angular/material';
import { ModalComponent } from './_services/modal/modal.component';

@NgModule({
	declarations: [
		AppComponent,
		ModalComponent,

	],
	imports: [
		BrowserModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    PeopleModule,
    RailroadModule,
		AppRoutingModule,
		BrowserAnimationsModule,
	],
	entryComponents: [
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
