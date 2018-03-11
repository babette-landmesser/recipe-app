import {
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';

@Injectable()
export class JwtHttpClientInterceptor implements HttpInterceptor {
  tokenName = 'recipe-app-token';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent
    | HttpResponse<any> | HttpUserEvent<any>> {
    const jwtToken = localStorage.getItem(this.tokenName);

    let jwtRequest = req;

    if (jwtToken) {
      const headerValue = 'JWT ' + jwtToken;
      const headers = req.headers.set('Authorization', headerValue);
      jwtRequest = req.clone({headers: headers});
    }

    return next.handle(jwtRequest).do(
      event => {},
      error => console.log('error: ' + JSON.stringify(error))
    );
  }

}
