
import { AfterViewInit, Component , OnInit} from "@angular/core";
import { ProductService } from "../shared/product.service";
import { IProduct } from "./products";

import { Observable, of, from, fromEvent } from "rxjs";

@Component({
  selector: 'pm-products',
  templateUrl:'./product-list.component.html',
  styleUrls:['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit ,AfterViewInit{

  constructor( private productService: ProductService){

    const a  = [10,12,"hello","1234"];


    function subscribe(subscriber: any){
      a.forEach(item=>{
        subscriber.next(item);
      })
    }


    let test$ = new Observable(subscribe);

    test$.subscribe(item=>alert(item))







    //

    //const test2$ = from(a);
    //test2$.subscribe(item=>alert(item))


  }
 pageTitle: string = 'Product List haha'

 imageWidth = 50;

 showImage = false;

 private _listFilter: string = '';


 get listFilter(): string {
   return this._listFilter;
 }

 set listFilter(value : string) {
    this._listFilter = value;
    this.filteredProducts = this.products.filter((product)=>
       product.productName.toLowerCase().includes(this.listFilter)
    )

 }

 onRatingClicked(message: any): void{
   this.pageTitle = "Product  List" + message;
 }

 onRatingClicked1 = () => {
  this.pageTitle
}

 products!: IProduct[]


toggleImage(): void {

  this.showImage = !this.showImage;
}

ngOnInit(): void {
  this.productService.getProducts().subscribe( products => {
    alert('got service')
    this.products = products
    this.filteredProducts = this.products;

    });
  console.log(' in on it');
}

ngAfterViewInit(){

  var button1 = document.getElementById('readers')!

  fromEvent(button1, 'click').subscribe(event => alert(event));

}



filteredProducts!: IProduct[]

}
