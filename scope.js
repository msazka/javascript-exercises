"use strict";

function priceMessage(orderSize) {
  if (orderSize > 12) {
    return "Large order, call the bakery ahead";
  }
  return "Ready soon, walk right in";
}

console.log(priceMessage(14));
console.log(priceMessage(3));

const shopName = "Maison Sarah";

function greet(customer) {
  const line = `Welcome to ${shopName}, ${customer}`;
  return line;
}

console.log(greet("Anna"));
console.log(typeof line);

function greet(customer = "friend") {
  return `Welcome, ${customer}`;
}

console.log(greet("Anna"));
console.log(greet());
const value = 42;

try {
  const shout = value.toUpperCase();
  console.log(shout);
} catch (error) {
  console.log(`That did not work: ${error.message}`);
}

console.log("The program is still running");
