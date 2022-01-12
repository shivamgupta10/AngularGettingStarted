import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'


import { SobreComponent } from './sobre/sobre.component';


@NgModule({
  declarations: [
    SobreComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:"", component:SobreComponent }])
  ]
})
export class LazyModule { }
