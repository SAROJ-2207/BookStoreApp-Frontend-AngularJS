import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartserviceService } from 'src/app/service/cartservice.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private router: Router,
    public cartservice: CartserviceService,
  ) {}

 wishListItems: any = [];
  ngOnInit(): void {
    this.wishListItems = this.cartservice.wishListList;
    console.log( this.wishListItems);
  }
  remove(product:any){
    
    this.cartservice.removeWishList(product);
  }
}
