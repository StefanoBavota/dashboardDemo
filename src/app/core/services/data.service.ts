import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Area, AreaRequest, BaseRequest, Client, ClientRequest, LoginResponse, Page, Payment, PaymentRequest, Society, User, UserRequest } from '../models';

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

  getSocieties(request: BaseRequest) {
    return this.http.get<Page>(
      `${environment.restApiBasePathUrl}/${environment.endpoints.area.url}`,
      {
        params: this.getParams(request)
      }
    )
  }



  getUsers(request: UserRequest) {
    return this.http.get<Page>(
      `${environment.restApiBasePathUrl}/${environment.endpoints.user.url}`,
      {
        params: this.getParams(request)
      }
    )
  }

  /*
    POST FUNCTIONS
  */

  modifyClient(client: Client) {
    return this.http.post(
      `${environment.restApiBasePathUrl}/${environment.endpoints.client.url}`,
      {
        client: client
      }
    )
  }

  modifyArea(area: Area) {
    return this.http.post(
      `${environment.restApiBasePathUrl}/${environment.endpoints.area.url}`,
      {
        area: area
      }
    )
  }

  modifySociety(society: Society) {
    return this.http.post(
      `${environment.restApiBasePathUrl}/${environment.endpoints.society.url}`,
      {
        society: society
      }
    )
  }

  modifyUser(user: User) {
    return this.http.post(
      `${environment.restApiBasePathUrl}/${environment.endpoints.user.url}`,
      {
        user: user
      }
    )
  }

  modifyPayment(payment: Payment) {
    return this.http.post(
      `${environment.restApiBasePathUrl}/${environment.endpoints.payment.url}`,
      {
        payment: payment
      }
    )
  }

  /*
    PUT FUNCTIONS
  */

  insertClient(client: Client) {
    return this.http.put(
      `${environment.restApiBasePathUrl}/${environment.endpoints.client.url}`,
      {
        client: client
      }
    )
  }

  insertArea(area: Area) {
    return this.http.put(
      `${environment.restApiBasePathUrl}/${environment.endpoints.area.url}`,
      {
        area: area
      }
    )
  }

  insertSociety(society: Society) {
    return this.http.put(
      `${environment.restApiBasePathUrl}/${environment.endpoints.society.url}`,
      {
        society: society
      }
    )
  }

  insertUser(user: User) {
    return this.http.put(
      `${environment.restApiBasePathUrl}/${environment.endpoints.user.url}`,
      {
        user: user
      }
    )
  }

  insertPayment(payment: Payment) {
    return this.http.put(
      `${environment.restApiBasePathUrl}/${environment.endpoints.payment.url}`,
      {
        payment: payment
      }
    )
  }

  /*
    DELETE FUNCTIONS
  */

  deleteClient(client: Client) {
    return this.http.delete(
      `${environment.restApiBasePathUrl}/${environment.endpoints.client.url}/${client.id}`
    )
  }

  deleteArea(area: Area) {
    return this.http.delete(
      `${environment.restApiBasePathUrl}/${environment.endpoints.client.url}/${area.id}`
    )
  }

  deleteSociety(society: Society) {
    return this.http.delete(
      `${environment.restApiBasePathUrl}/${environment.endpoints.client.url}/${society.id}`
    )
  }

  deleteUser(user: User) {
    return this.http.delete(
      `${environment.restApiBasePathUrl}/${environment.endpoints.client.url}/${user.id}`
    )
  }

  deletePayment(payment: Payment) {
    return this.http.delete(
      `${environment.restApiBasePathUrl}/${environment.endpoints.client.url}/${payment.id}`
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
