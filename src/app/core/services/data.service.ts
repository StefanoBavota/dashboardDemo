import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
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

  getQueryParams(request: BaseRequest, url: string): Observable<Page> {
    let queryString = '?';
    let myUrl = `${environment.restApiBasePathUrl}/${url}`;
    for(const [key, value] of Object.entries(request)) {
      if(queryString !== '?') queryString = queryString + '&';
      queryString = `${queryString}${key}=${value}`;
    }

    if (queryString !== '?') myUrl = myUrl + queryString;
    return this.http.get<Page>(myUrl);
  }

  /*
    GET FUNCTIONS
  */

  getPayments(request: PaymentRequest) {
  }

  getClients(request: ClientRequest) {
    return this.getQueryParams(request, environment.endpoints.client.url).pipe(
      switchMap(res => of({
        total: res.total,
        data: res.data.map(client => {
          const splitted = client.born.split('/');
          return {
            ...client,
            born: new Date(splitted[2], splitted[1], splitted[0])
          };
        })
      }))
    )
  }

  getAreas(request: AreaRequest) {
    return this.getQueryParams(request, environment.endpoints.area.url);
  }

  getSocieties(request: BaseRequest) {
    return this.getQueryParams(request, environment.endpoints.society.url);
  }

  getUsers(request: UserRequest) {
    return this.getQueryParams(request, environment.endpoints.user.url);
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
