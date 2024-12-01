// Constraints
// We’ve written some generic functions that can work on any kind of value. Sometimes we want to relate two values, but can only operate on a certain subset of values. In this case, we can use a constraint to limit the kinds of types that a type parameter can accept.

// Let’s write a function that returns the longer of two values. To do this, we need a length property that’s a number. We constrain the type parameter to that type by writing an extends clause:

function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}
 
// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
// const notOK = longest(10, 100);
// Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.


// There are a few interesting things to note in this example. We allowed TypeScript to infer the return type of longest. Return type inference also works on generic functions.

// Because we constrained Type to { length: number }, we were allowed to access the .length property of the a and b parameters. Without the type constraint, we wouldn’t be able to access those properties because the values might have been some other type without a length property.

// The types of longerArray and longerString were inferred based on the arguments. Remember, generics are all about relating two or more values with the same type!

// Finally, just as we’d like, the call to longest(10, 100) is rejected because the number type doesn’t have a .length property.

export{}