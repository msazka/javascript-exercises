"use strict";

// Lesson 07 exercise: Objects
// In your exercise repository, create a branch named `lesson-07-exercise` and switch to it,
// then open `lesson-07.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Model a single menu item as an object with at least four properties of mixed types,
// including one boolean. Log two properties with dot notation, then log one property through
// bracket notation with the key held in a variable, and note in a comment why the brackets
// were required in that case.
const menuItem = {
  name: "Pizza",
  price: 8.5,
  vegetarian: true,
  ingredients: ["tomato", "cheese", "basil"],
};

console.log(menuItem.name);
console.log(menuItem.price);
const key = "vegetarian";
console.log(menuItem[key]); // Brackets required because the key is a variable, not a literal string
// TODO: Part two.
// Give the item a `describe` method that returns one sentence built from the object's own
// properties through `this`, and log the result of calling it.
menuItem.describe = function () {
  return `This is a ${this.name}, costs ${this.price} euros, and is ${this.vegetarian ? "" : "not "}vegetarian.`;
};
console.log(menuItem.describe());

// TODO: Part three.
// Build an array of at least five menu item objects, and walk it with `for...of`, logging one
// formatted line per item.
const menuItems = [
  { name: "Pizza", price: 8.5, vegetarian: true },
  { name: "Burger", price: 6.0, vegetarian: false },
  { name: "Salad", price: 5.0, vegetarian: true },
  { name: "Pasta", price: 7.5, vegetarian: false },
  { name: "Soup", price: 4.5, vegetarian: true },
];

for (const item of menuItems) {
  console.log(
    `${item.name} costs ${item.price} euros and is ${item.vegetarian ? "" : "not "}vegetarian.`,
  );
}

// TODO: Part four.
// Put the callback methods to work on the data: log the names of all vegetarian items by
// combining `filter` and `map`, and fetch the first item cheaper than three euros with `find`.
// Add a comment stating what `find` returns when nothing matches.

menuItems
  .filter((item) => item.vegetarian)
  .map((item) => console.log(item.name));

const cheapItem = menuItems.find((item) => item.price < 2);
console.log(cheapItem); // Returns undefined when nothing matches
// TODO: Part five.
// Take one menu item and log its keys, its values, and finally every pair through a `for...of`
// loop over its entries with a destructured pair, formatted as the key, a colon in the output
// text, and the value.
console.log(Object.keys(menuItem));
console.log(Object.values(menuItem));
console.log(Object.entries(menuItem));
// TODO: Part six.
// Assign one item to a second variable, change the price through the second name, and log the
// first to demonstrate the shared reference. Then build a spread copy that overrides only the
// price, and log both objects to prove they now differ in exactly that property.

const itemCopy = menuItem;
itemCopy.price = 10.0;
console.log(menuItem.price); // Shows the updated price due to shared reference

const spreadCopy = { ...menuItem, price: 12.0 };
console.log(menuItem.price, spreadCopy.price); // Shows different prices due to spread copy

// TODO: Part seven.
// As a stretch, build the classic word frequency counter: split the provided sentence into
// words and walk them with a loop, using each word as a bracket-notation key on a counter
// object and adding one per sighting. Log the finished counter, and if the sort extension
// caught your interest, log its entries ordered so that the most frequent word comes first.

// * The provided sentence for the word frequency counter:
const sentence =
  "the quick brown fox jumps over the lazy dog the fox sleeps and the dog dreams";

const words = sentence.split(" ");
const counter = {};

for (const word of words) {
  counter[word] = (counter[word] || 0) + 1;
}

console.log(counter);

// const sortedEntries = Object.entries(counter).sort((a, b) => b - a);
// console.log(sortedEntries);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
