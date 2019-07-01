import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  enableAdd: boolean = true;
  currentClasses = {};
  currentStyle = {};

  constructor () { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 70,
        address: {
          street: '50 Main St',
          city: 'Boston',
          state: 'MA'
        },
        image: 'http://lorempixel.com/600/600/people/3',
        isActive: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 24,
        address: {
          street: '123 Rock Dr',
          city: 'New York',
          state: 'NY'
        },
        image: 'http://lorempixel.com/600/600/people/2',
        isActive: false
      },
      {
        firstName: 'Sarah',
        lastName: 'Hanns',
        age: 27,
        address: {
          street: '23527 GwenStepple Ave',
          city: 'Huston',
          state: 'TX'
        },
        image: 'http://lorempixel.com/600/600/people/1',
        isActive: true
      }
    ];

    this.addUser({
      firstName: 'Tom',
      lastName: 'Fills',
      isActive: false
    })

    this.setCurrentClasses();
    this.setCurrentStyle();
  }

  addUser(user: User): void {
    this.users.push(user)
  }

  setCurrentClasses(): void {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }

  setCurrentStyle(): void {
    this.currentStyle = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px'
    }
  }
}
