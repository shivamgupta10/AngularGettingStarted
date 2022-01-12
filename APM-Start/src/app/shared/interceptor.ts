
import { Injectable } from "@angular/core";

import {IProduct} from './../products/products';

import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InterCeptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    alert(1+"sfsfd");
    return next.handle(req)

  }

}
