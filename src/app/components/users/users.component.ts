import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('userForm', { static: false }) form: any;

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

  // addUser(): void {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   this.users.unshift(this.user);
  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //   }
  // }

  onSubmit({ value, valid }: { value: User, valid: boolean }): void {
    if (!valid) {
      console.log('Form is not valid')
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.users.unshift(value);
      this.form.reset();
    }
  }

}
