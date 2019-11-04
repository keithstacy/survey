import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { PrintComponent } from './print/print.component';
import { OpenPrintWindowDirective } from './open-print-window.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    PrintComponent,
    OpenPrintWindowDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
