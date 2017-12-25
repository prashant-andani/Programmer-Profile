import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private codepenApi = 'https://cpv2api.com/pens/public/natewiley';
  userData = {};
  
  // URL to web API
  constructor(private http: Http) { }

  getPens(): Observable<any> {
      return this.http.get(this.codepenApi)
          .map(this.extractData)
          .catch(this.handleError);
  }

  private extractData(res: Response) {
      const body = res.json();
      return body || {};
  }

  private handleError(error: Response | any) {
      // In a real world app, we might use a remote logging infrastructure
      let errMsg: string;
      if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
          errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
  }
  getUserData() {
    return this.userData;
  }
  setUserData(userData) {
    this.userData = userData;
  }
}
