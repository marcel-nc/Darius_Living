import { Component, OnInit } from '@angular/core';
import {User} from '../user'
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  users: User[];
  user: String;
  first_name: String;
  last_name: String;
  phone_number: String;
  appartment_amount: String;
  date_from: String;
  date_to: String;
  
  

  constructor(private userService: UserService) { 

    this.userService.getUsers()
    .subscribe(users =>{
      this.users = users;
    });

  }

  addUser(event){
    event.preventDefault();
    var newUser = {
      first_name: this.first_name,
      last_name: this.last_name,
       phone_number: this. phone_number,
      appartment_amount: this.appartment_amount,
      date_from: this.date_from,
      date_to: this.date_to

    }

    this.userService.addUser(newUser)
    .subscribe(user =>{

      this.users.push(user);
      this.first_name ="";
      this.last_name ="";
      this.phone_number ="";
      this.date_from ="";
      this.date_to="";
    });
  }


  deleteUser(id){
		var users = this.users;

		this.userService.deleteUser(id).subscribe(data =>{
			if(data.n == 1){
				for(var i = 0;i< users.length; i++){
					if(users[i]._id ==id){
						users.splice(i, 1);
					}
				}
			}
		});
  }
  
  // updateUser(user){
  //   var _user = {
  //     _id: user._id,
  //     first_name: user.first_name,
  //     last_name: user.last_name,
  //     specialty: user.specialty,
  //     likes: user.likes
  //   };

  //   this.userService.updateUser(_user).subscribe(data =>{
  //     user.first_name = user.first_name,
  //     user.last_name = user.last_name,
  //     user.specialty = user.specialty,
  //     user.likes = user.likes
  //   })
         
    
  // }

  ngOnInit() {
  }

}

