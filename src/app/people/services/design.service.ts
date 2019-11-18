import { Injectable } from '@angular/core';
import { DesignSquad } from '../models/design-squad';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DesignSquadService {

  private _url: string = 'https://my-json-server.typicode.com/cait-sidener/design-squad/designSquad';

  constructor(private http: HttpClient) { }

  getSquadInfo(): Observable<DesignSquad[]> {
	  return this.http.get<DesignSquad[]>(this._url);
  }}
