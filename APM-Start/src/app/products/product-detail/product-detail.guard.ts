import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRoute , Router} from "@angular/router";

@Injectable({
  providedIn:'root'
})

export class ProductDetailGuard implements CanActivate {

  constructor(){

  }
  canActivate(route: any): boolean {
    //alert('hello')
  const id = Number(route.paramMap.get('id'));

  if(id<1 || isNaN(id)) {
    //alert('wrong');
    return false
  }
  else return true
  }
}
