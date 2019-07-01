import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  // *** Use "template" if want to embed direct html here, else use "templateURL"
  // template: '<h2>John Doe</h2>'
  templateUrl: '/user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {

}