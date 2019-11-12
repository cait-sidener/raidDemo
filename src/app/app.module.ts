import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgreementInfoComponent} from './railroad/agreement-info/agreement-info.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RailroadModule } from './railroad/railroad.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule,
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
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    RailroadModule,
		AppRoutingModule,
		BrowserAnimationsModule, //Contains '**' path, must come last; import order matters
	],
	entryComponents: [
    AgreementInfoComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
