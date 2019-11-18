import { Injectable } from '@angular/core';
import { Consultants } from '../models/consultants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultantsService {

  private _url: string = 'https://my-json-server.typicode.com/cait-sidener/consultants/consultants';

  constructor(private http: HttpClient) { }

  getConsultantInfo(): Observable<Consultants[]> {
	  return this.http.get<Consultants[]>(this._url);
  }}
