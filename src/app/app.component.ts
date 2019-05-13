import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private errorMessage: string = 'Error: invalid value provided.';
  private fooBarOutput: string = '';
  inputText: string = '';

  public generateOutputText(value: string):void {
    if (!/^-?0/.test(value)) {
     let outputText: string = value ? this.fooBarGenerator(value) : '';
     this.fooBarOutput = outputText;
    }
  }
  //Generates output text
  private fooBarGenerator(inputValue: string): string {
    let inputNumber: number = Number(inputValue);
    let response: string = '';
    console.log(inputNumber);
    if (inputNumber !== 0 && inputNumber <= Number.MAX_SAFE_INTEGER) {
      let dividerNumbers: object = { 'Foo': 3, 'Bar': 5 }
      for (let key in dividerNumbers) {
        let value = dividerNumbers[key];
        if (inputNumber % value == 0) {
          response += key;
        }
      }
    }
    return response
  }
}