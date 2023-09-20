import { Component } from '@angular/core';


interface User {
  name: string; 
  firstName: string;
  age: number;
  quote: string;
  photo: string;
  isAgeVisible: boolean;
}
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent {
public user: User = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: 'Hello World!',
    photo: 'https://randomuser.me/api/portraits/lego/1.jpg',
    isAgeVisible: false,
};

toggle() {
  this.user.isAgeVisible = !this.user.isAgeVisible;
}
}
