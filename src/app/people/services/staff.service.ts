import { Injectable } from '@angular/core';
import { Staff } from '../models/staff';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private _url: string = 'https://my-json-server.typicode.com/cait-sidener/staff/staff';

  constructor(private http: HttpClient) {}

  getStaffInfo(): Observable<Staff[]> {
    return this.http.get<Staff[]>(this._url);
  }
}

