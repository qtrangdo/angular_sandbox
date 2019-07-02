import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable, of } from 'rxjs';
// Observable is to deal with async fetching data

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<Array<any>>;

  constructor () {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@gmail.com',
        isActive: true,
        registered: new Date('01/01/2018 08:30:00'),
        hide: true
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

  getUsers(): Observable<User[]> {
    return of(this.users);
    // "of" will return as an Observable
  }

  addUser(user: User): void {
    this.users.unshift(user);
  }
}
