import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bookmodel } from 'src/app/model/bookmodel';
import { BookserviceService } from 'src/app/service/bookservice.service';
import { CartserviceService } from 'src/app/service/cartservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 

  public count:number = 0;
  constructor(private router:Router,
              private bookSearch:BookserviceService ,
              private cartservice: CartserviceService,        
    ){}

    searchResult:undefined;

    ngOnInit(){
      this.cartservice.cartUpdates$.subscribe(()=>{
        this.count= this.cartservice.count;
      });
    }

  goHome(){
    
  }
  goWish(){
    this.router.navigate(["wishlist"])
  }
  goCart(){
    this.router.navigate(["cart"])

  }

  login(){
    this.router.navigate(["login"])
  }

  searchSubmit(){
   
  }
}
