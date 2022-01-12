import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'addextra',
  pure: false
})
export class AddExtra implements PipeTransform {

  transform(input: string): string {
    //alert(input);
    return input + "abc";

  }
}
