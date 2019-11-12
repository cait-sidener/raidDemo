import { Component, OnInit, Input } from '@angular/core';
import { AgreementInfo } from '../models/agreement-info';
import { AgreementInfoService } from '../services/agreement-info.service';

@Component({
  selector: 'app-agreement-info',
  templateUrl: './agreement-info.component.html',
  styleUrls: ['./agreement-info.component.css']
})
export class AgreementInfoComponent implements OnInit {
  agreementInfo$: AgreementInfo[];
  _countyId: number = 1
  @Input()
  set countyId(countyId: number) {
    this._countyId = countyId || 1;
  }
  get countyId() {
    return this._countyId;
  }


  constructor(private agreementInfoService: AgreementInfoService) {

   }

  ngOnInit() {

    return this.agreementInfoService.getAgreementInfo()
    .subscribe(data => this.agreementInfo$ = data);
  }

}

