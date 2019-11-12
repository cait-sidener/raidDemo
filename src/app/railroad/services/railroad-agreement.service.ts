import { Injectable } from '@angular/core';
import { RailroadAgreement } from '../models/railroad-agreement';
import { Observable, throwError } from 'rxjs';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RailroadAgreementService {

	private _url: string = 'https://my-json-server.typicode.com/cait-sidener/raid-railroad/railroadAgreement';
	constructor(private http: HttpClient) { }

	getRailroadAgreements(): Observable<RailroadAgreement[]> {
		return this.http.get<RailroadAgreement[]>(this._url).pipe(
			tap(data => console.log(data)), catchError (this.handleError)
		);
	}

	private handleError(err: HttpErrorResponse) {
		let errorMessage = '';
		if (err.error instanceof ErrorEvent) errorMessage = `Error: ${err.error.message}.`
		else errorMessage = `Status Code: ${err.status}, Error: ${err.message}.`
		return throwError(errorMessage);
	}
}
