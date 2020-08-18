// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

// Explanation:
//nestedFunction() is using closure to access the variable internal defined outside its scope (i.e. in its lexical scope). nestedFunction first searches itself for the variable then moves to its outer scope myFunction() if not defined and finally to the global scope if it still can't find the variable. In our case, internal is defined in the block scope of myFunction().

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(a) {
  let counter = a;
  let sum = 0;
  return function () {
    while (counter > 0) sum += counter--;
    return sum;
  };
}

var sum01 = summation(3);
var sum02 = summation(4);
var sum03 = summation(5);

console.log("Argument: 3, Expected Ans: 6, Actual Ans: " + sum01());
console.log("Argument: 4, Expected Ans: 10, Actual Ans: " + sum02());
console.log("Argument: 5, Expected Ans: 15, Actual Ans: " + sum03());
