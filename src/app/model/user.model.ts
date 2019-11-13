export class User{
   public firstName : string;
   public lastName : string
   public userName : string;
   public contacts : Address[];
   public hobbies : Hobbies;
}

export class Address{
    public phone : string;
    public address : string;
    public city : string;
    public state : string;
    public country : string;
    public zipcode : string;
}

export class Hobbies{
    public reading : boolean;
    public singing : boolean;
    public dancing : boolean;
    public others: boolean;
    public otherValue : string;
}