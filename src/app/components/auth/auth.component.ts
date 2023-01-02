import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminsService } from 'src/app/services/admins.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  adminsRef = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  });

  constructor(
    public adminsService : AdminsService, 
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  signIn(){
    //initializes the variable: admins
    let admins = this.adminsRef.value;      
    //console.log(admins);           
    this.adminsService.signIn(admins).subscribe({
      next:(data:any) => {
        if(data=="success"){
          this.adminsService.logIn();
          //alert("login is successfull")
          this.router.navigate(["home"]);     //after login... reroutes to home page 
        }
        else{
          alert("login failure, try again")
        }
      },
      error:(error:any) => console.log(error),
      complete:() => console.log("completed")
    });  
    this.adminsRef.reset();         //resets the form
    
    /* Useful Notes - signIn method
    * passes data btw adminComponent signIn and adminsService signIn
    * console.log(admins) is used to check input values from the "form"
    * "success" is used becos it is what you specified in adminController
    */
  }

}
