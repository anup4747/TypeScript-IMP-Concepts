"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printAll(strs) {
    if (strs !== null) {
        if (typeof strs === "object") {
            if (strs.length === 0) {
                console.log("Array is empty");
            }
            else {
                for (const s of strs) {
                    console.log(s);
                }
            }
        }
        else if (typeof strs === "string") {
            if (strs === "") {
                console.log("Empty string");
            }
            else {
                console.log(strs);
            }
        }
    }
}
//# sourceMappingURL=Narrowing.js.map