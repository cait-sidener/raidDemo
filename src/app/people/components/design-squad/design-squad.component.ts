import { Component, OnInit, ViewChild } from '@angular/core';
import { DesignSquadService } from '../../services/design.service';
import { MatSort, MatTableDataSource } from '@angular/material';
import { DesignSquad } from '../../models/design-squad';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-design-squad',
  templateUrl: './design-squad.component.html',
  styleUrls: ['./design-squad.component.css']
})
export class DesignSquadComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  dataSource: MatTableDataSource<DesignSquad>;
  displayedColumns: string[] = ['position', 'initials', 'first', 'last', 'email', 'phone', 'beginDate', 'endDate'];

  constructor(private designSquadService: DesignSquadService) { }

  ngOnInit() {
    this.designSquadService.getSquadInfo().subscribe(results => {
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
