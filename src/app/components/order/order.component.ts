import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  constructor(private router: Router){
  }

  ngOnInit(){

  }

  goOrder(){
    this.router.navigate(["book"]);
  }

  idFun(){
    var d = new Date().getTime();
    return d;
  }

}
