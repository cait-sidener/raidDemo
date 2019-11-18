import { Component, OnInit, ViewChild } from '@angular/core';
import { ConsultantsService } from '../../services/consultants.service';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Consultants } from '../../models/consultants';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-consultants',
  templateUrl: './consultants.component.html',
  styleUrls: ['./consultants.component.css']
})
export class ConsultantsComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  dataSource: MatTableDataSource<Consultants>;
  displayedColumns: string[] = ['companyName', 'section', 'active', 'website'];

  constructor(private consultantsService: ConsultantsService) { }

  ngOnInit() {
    this.consultantsService.getConsultantInfo().subscribe(results => {
      if (!results) {
        return;
      }
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
