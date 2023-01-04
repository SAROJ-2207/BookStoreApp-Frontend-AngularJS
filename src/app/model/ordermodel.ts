export class Ordermodel {

    orderPrice:number=0;
    orderQuantity:number=0;
    orderAddress:string="";
    bookId:number=0;
    userID:number=0;

    constructor(orderPrice:number,orderQuantity:number,orderAddress:string, bookId:number,userID:number){
        this.orderPrice=orderPrice;
        this.orderQuantity=orderQuantity;
        this.orderAddress=orderAddress;
        this.bookId=bookId;
        this.userID=userID;
    }
}
