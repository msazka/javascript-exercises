"use strict";

// Lesson 06 exercise: Arrays and loops
// In your exercise repository, create a branch named `lesson-06-exercise` and switch to it,
// then open `lesson-06.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Build an array of at least five menu item names. Log the whole array, the first item, the
// last item read through `length` minus 1, and the array's length.
const menuItems = ["Pizza", "Burger", "Pasta", "Salad", "Soup"];
console.log(menuItems);
console.log(menuItems[0]);
console.log(menuItems[menuItems.length - 1]);
console.log(menuItems.length);

// TODO: Part two.
// Grow and shrink the menu with one `push`, one `unshift`, one `pop`, and one `shift`, logging
// the array after each step, and note in a comment which end of the array each method touched.
menuItems.push("IceCream"); // Adds to the end
console.log(menuItems);

menuItems.unshift("Kebab"); // Adds to the beginning
console.log(menuItems);

menuItems.pop(); // Removes from the end
console.log(menuItems);

menuItems.shift(); // Removes from the beginning
console.log(menuItems);

// TODO: Part three.
// Print every menu item twice, first with a counting `for` loop that uses the index, then with
// a `for...of` loop, and add a one-line comment on when you would choose each form.
console.log("Using for loop:");
for (let i = 0; i < menuItems.length; i++) {
  console.log(menuItems[i]);
  console.log(menuItems[i]);
}

console.log("Using for...of loop:");
for (const item of menuItems) {
  console.log(item);
  console.log(item);
}
// Use a for loop when need the index or want to control the iteration and use a for...of loop when just need the values and not the index.

// TODO: Part four.
// Using the provided prices array, build display strings with `map`, keep the items under five
// euros with `filter`, and fetch the first item over ten euros with `find`, logging each
// result. Add a comment stating what `forEach` would have returned in their place, and why
// that is the well-known trap.

// * The provided prices:
const prices = [4.5, 12, 3.2, 8];

prices
  .map((price) => `Costs ${price} euros`)
  .forEach((displayString) => console.log(displayString));
const underFive = prices.filter((price) => price < 5);
console.log(underFive);

const firstOverTen = prices.find((price) => price > 10);
console.log(firstOverTen);

// forEach returned undefined for each iteration, as it does not return a new array. its trap beacause it is assumed to return a new array.
// TODO: Part five.
// Loop over the provided artists array and log a two-line card for each artist using template
// literals. Then add one artist of your own invention to the data and run the file again,
// noting in a comment what you did not have to change.

// * The provided artists:
const artists = [
  "Pinkfong",
  "Adriano Celentano",
  "Asake",
  "Miyagi and Andy Panda",
  "Johnny Cash",
];

for (const artist of artists) {
  console.log(`Artist: ${artist}`);
  console.log(`Type: Unknown`);
}

artists.push("New Cartoon Artist");
console.log(artists);
// I just added a new artist to the array.

// TODO: Part six.
// Assign the menu to a second variable, push a new item through the second name, and log both
// variables to demonstrate the shared reference. Then create a spread copy, change the copy,
// and log both lengths to prove the original survived.
const menuCopy = [...menuItems];
menuCopy.push("Steak");
console.log(menuItems.length); // Original length
console.log(menuCopy.length); // New length
const menuReference = menuItems;
menuReference.push("Fish");
console.log(menuItems.length); // Original length after reference change
console.log(menuReference.length); // New length after reference change

// TODO: Part seven.
// The counting classics. Implement FizzBuzz in full: loop from 1 to 100, printing Fizz for
// multiples of 3, Buzz for multiples of 5, FizzBuzz for both, and the number itself otherwise,
// reusing your single-number logic from the conditionals exercise. Then, with loops over the
// provided numbers array, compute the sum and find the largest value without library helpers.

// * The provided numbers for the sum and the largest:
const numbers = [12, 5, 41, 8, 33, 2, 27];
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

let sum = 0;
let largest = numbers[0];
for (const number of numbers) {
  sum += number;
  if (number > largest) {
    largest = number;
  }
}
console.log(`Sum: ${sum} | Largest: ${largest}`);

// TODO: Part eight.
// The string classics that waited for loops. Reverse a string with a loop that walks it
// backwards by index. Count its vowels with a loop and `includes` against a vowels array. As a
// stretch, use your reverser to build a palindrome check, and test it on three words, ignoring
// case with `toLowerCase`
const reverse = function (argument) {
  let reversed = "";
  for (let i = argument.length - 1; i >= 0; i--) {
    reversed += argument[i];
  }
  return reversed;
};

const countVowels = function (argument) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (const char of argument.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};

const isPalindrome = function (argument) {
  const lowerCaseStr = argument.toLowerCase();
  return lowerCaseStr === reverse(lowerCaseStr);
};

const testWords = ["Hello", "5Level5"];
for (const word of testWords) {
  console.log(
    `Word: ${word} | Reversed? ${reverse(word)} | Vowel Count? ${countVowels(word)} | Is Palindrome? ${isPalindrome(word)}`,
  );
}

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
