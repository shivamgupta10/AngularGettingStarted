import { BrowserModule } from "@angular/platform-browser";

import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/product-list.component";
import { ConvertToSpacesPipe } from "./shared/convert-to-spaces";
import { StarComponent } from "./star/star.component";
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail/product-detail.component'
import { WelcomeComponent } from "./home/welcome.component";
import { RouterModule } from "@angular/router";
import { ProductDetailGuard } from "./products/product-detail/product-detail.guard";
import { InterCeptor } from "./shared/interceptor";
import { AddExtra } from "./shared/add-extra";
import { MyHighlightDirective } from "./shared/my-highlight-directive";
import { AgainHighlightDirective } from "./shared/again-highlight-directive";


@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule,RouterModule.forRoot([
    {path:'products', component: ProductListComponent},
    {path:'products/:id', component: ProductDetailComponent, canActivate:[ProductDetailGuard]},
    {path:'welcome',component: WelcomeComponent},
    {path: 'lazy',  loadChildren: () => import(`./lazy/lazy.module`).then(
      module => module.LazyModule
    ) },
    {path: 'lazy1',  loadChildren: () => import(`./lazy1/lazy1.module`).then(
      module => module.LazyModule
    ) },
    {path: '', redirectTo: 'welcome', pathMatch: 'full'}



  ])],
  declarations: [AppComponent, ProductListComponent, ConvertToSpacesPipe, AddExtra, StarComponent, ProductDetailComponent, WelcomeComponent, MyHighlightDirective, AgainHighlightDirective],
  bootstrap: [AppComponent],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterCeptor, multi: true}]
})
export class AppModule{}
