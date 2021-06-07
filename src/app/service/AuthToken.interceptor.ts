import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { getToken } from '../auth/state/auth.selectors';
import { mergeMap } from 'rxjs/operators';

/** Inject With Credentials into the request */
@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log("interceptor: " + req.url);
    return this.store.select(getToken).pipe(
      mergeMap((token) => {
        if (!token) {
          return next.handle(req);
        }
        req = req.clone({
          //withCredentials: true,
          params: req.params.append('auth', token),
        });

        return next.handle(req);
      })
    );
  }
}
