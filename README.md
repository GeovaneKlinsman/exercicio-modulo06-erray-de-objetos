# ES6 and Babel

This exercise demonstrates the use of ES6 features and Babel for transpiling ES6 code to ES5. It includes various JavaScript concepts such as classes, promises, async/await, destructuring, spread/rest operators, and more.

## Setup

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository or download the exercise files.
2. Navigate to the exercise directory.

```bash
git clone https://github.com/maxh33/babel-es6
```

```bash
cd /babel-es6
```

3. Install the necessary dependencies.


```bash

npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

Build
Run the build script to transpile the ES6 code to ES5:

```bash
npm run build
```

### Usage

Ensure you have run the build script to transpile the code.
Run the transpiled code using Node.js or any JavaScript runtime environment.

For example, to run the students.js file:

```bash
node .\dist\students.js
```

### Features

ES6 Concepts

Classes and Inheritance: Demonstrated in oo.js.
Promises and Async/Await: Demonstrated in async.js.
Destructuring and Spread/Rest Operators: Demonstrated in rest_spread.js.
Map and Set: Demonstrated in map_set.js.