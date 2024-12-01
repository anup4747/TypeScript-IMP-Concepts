"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printId(id) {
    console.log("Your ID is: " + id);
}
printId(101);
printId("202");
function printTextOrNumberOrBool(textOrNumberOrBool) {
    console.log(textOrNumberOrBool);
}
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log("Hello, " + x.join(" and "));
    }
    else {
        console.log("Welcome lone traveler " + x);
    }
}
function getFirstThree(x) {
    return x.slice(0, 3);
}
//# sourceMappingURL=UnionTypes.js.map