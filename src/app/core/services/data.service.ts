import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  Area,
  AreaRequest,
  BaseRequest,
  ChangePasswordRequest,
  Client,
  ClientDTO,
  ClientRequest,
  EditProfileRequest,
  LoginResponse,
  Page,
  Payment,
  PaymentDTO,
  PaymentRequest,
  Society,
  User,
  UserRequest
} from '../models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getParams(request: BaseRequest) {
    let params = new HttpParams();
    Object.entries(request).map((entry) => {
      if (entry[1]) {
        params.append(entry[0], entry[1]);
      }
    });
    return params;
  }

  getQueryParams(request: BaseRequest, url: string): Observable<Page> {
    const queryString = '?' + Object.entries(request).map(([key, value]) => `${key}=${value}`).join('&');
    return this.http.get<Page>(
      `${environment.restApiBasePathUrl}/${url}${queryString === '?' ? '' : queryString}`
    )
  }

  /*
    GET FUNCTIONS
  */

  getPayments(request: PaymentRequest) {
    return this.getQueryParams(request, environment.endpoints.payment.url)
  }

  getClients(request: ClientRequest) {
    return this.getQueryParams(request, environment.endpoints.client.url)
      .pipe(
        tap(x => console.log('dataservice', x)),
        switchMap((res) =>
          of({
            total: res.total,
            data: res.data.map((client) => {
              // const splitted = client.born.split('/');
              return {
                ...client,
                // born: new Date(splitted[2], splitted[1], splitted[0]),
                born: new Date(client.born)
              };
            }),
          })
        )
      );
  }

  getAreas(request: AreaRequest) {
    return this.getQueryParams(request, environment.endpoints.area.url)
  }

  getSocieties(request: BaseRequest) {
    return this.getQueryParams(request, environment.endpoints.society.url)
  }

  getUsers(request: UserRequest) {
    return this.getQueryParams(request, environment.endpoints.user.url)
  }

  /*
    POST FUNCTIONS
  */

  modifyClient(client: ClientDTO) {
    return this.http.put(
      `${environment.restApiBasePathUrl}/${environment.endpoints.client.url}`,
      {
        client: client,
      }
    );
  }

  modifyArea(area: Area) {
    return this.http.put(
      `${environment.restApiBasePathUrl}/${environment.endpoints.area.url}`,
      {
        area: area,
      }
    );
  }

  modifySociety(society: Society) {
    return this.http.put(
      `${environment.restApiBasePathUrl}/${environment.endpoints.society.url}`,
      {
        society: society,
      }
    );
  }

  modifyUser(user: User) {
    return this.http.put(
      `${environment.restApiBasePathUrl}/${environment.endpoints.user.url}`,
      {
        user: user,
      }
    );
  }

  modifyPayment(payment: Payment) {
    return this.http.put(
      `${environment.restApiBasePathUrl}/${environment.endpoints.payment.url}`,
      {
        payment: payment,
      }
    );
  }

  /*
    PUT FUNCTIONS
  */

  insertClient(client: ClientDTO) {
    return this.http.post(
      `${environment.restApiBasePathUrl}/${environment.endpoints.client.url}`,
      {
        client: client,
      }
    );
  }

  insertArea(area: Area) {
    return this.http.post(
      `${environment.restApiBasePathUrl}/${environment.endpoints.area.url}`,
      {
        area: area,
      }
    );
  }

  insertSociety(society: Society) {
    return this.http.post(
      `${environment.restApiBasePathUrl}/${environment.endpoints.society.url}`,
      {
        society: society,
      }
    );
  }

  insertUser(user: User) {
    return this.http.post(
      `${environment.restApiBasePathUrl}/${environment.endpoints.user.url}`,
      {
        user: user,
      }
    );
  }

  insertPayment(payment: PaymentDTO) {
    return this.http.post(
      `${environment.restApiBasePathUrl}/${environment.endpoints.payment.url}`,
      {
        payment: payment,
      }
    );
  }

  /*
    DELETE FUNCTIONS
  */

  deleteClient(client: Client) {
    return this.http.delete(
      `${environment.restApiBasePathUrl}/${environment.endpoints.client.url}/${client.id}`,
      { observe: 'response' }
    );
  }

  deleteArea(area: Area) {
    return this.http.delete(
      `${environment.restApiBasePathUrl}/${environment.endpoints.client.url}/${area.id}`,
      { observe: 'response' }
    )
  }

  deleteSociety(society: Society) {
    return this.http.delete(
      `${environment.restApiBasePathUrl}/${environment.endpoints.client.url}/${society.id}`,
      { observe: 'response' }
    );
  }

  deleteUser(user: User) {
    return this.http.delete(
      `${environment.restApiBasePathUrl}/${environment.endpoints.client.url}/${user.id}`,
      { observe: 'response' }
    );
  }

  deletePayment(paymentId: string) {
    return this.http.delete(
      `${environment.restApiBasePathUrl}/${environment.endpoints.client.url}/${paymentId}`,
      { observe: 'response' }
    );
  }

  /*
    LOGIN
  */

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${environment.restApiBasePathUrl}/${environment.endpoints.login.url}`,
      {
        email: email,
        password: password,
      }
    );
  }

  /*
  EDIT PASSWORD
  */

  //TODO implement function
  changePassword(body: ChangePasswordRequest) {
    console.log(body)
  }

  editProfile(body: EditProfileRequest) {
    console.log(body)
  }

  getMonthStats(request: any) {
    return this.getQueryParams(request, environment.endpoints.monthStats.url)
  }

  getAreaStats(request: any) {
    return this.getQueryParams(request, environment.endpoints.areaStats.url)
  }

  getTestUser(){
    return this.http.get('http://192.168.129.240:3000/users');
  }
}
