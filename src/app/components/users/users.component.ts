import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users:any[] =[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next: (response) => {
         // console.log(response);
          this.users = response;
      },
      error: (error) => {
          alert('There was an error in retrieving data from the server');
      }
    });
  }

}
