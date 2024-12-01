// Union Types
// TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators. Now that we know how to write a few types, it’s time to start combining them in interesting ways.

// Defining a Union Type
// The first way to combine types you might see is a union type. A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.

// Let’s write a function that can operate on strings or numbers:

function printId(id: number | string) {
    console.log("Your ID is: " + id);
  }
  // OK
  printId(101);
  // OK
  printId("202");
  // Error
//   printId({ myID:  });
//   Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.

// The separator of the union members is allowed before the first element, so you could also write this:

// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

function printTextOrNumberOrBool(
    textOrNumberOrBool:
      | string
      | number
      | boolean
  ) {
    console.log(textOrNumberOrBool);
  }

//   Another example is to use a function like Array.isArray:

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
      // Here: 'x' is 'string[]'
      console.log("Hello, " + x.join(" and "));
    } else {
      // Here: 'x' is 'string'
      console.log("Welcome lone traveler " + x);
    }
  }

  

//   Notice that in the else branch, we don’t need to do anything special - if x wasn’t a string[], then it must have been a string.

// Sometimes you’ll have a union where all the members have something in common. For example, both arrays and strings have a slice method. If every member in a union has a property in common, you can use that property without narrowing:

function getFirstThree(x: number[] | string) {
    return x.slice(0, 3);
  }




  export{}