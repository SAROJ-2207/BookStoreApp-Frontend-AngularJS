export class Bookmodel {
     bookId:number=0;
     bookName:string="";
     authorName:string="";
     bookDescription:string="";
     bookImage:string="";
     bookPrice:string="";
     bookQuantity:string="";

     constructor(bookId:number,bookName:string,authoreName:string,bookDescription:string,bookImage:string,bookPrice:string,bookQuantity:string){
        this.bookId = bookId;
        this.bookName = bookName;
        this.authorName = authoreName;
        this.bookDescription = bookDescription;
        this.bookImage = bookImage;
        this.bookPrice = bookPrice;
        this.bookQuantity = bookQuantity;
     }
}
