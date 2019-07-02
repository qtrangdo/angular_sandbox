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
  showUserForm: boolean = false;

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
        isActive: true,
        registered: new Date('01/01/2018 08:30:00'),
        hide: false
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
        isActive: false,
        registered: new Date('03/24/2017 18:05:00'),
        hide: true
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
        isActive: true,
        registered: new Date('11/10/2016 14:45:00'),
        hide: true
      }
    ];
  }

  addUser(user: User): void {
    this.users.push(user)
  }

  onSubmit(e: any): void {
    e.preventDefault();
    console.log(e.type)
  }

}
