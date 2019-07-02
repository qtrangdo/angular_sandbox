import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[]

  constructor() { 
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

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User): void {
    this.users.unshift(user);
  }
}
