import { AuthService } from 'src/app/core/services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import {  Router } from '@angular/router';

@Injectable()
export class CredentialInterceptor implements HttpInterceptor {

  constructor(private route: Router, public authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  const token = this.authService.getToken();
  //const token: string = JSON.parse(localStorage.getItem('sports-board')?? '{}')
   console.log('token1', token);
  // const token2 = this.authService.getToken();
    if (token) {
      console.log('prima', token);
        request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        console.log('dopo', token);
    };
    if(token == '{}'){
        this.route.navigateByUrl('/login');
    }

    if (!request.headers.has('Content-Type')) {
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
          }
          return event;
      }),
      catchError((error: HttpErrorResponse) => {


          let data = {
              reason: error.error.error  || error.error.message || error.statusText,
              status: error.status
          };
            if(data.status == 401){
              console.log('data',data);
              this.route.navigateByUrl('/login');
            }
            return throwError(error);

      }));
    }
  }
