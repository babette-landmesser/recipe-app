import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: string, trimAfterCharacters?: number): any {
    if (value && trimAfterCharacters) {
      return value.substr(0, trimAfterCharacters);
    } else {
      return value;
    }
  }

}
