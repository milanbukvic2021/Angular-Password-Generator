//#10:EventBinding
//#11:Property Binding
//#12:Interpolation
//#14:Tracking Input State
//#16:Handling Text Input
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  kyrie = 'Kyrie Eleison';
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;

  onButtonClick() {
    console.log('Clicked!');
    console.log(this.includeLetters);
    console.log(this.includeNumbers);
    console.log(this.includeSymbols);
    //bactics
    console.log(`
    Bactics way:
    letters:${this.includeLetters}
    numbers:${this.includeNumbers}
    symbols:${this.includeSymbols}`);

    //this.password = 'my password is:';
  }

  //#17:Generate Random Password
  onButtonClick1() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnoprstuvwyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    //console.log(validChars);

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    console.log(generatedPassword);
    this.password = generatedPassword;
  }

  getPassword() {
    return this.password;
  }

  getName() {
    return 'Mix';
  }

  onChangeLetters() {
    console.log('changed');
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }

    console.log(parsedValue);
  }
}

//C:\Users\Miskec2\Desktop\TNT\006.Angular9\01passwordgenerator\pw
