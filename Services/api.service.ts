import { Injectable } from '@angular/core';
import {Http, Jsonp, RequestOptions, Response, Headers} from '@angular/http'
import {errorHandler} from "@angular/platform-browser/src/browser";
import 'rxjs/add/operator/toPromise';
const serverUrl = 'http://localhost:8082/api/';
const basicAuth = `Basic ${btoa('admin:district')}`;

const loadUrl = "organisationUnits?paging=false&level=1";



export interface IOrganizationUnit {
    displayName : string,
    id : string
}

@Injectable()
export class ApiService {

    getOptions(): RequestOptions {
        const options : RequestOptions = new RequestOptions();
        options.headers = new Headers();
        options.headers.append("Authorization", basicAuth);
        options.headers.append("Content-Type", 'application/json');
        options.method = 'GET';
        return options;
    }

    constructor(private http : Http) {

    }

    handleResponse(res : Response)  {
        return res.json();
    }



    fetchData() : Promise<IOrganizationUnit[]> {
            return this.http.get(serverUrl + loadUrl, this.getOptions())
            .toPromise()
            .then(this.handleResponse)
            .catch(err => console.log(err));
    }
}