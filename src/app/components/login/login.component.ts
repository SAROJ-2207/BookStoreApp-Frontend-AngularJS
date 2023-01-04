import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emaillogin } from 'src/app/model/emaillogin';
import { UserregisterserviceService } from 'src/app/service/userregisterservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

 
  constructor(private router:Router,
    private userService:UserregisterserviceService
    ){

  }

  emailLog: Emaillogin = new Emaillogin("","");
  
  list:any;
  ngOnInit(): void{

  }

  login(){
    // console.log(this.emailLog);
    // this.userService.login(this.emailLog).subscribe((data=>{
    //   this.list = data;
    //   console.log(data);
     
    // })
    // )
    this.router.navigate(["book"]);
  }
}
