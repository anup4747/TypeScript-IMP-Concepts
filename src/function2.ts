// a better way to writing a function

// function getValue(myVal:number): boolean{
//     if(myVal > 5){
//         return true;
//     }
//     return "misson passed";
// }

// const getHello = (s:string):string =>{
//     return "";
// }

// const heros= ["Thor", "SpiderMan", "IromMan"]

// heros.map((hero:string ) =>{
//     return `hero is ${hero}`
// })

// const heros= [1, 2, 3]

// heros.map((hero:number) =>{
//     return `hero is ${hero}`
// })

// Anonymous Functions
// Anonymous functions are a little bit different from function declarations. When a function appears in a place where TypeScript can determine how it’s going to be called, the parameters of that function are automatically given types.

// Here’s an example:

const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});


export {}