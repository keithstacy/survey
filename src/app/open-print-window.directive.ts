import { Directive, HostListener, Input } from '@angular/core';
import { PrintComponent } from './print/print.component';
import { QuizComponent } from './quiz/quiz.component';
import { Quiz } from './models/quiz';

@Directive({
  selector: '[appOpenPrintWindow]',
  providers: [
    PrintComponent,
    QuizComponent
  ]
})
export class OpenPrintWindowDirective {
  // tslint:disable-next-line: no-input-rename
  @Input('quiz') quiz: Quiz;

  constructor(private printComponent: PrintComponent,
              private quizComponent: QuizComponent) { }

  @HostListener('click', ['$event.target']) onClick(button) {
    // alert(this.quiz.name);
    this.printQuiz(this.quiz);
  }

  printQuiz(quiz: Quiz): void {
    // alert(quiz.name);
    this.printComponent.printQuiz(quiz);
  }

}
