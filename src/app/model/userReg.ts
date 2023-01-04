export class UserReg {
    
    public firstName:string="";
    public lastName:string="";
    public address:string="";
    public userid:string="";
    public email:string="";
    public password:string="";

    constructor(firstName:string,lastName:string,address:string,userid:string,email:string,password:string){
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.userid=userid;
        this.email=email;
        this.password=password;
    }

}
