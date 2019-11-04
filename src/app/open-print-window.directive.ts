import { Directive, HostListener } from '@angular/core';
import { PrintComponent } from './print/print.component';

@Directive({
  selector: '[appOpenPrintWindow]',
  providers: [PrintComponent]
})
export class OpenPrintWindowDirective {

  constructor(private printComponent: PrintComponent) { }

  @HostListener('click', ['$event.target']) onClick(button) {
    this.printQuiz();
  }

  printQuiz(): void {
    this.printComponent.printQuiz();
  }

}
