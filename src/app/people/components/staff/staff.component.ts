import { Component, OnInit, ViewChild } from '@angular/core';
import { StaffService } from '../../services/staff.service';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Staff } from '../../models/staff';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material';
import { CommentsComponent } from '../../components/comments/comments.component';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  dataSource: MatTableDataSource<Staff>;
  displayedColumns: string[] = ['section', 'first', 'nickname', 'middle', 'last', 'initials', 'email', 'workPhone', 'active', 'star'];

  constructor(private staffService: StaffService, private dialog: MatDialog) { }

  ngOnInit() {
    this.staffService.getStaffInfo().subscribe(results => {
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

  openDialog(): void {
    this.dialog.open(CommentsComponent)
  }

 }
