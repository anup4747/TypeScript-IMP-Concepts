
// Follwing code is to check out the type is number or string

// function detectType(val:number | string){
//     if (typeof val === 'string') {
//         return val.toLowerCase;
//     }else{
//         return val+3
//     }
// }

// But if did number[] then it will show error

// function detectType(val:number | string | number []){
//     if (typeof val === 'string') {
//         return val.toLowerCase;
//     }else{
//         return val+3
//     }
// }

// so there is solution 

// function printAll(strs: string | string[] | null) {
//     if (strs) {
//       if (typeof strs === "object") {
//         for (const s of strs) {
//           console.log(s);
//         }
//       } else if (typeof strs === "string") {
//         console.log(strs);
//       }
//     }
//   }

// in above program we have coverd a string, a array string and a null but we havent added a empty string


function printAll(strs: string | string[] | null) {
    if (strs !== null) {  // Check that strs is not null
        if (typeof strs === "object") {  // Check if it's an array
            if (strs.length === 0) {
                console.log("Array is empty");
            } else {
                for (const s of strs) {
                    console.log(s);
                }
            }
        } else if (typeof strs === "string") {  // Check if it's a string
            if (strs === "") {
                console.log("Empty string");
            } else {
                console.log(strs);
            }
        }
    }
}


export{}

