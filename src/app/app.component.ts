import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private errorMessage: string = 'Error: invalid value provided.';
  private fooBar: string = '';
  inputText: string = '';

  ngOnInit(inputText: string) {
    this.inputText = inputText;
  }

  public onKeyUp(value: string) {
    //deals with error
    if (!this.isANumber(value) && value) {
      this.fooBar = '';
      if (value[0] !== "0" || /\D+/.test(value)) {
        this.addInvalidClass();
      }
      else {
        document.getElementById('inputText').className = "form-control"
      }
      return 0;
    }
    document.getElementById('inputText').className = "form-control"
    let outputText: string = value ? this.fooBarGenerator(value) : '';
    this.fooBar = outputText;
  }
  //Generates output text
  private fooBarGenerator(inputValue: string): string {
    let inputNumber: number = Number(inputValue);
    let response: string = '';
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
  private isANumber(inputValue: string): boolean {
    return /^-*[1-9][0-9]*$/.test(inputValue);
  }

  //Shows error message if input is invalid
  private addInvalidClass() {
    let className = document.getElementById('inputText').className
    if (!className.includes("is-invalid")) {
      document.getElementById('inputText').className += " is-invalid";
    }
  }
}
