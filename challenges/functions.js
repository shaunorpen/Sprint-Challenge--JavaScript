// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume (param1, param2, cb) {
  if (param1 && param2 && cb) {
    return cb(param1, param2);
  } else {
    return `Please supply all inputs`;
  }
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add (num1, num2) {
  if (typeof(num1) === 'number' && typeof(num2) === 'number') {
    return num1 + num2;
  } else {
    return `Please input two numbers`;
  }
}

function multiply (num1, num2) {
  if (typeof(num1) === 'number' && typeof(num2) === 'number') {
    return num1 * num2;
  } else {
    return `Please input two numbers`;
  }
}

function greeting (firstName, lastName) {
  if (typeof(firstName) === 'string' && typeof(lastName) === 'string') {
    return `Hello ${firstName} ${lastName}, nice to meet you!`
  } else {
    return 'Please input two strings';
  }
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

// Nested functions have access to all variables from their enclosing scope, all the way up to global variables. 'internal' is defined in nestedFunction()'s parent, so nestedFunction() has access to it.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();