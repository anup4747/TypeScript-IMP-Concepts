type User  = {
    name: string;
    email:string ;
    isActive: boolean;
}

type Mystring = string; 

function createUser(user:User){

    return {name : "", email : "", isActive:true}

}

createUser({name : "", email : "", isActive:true})
// https://www.typescriptlang.org/docs/handbook/advanced-types.html
export{}