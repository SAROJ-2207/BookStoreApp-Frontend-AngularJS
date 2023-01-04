import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserReg } from 'src/app/model/userReg';
import { UserregisterserviceService} from 'src/app/service/userregisterservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {  

constructor(private router:Router,
    private userService:UserregisterserviceService,
    ){}

    userLogin:UserReg = new UserReg("","","","","","");    

  ngOnInit():void{
    
  }

  onsubmit(){
    this.userService.registerUser(this.userLogin).subscribe((data:any)=>{
      console.log(data);
      this.router.navigate(["login"])
    })
  }
 }
