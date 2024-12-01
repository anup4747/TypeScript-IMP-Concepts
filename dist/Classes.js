"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("classes");
class User {
    constructor(email, name, city) {
        this.email = email;
        this.name = name;
        this.city = city;
        this._course_count = 1;
        this.email = email;
        this.name = name;
        this.city = city;
    }
    get getEmail() {
        return this.email;
    }
    deleteToken() {
        this._course_count = 0;
        console.log("Token is delelted");
    }
    get courseCount() {
        return this._course_count;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._course_count = courseNum;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._course_count = 1;
    }
}
const Anup = new User("anup@gmail.com", "Anup Tarwade", "Nashik");
console.log(Anup);
//# sourceMappingURL=Classes.js.map