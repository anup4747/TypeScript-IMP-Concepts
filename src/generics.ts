
// Generics in TypeScript let you create reusable components that work with any type while keeping type safety. Example:

function identity<T>(value: T): T {
  return value;
}

identity<string>("Hello"); // "Hello"
identity<number>(42);      // 42

// Here, <T> is a placeholder for the type passed during usage.

// for more
// https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions