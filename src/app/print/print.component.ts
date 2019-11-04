import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  constructor() {
  }

  quiz: Quiz;

  printQuiz() {
    alert('printQuiz method.');
  }

  ngOnInit() {
  }

  print(quiz: Quiz) {
    // const printableDiv = new HTMLDivElement;
    // printableDiv.style.fontFamily = 'sans-serif';
    // printableDiv.style.fontSize = '12pt';
    // printableDiv.style.padding = '10px';
    // printableDiv.innerText = 'Yay!';
    // this.printElement(printableDiv);
  }

  printElement(element: HTMLDivElement) {
    // const printableWindow = window.open('', '_blank', 'Print content');
    // printableWindow.document.write(element.outerHTML);
  }

  printDiv(elementId: any) {
    const printableWindow = window.open('', '_blank', 'Print content');
    const divToPrint = document.getElementById(elementId);
    divToPrint.style.visibility = 'visible';
    printableWindow.document.write(divToPrint.outerHTML);
    printableWindow.document.close();
    printableWindow.focus();
    printableWindow.print();
    printableWindow.close();
  }

}
