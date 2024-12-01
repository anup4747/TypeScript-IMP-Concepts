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

// The User class now has both public and private properties.
// The `email` and `name` are public, while `city` is private.
class User {
  // Protected property: _course_count can be accessed within the class and its subclasses
  protected _course_count: number = 1;

  // Constructor that initializes the public properties `email`, `name` and the private `city`
  constructor(public email: string, public name: string, private city: string) {
    this.email = email;
    this.name = name;
    this.city = city;
  }

  // Getter method to access the `email` property
  get getEmail(): string {
    return this.email;
  }

  // Private method that modifies the internal state of _course_count, simulating token deletion
  private deleteToken() {
    this._course_count = 0;
    console.log("Token is deleted");
  }

  // Getter method to access the _course_count property
  get courseCount(): number {
    return this._course_count;
  }

  // Setter method to modify _course_count with validation (ensures course count is greater than 1)
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._course_count = courseNum;
  }
}

// Subclass (inherits from User)
class subUser extends User {
  isFamily: boolean = true; // New property specific to subUser

  // Method to change the _course_count to 1 (allowed due to protected access in parent)
  changeCourseCount() {
    this._course_count = 1;
  }
}

// Creating an instance of the User class
const Anup = new User("anup@gmail.com", "Anup Tarwade", "Nashik");

// Logging the created instance (Anup) to the console
console.log(Anup);

// The following line would be used to export the module if it's used in a project that requires export (for instance, in a Node.js environment)
export {};
