"use strict";

// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.
const shopName = "The Corner Bakery"; // const because the name of the shop will not change
let shopLocation = "Berlin - Spandau"; // let because the location might change
let shopHours = "9:00 AM - 9:00 PM"; // let because the hours might change
let orderCountPerDay = 0; // let because the count can change
const taxNumber = "123456789"; // const because the tax number will not change

// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.
console.log(typeof shopName);
console.log(typeof shopLocation);
console.log(typeof shopHours);
console.log(typeof orderCountPerDay);
console.log(typeof taxNumber);
console.log(typeof null); // historical bug since 1995 since it returns object instead of null
console.log(typeof undefined);

// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.
const unassignedVariable = 1; // variable declared but not assigned a value
const nullVariable = null; // variable assigned to null

console.log(unassignedVariable);
console.log(nullVariable);
console.log(typeof unassignedVariable);
console.log(typeof nullVariable);

// The difference is that the unassigned variable is undefined while the null variable is an object with no value.

// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
const priceText = "4.50";
const countText = "12";
const flagText = "true";

console.log(Number(priceText), typeof Number(priceText));
console.log(Number(countText), typeof Number(countText));
console.log(Boolean(flagText), typeof Boolean(flagText));
const myNumber = 42;
console.log(String(myNumber), typeof String(myNumber));

// Number(priceText) produces NaN because priceText is not a clean number.

// TODO: Part five.
// The file ends with a short broken program that contains a reassigned `const`, an assignment
// to a variable that was never declared, and a variable read before its declaration line. Run
// it, read each error message carefully, repair all three problems, and describe each repair
// in one comment line.

// ! This broken program crashes on purpose, one error at a time.
// ! Keep it commented
// until you reach this part, then uncomment and repair:
let bakeryName = "Maison Sarah";
/*/
/home/azka/Documents/SAP-Javascript/JS-Exercises/lesson-02.js:80
bakeryName = "The Corner Bakery";
           ^

TypeError: Assignment to constant variable.
/*/
bakeryName = "The Corner Bakery";
let openingHour = 7;
let loafCount = 12;
console.log(loafCount);

// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.

let a = 3;
let b = 5;
let temp = a; // temporary variable to hold value of a
a = b; // assign value of b to a
b = temp; // assign value of temp to b

console.log(a); // log 5
console.log(b); // log 3

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
