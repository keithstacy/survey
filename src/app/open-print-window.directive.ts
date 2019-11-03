import { Directive, HostListener } from '@angular/core';
import { PrintComponent } from './print/print.component';

@Directive({
  selector: '[appOpenPrintWindow]'
})
export class OpenPrintWindowDirective {

  constructor(private printer: PrintComponent) { }

  numberOfClicks = 0;

  @HostListener('click', ['$event.target']) onClick(button) {
    console.log('print button', button, 'number of clicks', this.numberOfClicks++);
    // this.printer.printQuiz();
  }

}
