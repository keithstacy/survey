import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';

@Component({
  selector: 'app-print',
  // templateUrl: './print.component.html',
  template: `<div></div>`,
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  constructor() {
  }

  quiz: Quiz;

  printQuiz(quiz: Quiz) {
    this.quiz = quiz;
    const element = document.createElement('div') as HTMLDivElement;
    element.innerText = 'Parkside Church';
    const printableWindow = document.createElement('div');
    printableWindow.id = 'printableWindow';
    printableWindow.innerText = 'Spiritual Gifts Survey Results';
    const unorderedList = document.createElement('ul');
    quiz.gifts.forEach(g => {
      // tslint:disable-next-line: prefer-const
      let listItem = document.createElement('li');
      listItem.innerText = g.name + ': ' + g.band;
      unorderedList.appendChild(listItem);
    });
    printableWindow.appendChild(unorderedList);
    element.appendChild(printableWindow);
    this.printElement(element);
  }

  ngOnInit() {
  }

  printElement(element: HTMLDivElement) {
    element.style.fontFamily = 'sans-serif';
    element.style.fontSize = '12pt';
    this.printDiv(element);
}

  printDiv(element: HTMLDivElement) {
    const printableWindow = window.open('', '_blank', 'Print content');
    printableWindow.document.write(element.outerHTML);
    printableWindow.document.close();
    printableWindow.focus();
    printableWindow.print();
    printableWindow.close();
  }

  printme() {

  }

}
