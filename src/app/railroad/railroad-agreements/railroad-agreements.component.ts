import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { RailroadAgreementService } from '../services/railroad-agreement.service';
import { MatSort, MatTableDataSource } from '@angular/material';
import { RailroadAgreement } from '../models/railroad-agreement';
import { AgreementInfoComponent } from '../agreement-info/agreement-info.component';
import { ModalService } from '../../_services/modal/services';


@Component({
  selector: 'app-railroad-agreements',
  templateUrl: './railroad-agreements.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./railroad-agreements.component.css'],

})

export class RailroadAgreementsComponent implements OnInit {
  closeResult: string;
  countySelected: any;
  showModal: boolean = false;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

	dataSource: MatTableDataSource<RailroadAgreement>;
	displayedColumns: string[] = ['agreementNumber', 'countyName', 'railroadCompany', 'lastAgreementExp', 'location'];

  constructor(private railroadAgreementService: RailroadAgreementService, private dialog: ModalService) {

  }

  onCountySelected() {
    this.showModal = this.countySelected;
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
    this.dialog.show(AgreementInfoComponent, true, undefined, { id: 1 });
  }


}





