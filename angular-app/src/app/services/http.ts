import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    constructor(private _http: HttpClient) {}

    public sendBrowserData(browser: string): Observable<any> {
      return this._http.post('http://express-server-sockets.azurewebsites.net', {
        browser
      });
    }
}
