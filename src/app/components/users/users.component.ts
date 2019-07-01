import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = false;

  constructor () { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 Main St',
          city: 'Boston',
          state: 'MA'
        }
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 24,
        address: {
          street: '123 Rock Dr',
          city: 'New York',
          state: 'NY'
        }
      },
      {
        firstName: 'Sarah',
        lastName: 'Hanns',
        age: 27,
        address: {
          street: '23527 GwenStepple Ave',
          city: 'Huston',
          state: 'TX'
        }
      }
    ];

    this.addUser({
      firstName: 'Tom',
      lastName: 'Fills',
    })
  }

  addUser(user: User): void {
    this.users.push(user)
  }
}
