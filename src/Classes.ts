console.log("classes");

// Simple Classes

// class User{
//     email:string
//     name:string
//     constructor(email:string, name:string ){
//         this.email = email;
//         this.name =name;
//     }
// }

// Private & Public

// class User{

//     constructor(
//         public email:string,
//         public name:string ,
//         private city: string  ){

//         this.email = email;
//         this.name =name;
//         this.city = city;
//     }
// }

// Getter & setter

class User {
//   private _course_count: number = 1;
  protected _course_count: number = 1;

  constructor(public email: string, public name: string, private city: string) {
    this.email = email;
    this.name = name;
    this.city = city;
  }

  get getEmail(): string {
    return this.email;
  }

  private deleteToken(){
    this._course_count = 0;
    console.log("Token is delelted")
  }

  get courseCount(): number {
    return this._course_count;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._course_count = courseNum;
  }
}

class subUser extends User{
    isFamily: boolean = true
    changeCourseCount(){
        this._course_count = 1
    }
}

const Anup = new User("anup@gmail.com", "Anup Tarwade", "Nashik");
console.log(Anup);

export {};
