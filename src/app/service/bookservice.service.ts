import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  product: any;
  constructor(private http: HttpClient) { }

  getBookList() {
    return this.http.get("http://localhost:4545/bookStoreApp/getAllBookData");
  }

  getBookId(id: any) {
    return this.http.get("http://localhost:4545/bookStoreApp/byBookId/${id}");
  }

  searchProduct(query: string) {
    return this.http.get(`http://localhost:4545/bookStoreApp/getAllBookData?q=${query}`);
  }

  // getAddBook(bookData:any){
  //   return this.http.post("http://localhost:4545/bookStoreApp/add-book",bookData);
  // }


  sortAscending() {
    return this.http.get("http://localhost:4545/bookStoreApp/sortAsc");
  }

  sortDescending() {
    return this.http.get("http://localhost:4545/bookStoreApp/sortDesc");
  }


}
