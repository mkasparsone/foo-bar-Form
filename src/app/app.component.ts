import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private errorMessage = 'Error: invalid value provided.';
  private fooBarOutput = '';
  private verificationPattern = '^-?[0-9]*$';

  public generateOutputText(value: string, isWrongInput: boolean): void {
    if (/^-?0/.test(value) || isWrongInput) {
      this.fooBarOutput = '';
    } else {
      const outputText: string = value ? this.fooBarGenerator(value) : '';
      this.fooBarOutput = outputText;
    }
  }

  // Generates output text
  private fooBarGenerator(inputValue: string): string {
    const inputNumber: number = Number(inputValue);
    let response = '';
    if (inputNumber !== 0 && inputNumber <= Number.MAX_SAFE_INTEGER) {
      const dividerNumbers: object = { Foo: 3, Bar: 5 };
      for (const key of Object.keys(dividerNumbers)) {
        const value = dividerNumbers[key];
        if (inputNumber % value === 0) {
          response += key;
        }
      }
    }
    return response;
  }
}
