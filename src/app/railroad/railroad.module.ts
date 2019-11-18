import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RailroadRoutingModule } from './railroad-routing.module';
import { RailroadHomeComponent } from './components/railroad-home/railroad-home.component';
import { MatCardModule,
		 MatDialogModule,
     MatFormFieldModule,
     MatGridListModule,
		 MatIconModule,
		 MatInputModule,
		 MatMenuModule,
     MatTableModule,
		 MatSortModule,
	   } from '@angular/material';
import { RailroadAgreementsComponent } from './components/railroad-agreements/railroad-agreements.component';
import { RailroadAgreementService } from './services/railroad-agreement.service';
import { AgreementInfoService } from './services/agreement-info.service';
import { AgreementInfoComponent } from './components/agreement-info/agreement-info.component';

@NgModule({
	declarations: [
	  RailroadHomeComponent,
	  RailroadAgreementsComponent,
	  AgreementInfoComponent
	],
	imports: [
	  BrowserAnimationsModule,
	  CommonModule,
	  RailroadRoutingModule,
	  FormsModule,
	  ReactiveFormsModule,
	  MatCardModule,
	  MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
	  MatIconModule,
	  MatInputModule,
	  MatMenuModule,
    MatTableModule,
    MatSortModule,
	],
	providers: [RailroadAgreementService,
				AgreementInfoService
	],
	entryComponents: [
		AgreementInfoComponent
	]
  })
  export class RailroadModule { }
