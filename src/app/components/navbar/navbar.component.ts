import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminsService } from 'src/app/services/admins.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn?:boolean = false;


  constructor(
    public adminsService:AdminsService,
    public router:Router
  ) { }

  ngOnInit(): void {
    this.adminsService.isLogged.subscribe({
      next:(result:any)=>this.loggedIn=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
  }

  logout(){
    this.adminsService.logOut();
    this.router.navigate(["auth"]);     //after logout... reroutes to login page
  }
}
