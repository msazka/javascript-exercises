"use strict";

// Lesson 03 exercise: Strings and numbers
// In your exercise repository, create a branch named `lesson-03-exercise` and switch to it,
// then open `lesson-03.js`, where the questions wait as comments. Work beneath each question
// in order.

// TODO: Part one.
// Declare variables for a shop name, an opening hour, and a closing hour, then log one
// welcoming sentence built as a single template literal that uses all three.
const shopName = "Maison Sarah";
const openingHour = 8;
const closingHour = 18;

console.log(
  `Welcome to ${shopName}! We are open from ${openingHour} AM to ${closingHour} PM.`,
);
// TODO: Part two.
// The file provides a messy string with surplus spaces at both ends, the wrong case, and one
// word that needs replacing. Apply the methods from this lesson, chained or in sequence, to
// log the cleaned version, and add a comment naming each method you used and the job it
// performed.

// * The provided messy string:
const messy = "   Maison   Sarah, fresh bread daily   ";
console.log(messy.trim().replace("Maison   Sarah", "Maison Sarah"));
// TODO: Part three.
// Using the provided product string, log its length, the position at which a given word
// begins, and a slice containing exactly that word. Then split the provided comma-separated
// list and log the resulting pieces.

// * The provided product string and comma-separated list:
const product = "Sourdough Loaf, whole grain";
const flavorList = "rye,spelt,wheat,olive";

console.log(product.length); // Logs the length of the product string
console.log(product.indexOf("whole")); // Logs the position of the word "whole"
console.log(product.slice(16, 22)); // Logs the slice containing the word "whole"
console.log(flavorList.split(",")); // Splits the flavorList string into an array and logs it

// TODO: Part four.
// From the net price and tax rate in the file, calculate the final price and log it inside a
// template literal, formatted to two decimal places. Add a comment explaining why the
// formatting step must come last.

// * The provided net price and tax rate:
const netPrice = 4.0;
const taxRate = 0.07;
const finalPrice = netPrice * taxRate;
console.log(`The final price is $${finalPrice.toFixed(2)}.`);
// The formatting step must come last because toFixed() converts the number to a string
//  but we want to perform the calculation before converting it to a string for display.

// TODO: Part five.
// Using the random recipe from this lesson, log a random whole number from 1 to 6. Then adapt
// the recipe to produce a number from 10 to 20, and explain your adaptation in a comment.

const roll = Math.floor(Math.random() * 6) + 1;
console.log(roll);
const randomNumber = Math.floor(Math.random() * 11) + 10;
console.log(randomNumber);
//Multiply the random number by 11 to generate number from 10 to 20 and add 10 to shift the range to start at 10

// TODO: Part six.
// Open the MDN String reference, choose one method this lesson did not cover, and use it
// correctly on a string of your choice. In a comment, cite the method's name and describe what
// it does in one sentence of your own words.
const illFormed = "https://example.com/search?q=\uD800";
console.log(encodeURI(illFormed.toWellFormed())); // The method used is `toWellFormed()`, which returns a well-formed version of the string,
// replacing any unpaired surrogates with the Unicode replacement character, ensuring the string is valid for URI encoding.

// TODO: Part seven.
// Two classic exercises close the lesson. First, build a username generator: from a first name
// and a last name held in variables, produce a lowercase username in the pattern of first
// initial followed by full last name, such as mmustermann. Second, write a mad-libs story:
// declare four variables, an adjective, a noun, a verb, and a place, and log one short,
// ridiculous story built from a single template literal that uses all four.
const firstName = "Max";
const lastName = "Mustermann";
const username = `${firstName[0].toLowerCase()}${lastName.toLowerCase()}`;
console.log(username);

const adjective = "silly";
const noun = "spoon";
const verb = "danced";
const preposition = "with";
const place = "moon";
console.log(
  `Once upon a time, a ${adjective} ${noun} ${verb} ${preposition} the ${place}.`,
);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
