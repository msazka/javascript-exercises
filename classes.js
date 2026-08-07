"use strict";

class Artist {
  constructor(name, genre, total) {
    this.name = name;
    this.genre = genre;
    this.total = total;
  }

  describe() {
    return `${this.name}, ${this.genre}, ${this.total} of music`;
  }
}

const pinkfong = new Artist("Pinkfong", "Children's music", "11:31");
const cash = new Artist("Johnny Cash", "Country", "15:40");

console.log(pinkfong.describe());
console.log(cash.describe());
