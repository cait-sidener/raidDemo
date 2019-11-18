import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { RailroadAgreementService } from '../../services/railroad-agreement.service';
import { MatSort, MatTableDataSource } from '@angular/material';
import { RailroadAgreement } from '../../models/railroad-agreement';
import { AgreementInfoComponent } from '../agreement-info/agreement-info.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-railroad-agreements',
  templateUrl: './railroad-agreements.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./railroad-agreements.component.css'],

})

export class RailroadAgreementsComponent implements OnInit {
  closeResult: string;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  isCollapsed : boolean = true;

	dataSource: MatTableDataSource<RailroadAgreement>;
  displayedColumns: string[] = ['agreementNumber', 'countyName', 'railroadCompany', 'lastAgreementExp', 'location'];
  railroadSelected: any;
  showModal: boolean = false;

  constructor(private railroadAgreementService: RailroadAgreementService, private dialog: MatDialog) {

  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  onRailroadSelected() {
    this.showModal = this.railroadSelected === 1;
  }


  ngOnInit() {
	  this.railroadAgreementService.getRailroadAgreements().subscribe(results => {
		  if (!results) {
			  return;
		  }
		  this.dataSource = new MatTableDataSource(results);
		 this.dataSource.sort = this.sort;
	  })
  }

  applyFilter(filterValue: string) {
	  this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog():void {
    this.dialog.open(AgreementInfoComponent)
  }


}





