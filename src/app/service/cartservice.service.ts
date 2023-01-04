import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  cartItemList: any = [];
  productList = new BehaviorSubject<any>([]);
  wishListList: any = [];

  private cartUpdates = new Subject<string>();
  public cartUpdates$ = this.cartUpdates.asObservable();

  private wishListUpdates = new Subject<string>();
  public wishListUpdates$ = this.wishListUpdates.asObservable();
  constructor(private http: HttpClient) { }

  getProduct() {
    return this.productList.asObservable();
  }
  public get count(): number {
    return this.cartItemList.reduce((c: any, t1: { bookQuantity: any; }) => t1.bookQuantity + c, 0);

  };

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(cartData: any) {
    return this.http.post("http://localhost:4545/cartUser/addCartData", cartData);
  }

  orderData(data:any){
    return this.http.post("http://localhost:4545/order/addOrder",data);
  }

  addtoCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice() {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    })
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id == a.id)
        this.cartItemList.splice(index, 1)
    })
    this.productList.next(this.cartItemList);
  }

  add(product: any) {
    console.log("add service");
    let item: any = this.cartItemList.find((item: { bookId: any; }) => item.bookId == product.bookId);

    if (item) { item.bookQuantity++ }     // if data found in item then increase quantityy if not found then push data to array 
    else {
      (product).bookQuantity = 1;
      this.cartItemList.push(product)
    }

    this.cartUpdates.next("");
    //test

  }

  remove(product: any) {
    let item: any = this.cartItemList.find((item: { bookId: any; }) => item.bookId == product.bookId);
    if (item && item.bookQuantity > 1) { item.bookQuantity-- } else {
      this.cartItemList.splice(this.cartItemList.findIndex((element: { bookId: any; }) => product.bookId === element.bookId), 1);
    }
    this.cartUpdates.next("");
  }

  removeAll(product: any) {

    this.cartItemList.splice(this.cartItemList.findIndex((element: { bookId: any; }) => product.bookId === element.bookId), 1);

    // this.cartUpdates.next("");
  }

  addTowishList(product: any) {
    console.log(product);
    let item: any = this.wishListList.find((item: { bookId: any; }) => item.bookId == product.bookId);
    if (item) {
      return;
    } else {
      this.wishListList.push(product);
    }
    this.wishListUpdates.next("");

  }

  removeWishList(product: any) {
    this.wishListList.splice(this.wishListList.findIndex((element: { bookId: any; }) => product.bookId === element.bookId), 1);
    this.wishListUpdates.next("");
  }
}
