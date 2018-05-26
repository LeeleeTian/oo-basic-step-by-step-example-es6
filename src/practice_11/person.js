"use strict";

export default class Person {
    constructor(x, y, z) {
      this.id = x;
      this.name = y;
      this.age = z;
    }
  
    introduce() {
      return  `My name is ${this.name}. I am ${this.age} years old.`;
    }
};





