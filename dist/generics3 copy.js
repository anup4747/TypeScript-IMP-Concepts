"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
const longerArray = longest([1, 2], [1, 2, 3]);
const longerString = longest("alice", "bob");
//# sourceMappingURL=generics3%20copy.js.map