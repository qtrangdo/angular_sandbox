import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  // *** Use "template" if want to embed direct html here, else use "templateURL"
  // template: '<h2>John Doe</h2>'
  templateUrl: '/user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  // *** PROPERTIES ***
  firstName: string;
  lastName: string;
  age: number;
  address;
  hasKids: false;
  numberArray: number[];
  myTuple: [string , number, boolean];
  // the var need to be array of the first 3 in order string, num, bool. After that, it can be whatever

  // type NULL, UNDEFINED and VOID can be manipulated or 'reassigned'

  // *** METHODS ***
  constructor() {
    this.firstName = 'John';
    this.lastName = 'Doe'
    this.age = 30;
    this.address = {
      street: '50 Main St',
      city: 'Boston',
      state: 'MA'
    }

    this.sayHello()
  }

  sayHello(): void {
    console.log(`Hello ${this.firstName}`)
  }

  addNumber(num1: number, num2: number): number {
    return num1 + num2;
  }
}