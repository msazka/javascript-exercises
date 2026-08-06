"use strict";

const flavors = ["rye", "spelt", "wheat"];

console.log(flavors);
console.log(flavors[0]);
console.log(flavors.length);

const prices = [4.5, 12, 3.2, 8];

prices.forEach((price) => console.log(`Costs ${price} euros`));
const withTax = prices.map((price) => (price * 1.07).toFixed(2));
console.log(withTax);
