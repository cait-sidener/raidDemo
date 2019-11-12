import { Injectable } from '@angular/core';
import { AgreementInfo } from '../models/agreement-info';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgreementInfoService {
	private _url: string = 'https://my-json-server.typicode.com/cait-sidener/raid-railroad/agreementInfo';

  constructor(private http: HttpClient) { }

  getAgreementInfo(): Observable<AgreementInfo[]> {
	  return this.http.get<AgreementInfo[]>(this._url);
  }
}
