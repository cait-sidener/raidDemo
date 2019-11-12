import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RailroadRoutingModule } from './railroad-routing.module';
import { RailroadHomeComponent } from './railroad-home/railroad-home.component';
import { MatCardModule,
		 MatDialogModule,
		 MatFormFieldModule,
		 MatIconModule,
		 MatInputModule,
		 MatMenuModule,
     MatTableModule,
     MatTreeModule,
		 MatSortModule,
     MatTree,
	   } from '@angular/material';
import { RailroadAgreementsComponent } from './railroad-agreements/railroad-agreements.component';
import { AgreementInfoComponent } from './agreement-info/agreement-info.component';
import { RailroadAgreementService } from './services/railroad-agreement.service';
import { AgreementInfoService } from './services/agreement-info.service';

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
	  MatIconModule,
	  MatInputModule,
	  MatMenuModule,
    MatTableModule,
    MatTreeModule,
    MatSortModule,
    NgbModalModule,
	],
	providers: [RailroadAgreementService,
				AgreementInfoService
	],
	entryComponents: [
		AgreementInfoComponent
	]
  })
  export class RailroadModule { }
