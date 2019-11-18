import { Component, OnInit, Input,  ViewEncapsulation } from '@angular/core';
import { AgreementInfo } from '../../models/agreement-info';
import { AgreementInfoService } from '../../services/agreement-info.service';

@Component({
  selector: 'app-agreement-info',
  templateUrl: './agreement-info.component.html',
  styleUrls: ['./agreement-info.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AgreementInfoComponent implements OnInit {
  agreementInfo$: AgreementInfo[];
  _railroadId: number = 1
  @Input()
  set railroadId(railroadId: number) {
    this._railroadId = railroadId || 1;
  }
  get railroadId() {
    return this._railroadId;
  }

  constructor(private agreementInfoService: AgreementInfoService) {
   }

  ngOnInit() {

    return this.agreementInfoService.getAgreementInfo()
    .subscribe(data => this.agreementInfo$ = data);
  }

}

