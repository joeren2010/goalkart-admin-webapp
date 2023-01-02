import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  private urlAdm: string = 'http://localhost:9090/admin/signIn';
  private urlApi: string = 'https://fakestoreapi.com/projects';
  private urlLoc: string = 'http://localhost:3000/meetings';
  private urlDel: string = 'http://localhost:3000/meetings/';
  private urlPut: string = 'http://localhost:3000/meetings/';
  private urlCal: string = 'http://localhost:3000/calen.php/';
  private urlCom: string = './../../assets/data/meetingsCom.json';

  //instantiate behavior-subject: obj
  private obj = new BehaviorSubject<boolean>(false);
  //create custom-observale: loggedIn
  private loggedIn = this.obj.asObservable();

  constructor(public httpClient: HttpClient) { }

  signIn(admins:any):Observable<string>{
    return this.httpClient.post(this.urlAdm, admins, {responseType:'text'});

    /* Usefull Notes:
    * urlAdm: string = 'http://localhost:9090/admin/signIn' is backend url for admin's signin
    * passes data btw adminsComponent signIn, adminsService signIn amd adminController signIn
    * responseType = "text" because our backend (adminsController) codes is returning "string"
    * the default "return datatype" is json... for json... just remove "{responseType:'text'}"
    */
  }

  get isLogged(){
    return this.loggedIn;       //default value set to false (see behavior-subject line)
  }

  //if this function is called from any component, the value is true
  logIn(){
    this.obj.next(true);
  }
  logOut(){
    this.obj.next(false);
  }
}
