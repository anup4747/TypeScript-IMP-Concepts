// TypeScript includes the readonly keyword that makes a property as read-only in the class, type or interface.

// Prefix readonly is used to make a property as read-only. Read-only members can be accessed outside the class, but their value cannot be changed. Since read-only members cannot be changed outside the class, they either need to be initialized at declaration or initialized inside the class constructor.

type User ={
    readonly _id :string 
    name: string;
    email:string ;
    isActive: boolean;
    creaditCardDetails? : number; //option
}

let Myuser :User = {
    _id :"45",
    name: "Hello",
    email:"xyz@gmail.com",
    isActive: true,
}

Myuser.name = ""
Myuser.email = ""
export{}