import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
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
        email: 'john.doe@gmail.com',
        isActive: true,
        registered: new Date('01/01/2018 08:30:00'),
        hide: false
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kevin123@yahoo.com',
        isActive: false,
        registered: new Date('03/24/2017 18:05:00'),
        hide: true
      },
      {
        firstName: 'Sarah',
        lastName: 'Hanns',
        email: 'shanns@live.com',
        isActive: true,
        registered: new Date('11/10/2016 14:45:00'),
        hide: true
      }
    ];
  }

  addUser(): void {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  onSubmit(e: any): void {
    e.preventDefault();
    console.log(e.type)
  }

}
