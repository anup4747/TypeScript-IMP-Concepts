# TypeScript Notes

This repository demonstrates the use of TypeScript in a basic project. TypeScript is a superset of JavaScript that adds static types and compiles to plain JavaScript. It helps to catch errors early, improves code readability, and enhances maintainability.

## Why Learn TypeScript?

- **Static Typing**: TypeScript adds static types to JavaScript, allowing developers to catch type-related errors during development, before running the code.
- **Improved Developer Experience**: With features like code completion, auto-suggestions, and better error messages, TypeScript improves productivity and reduces bugs.
- **Scalability**: TypeScript is ideal for building large, maintainable applications.
- **JavaScript Compatibility**: TypeScript is a superset of JavaScript, meaning every valid JavaScript code is also valid TypeScript code. You can gradually adopt TypeScript into existing JavaScript projects.

## Key Features

- **Static Typing**: Catch errors during development through type annotations.
- **Type Inference**: TypeScript can automatically infer types, reducing the need for explicit type annotations.
- **Rich IDE Support**: Editors like VS Code provide IntelliSense for TypeScript, which includes type definitions, function signatures, and error highlighting.
- **ES6+ Features**: TypeScript supports modern JavaScript features like async/await, modules, and destructuring.

## How to Install TypeScript

1. **Install Node.js** (if not already installed):
   - Download and install from [Node.js official website](https://nodejs.org/).

2. **Install TypeScript globally**:
   Use npm to install TypeScript globally on your machine.
   ```bash
   npm install -g typescript

Verify the installation: After installation, you can verify the TypeScript version by running:
```
tsc --version
```

Install TypeScript locally (Optional): If you prefer to install TypeScript only for a specific project:

Verify the installation: After installation, you can verify the TypeScript version by running:
```
tsc --version
```
Install TypeScript locally (Optional): If you prefer to install TypeScript only for a specific project:
```
npm install --save-dev typescript
```
Initialize TypeScript Configuration: To create a tsconfig.json file for project configuration:
```
tsc --init
```
# How to Use TypeScript

Create a TypeScript File: Create a .ts file, e.g., app.ts, and start writing TypeScript code.

Compile TypeScript: Use the tsc command to compile TypeScript files into JavaScript:
```
tsc app.ts
```

Run the JavaScript Output: The TypeScript compiler generates a .js file (e.g., app.js), which can be run using Node.js:
```
node app.js
```

# Extra Info

In src folder all .ts file are saved and in dist folder all javascript files are saved, generated by typescript
