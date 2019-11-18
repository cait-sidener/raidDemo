import { Component, OnInit } from '@angular/core';
import { Staff } from '../../models/staff';
import { StaffService } from '../../services/staff.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  staffComment$: Staff[];

  constructor(private staffService: StaffService) { }

  ngOnInit() {
    return this.staffService.getStaffInfo()
    .subscribe(data => this.staffComment$ = data);
  }

}
