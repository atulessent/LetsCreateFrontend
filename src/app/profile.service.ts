import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

import { RootObject } from './profileread';

@Injectable()
export class ProfileService {
    profileResp: RootObject;
    private headers = new Headers({'Content-Type': 'application/json'});
    private profileUrl = 'http://immense-caverns-35815.herokuapp.com/findProfileById?user_id=3';

    constructor (private http: Http) { }

    getProfile(id : number): Observable<RootObject> {
        //string url = this.profileUrl;
        //console.info("URL--->",url);
     let prof$ = this.http.get('http://immense-caverns-35815.herokuapp.com/findProfileById?user_id='+id, {headers: this.getHeaders()})
        .map((profileResp: Response) => profileResp.json()).catch(handleError);

        return prof$;
        

        
    }

  
  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}
function handleError(error: any) {
    let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`;
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
  }