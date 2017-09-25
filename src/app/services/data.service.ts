import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
    private githubUrl = 'https://api.github.com/users/prashant-andani';  // URL to web API
    private soUrl = 'https://api.stackexchange.com//2.2/users/2545628?order=desc&sort=reputation&site=stackoverflow';
    private jsFiddleUrl = 'http://jsfiddle.net/api/user/prashant_andani/demo/list.json';
    constructor(private http: Http) { }

    getGithubData(): Observable<any> {
        return this.http.get(this.githubUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getSOData(): Observable<any> {
        return this.http.get(this.soUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getJsFiddles(): Observable<any> {
        return this.http.get(this.jsFiddleUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
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
}
