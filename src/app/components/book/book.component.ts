import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bookmodel } from 'src/app/model/bookmodel';
import { BookserviceService } from 'src/app/service/bookservice.service';
import { CartserviceService } from 'src/app/service/cartservice.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {


  searchKey:string ="";
  constructor(private router: Router, private bookService: BookserviceService, private cartService: CartserviceService) {
    this.getProduct();
  }
  sorting:string = "";
  bookModelData: Bookmodel = new Bookmodel(0,"", "", "", "", "", "");
  list: any;

  ngOnInit(): void {

  }

  getProduct(): void {
    this.bookService.getBookList().subscribe((data: any) => {
      this.list = data;
      console.log(data)
      console.log(this.list);
    })
  }

  product: any;


  //OnSortAsc($event) :- Using one method for Ascending and Descending
  OnSortAsc(num:any) {
    console.log(num);
    if(parseInt(num)==1){            //value="1" Price: Low to High (Ascending) book.component.html
    this.bookService.sortAscending().subscribe((sortdata: any) => {
      this.list = sortdata.data;
      console.log(sortdata);
      console.log(this.list);
    })
  }else if(parseInt(num)==2){       //value="2" Price: High to Low (Descending) book.component.html 
    this.bookService.sortDescending().subscribe((sortData: any) => {
      this.list = sortData.data;
      console.log(sortData);
      console.log(this.list);
    })
  }
}

  addToCart(product:any){
    this.cartService.add(product);
  }

  addWishList(product:any){
    this.cartService.addTowishList(product);
  }
  
}
