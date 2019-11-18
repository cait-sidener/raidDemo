import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeopleRoutingModule } from './people-routing.module';
import { ConsultantsComponent } from './components/consultants/consultants.component';
import { DesignSquadComponent } from './components/design-squad/design-squad.component';
import { StaffComponent } from './components/staff/staff.component';
import { ConsultantsService } from './services/consultants.service';
import { DesignSquadService } from './services/design.service';
import { StaffService } from './services/staff.service';

import { MatCardModule,
         MatFormFieldModule,
         MatIconModule,
         MatInputModule,
         MatPaginatorModule,
         MatSortModule,
         MatTableModule,
        } from '@angular/material';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
	declarations: [
    CommentsComponent,
    ConsultantsComponent,
    DesignSquadComponent,
    StaffComponent
	],
	imports: [
	  BrowserAnimationsModule,
    CommonModule,
    PeopleRoutingModule,

    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,

	],
	providers: [
    ConsultantsService,
    DesignSquadService,
    StaffService
	],
	entryComponents: [
    CommentsComponent
	]
  })
  export class PeopleModule { }
