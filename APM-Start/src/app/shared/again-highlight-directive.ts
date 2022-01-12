import { Directive, HostBinding, Input } from "@angular/core"

@Directive({
  selector:"[againHighlight]"
})

export class AgainHighlightDirective{


  @Input() c1!: string;


  @Input() c2!: string;

  ngOnit(){
    this.hc1 = this.c1
    this.hc2 = this.c2;
  }

  @HostBinding('style.backgroundColor') hc1!:string;
  @HostBinding('style.color') hc2!:string;



}
