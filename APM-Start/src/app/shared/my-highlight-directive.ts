import { Directive, HostBinding, Input, OnInit } from "@angular/core";

import { ElementRef } from "@angular/core";

@Directive({
  selector:"[myHighlight]"
})

export class MyHighlightDirective implements OnInit {

  @Input() c1!:string;

  @Input() c2!:string;

  ngOnInit(){
    this.hc1 =this.c1;
    this.hc2 = this.c2;
    alert(12)
  }

  @HostBinding('style.backgroundColor') hc1!:string;
  @HostBinding('style.color') hc2!:string;

}
