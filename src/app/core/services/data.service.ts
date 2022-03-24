import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AreaRequest, BaseRequest, ClientRequest, LoginResponse, Page, PaymentRequest } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getParams(request: BaseRequest) {
    let params = new HttpParams();
    Object.entries(request).map(entry => {
      if(entry[1]) {
        params.append(entry[0], entry[1])
      }
    });
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

  getClients(request: ClientRequest) {
    return this.http.get<Page>(
      `${environment.restApiBasePathUrl}/${environment.endpoints.client.url}`,
      {
        params: this.getParams(request)
      }
    );
  }

  getAreas(request: AreaRequest) {
    return this.http.get<Page>(
      `${environment.restApiBasePathUrl}/${environment.endpoints.area.url}`,
      {
        params: this.getParams(request)
      }
    )
  }

  /*
    LOGIN
  */

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${environment.restApiBasePathUrl}/${environment.endpoints.login.url}`,
      {
        email: email,
        password: password
      }
    )
  }
}
