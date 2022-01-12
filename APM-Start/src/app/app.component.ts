import { Component } from "@angular/core";


@Component({
  selector: 'pm-root',
  template: `<nav class='navbar navbar-expand navbar-light bg-light'>
  <div class='navbar-brand' againHighlight [c1]="'pink'" [c2]="'black'">{{pageTitle}}123</div>
  <ul class='nav nav-pills'>
    <li><a class='nav-link' routerLink='welcome'>Home</a></li>
    <li><a class='nav-link'  routerLink='products'>Product List</a></li>
    <li><a class='nav-link'  routerLink='lazy'>Lazy</a></li>
    <li><a class='nav-link'  routerLink='lazy1'>Lazy1</a></li>
  </ul>
</nav>
<div class='container'>
<router-outlet></router-outlet>
</div>

  `
})


export class  AppComponent {
  pageTitle : string = "Acme Product Managment Test";
}
