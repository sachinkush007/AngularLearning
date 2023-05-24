import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //console.log(request);
    const API_KEY='testInt' 
    //clone() method, which allows us to create a copy of the original request and modify it.
    const req=request.clone(  
      {
        setHeaders:{
          API_KEY
        }
      }
    )
    return next.handle(req);
  }
}
