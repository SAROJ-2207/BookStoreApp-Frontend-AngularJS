export class Cartusermodel {

    name:string="";
    phoneNumber:string="";
    pinCode:string="";
    locality:string="";
    address:string="";
    city:string="";
    landmark:string="";
    type:string="";
    email:string="";

    constructor(name:string,phoneNumber:string,pinCode:string,locality:string,address:string,city:string,landmark:string,type:string,email:string){
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.pinCode = pinCode;
        this.locality = locality;
        this.address = address;
        this.city = city;
        this.landmark = landmark;
        this.type = type;
        this.email = email;
    }
}

