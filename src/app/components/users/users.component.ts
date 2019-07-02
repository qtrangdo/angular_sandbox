import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
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

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.users = this.dataService.getUsers();
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

      this.dataService.addUser(value);
      this.form.reset();
    }
  }

}
