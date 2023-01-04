import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserregisterserviceService {

  userData:any;

  constructor(private http:HttpClient) { }


registerUser(userData:any){
return this.http.post("http://localhost:4545/Userbookstore/addNewUserData",userData);
}

login(userData:any){
  console.log(userData);
  return this.http.get("http://localhost:4545/Userbookstore/login",{params: userData});
}

}
