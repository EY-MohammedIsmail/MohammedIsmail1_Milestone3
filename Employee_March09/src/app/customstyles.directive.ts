import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomstyles]'
})
export class CustomstylesDirective {
  //to demonstrate usecase of custom directive
  constructor(elref:ElementRef) { 
    elref.nativeElement.style.color = 'black';
  }

}
