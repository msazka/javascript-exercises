"use strict";

const croissant = {
  name: "Butter Croissant",
  price: 2.8,
  vegetarian: true,
};

console.log(croissant.name);
console.log(croissant.price);
console.log(croissant.vegetarian);

const artists = [
  { name: "Pinkfong", genre: "Children's music", total: "11:31" },
  { name: "Adriano Celentano", genre: "Italian pop", total: "20:52" },
  { name: "Asake", genre: "Afrobeats", total: "14:08" },
];

for (const artist of artists) {
  console.log(`${artist.name}, ${artist.genre}, ${artist.total} of music`);
}
const popActs = artists.filter((artist) => artist.genre.includes("pop"));
console.log(popActs.length);

const hours = {
  saturday: "7:00 to 14:00",
  sunday: "8:00 to 12:00",
  monday: "closed",
};

console.log(Object.keys(hours));

console.log(Object.values(hours));
for (const [day1, time1] of Object.entries(hours)) {
  console.log(`${day1}: ${time1}`);
}

const original = { name: "Butter Croissant", price: 2.8 };
const copy = original;

copy.price = 9.99;
console.log(original.price);

const realCopy = { ...original, price: 3.0 };
console.log(original.price, realCopy.price);
