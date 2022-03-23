import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseRequest, Page, PaymentRequest } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getParams(request: BaseRequest) {
    let params = new HttpParams();
    Object.entries(request).map(entry => params.append(entry[0], entry[1]));
    return params;
  }

  /*
    GET FUNCTIONS
  */

  getPayments(request: PaymentRequest) {
    return this.http.get<Page>(
      `${environment.restApiBasePathUrl}/${environment.endpoints.payment.url}`,
      {
        params: this.getParams(request)
      }
    );
  }
}
