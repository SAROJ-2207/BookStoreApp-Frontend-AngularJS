import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cartusermodel } from 'src/app/model/cartusermodel';
import { CartserviceService } from 'src/app/service/cartservice.service';
import { Ordermodel } from 'src/app/model/ordermodel';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  constructor(private router: Router,
    public cartservice: CartserviceService
    ){}
  
  list:any;

  cartUser: Cartusermodel = new Cartusermodel("","","","","","","","","");
  orderModelbook: Ordermodel = new Ordermodel(0,0,"",0,0);

  ngOnInit():void{

  }

  addToOrder(){
    // this.cartservice.orderData(this.orderModelbook).subscribe((orderdata:any)=>{
    //   console.log(orderdata);
    // })
  }
  onCheckout(){
    this.cartservice.addToCart(this.cartUser).subscribe((data=>{
      console.log(data);
    }))
    this.router.navigate(["order"])
  }

 
  incresase(product:any){
    this.cartservice.add(product);
   }
 
    decrease(product:any){
     console.log(product)
     this.cartservice.remove(product);
   }
   remove(product:any){
    this.cartservice.removeAll(product);
   }

   grandtotal(data:any){
    let total = 0;
    for (let ct of data) {
      total +=parseInt(ct.bookPrice);
    }
    return total;
   }
}
