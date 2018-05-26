"use strict";

export default class Person {
    constructor(x, y) {
      this.name = x;
      this.age = y;
    }
  
    introduce() {
      return this.basic_introduce();
    }

    basic_introduce() {
      return `My name is ${this.name}. I am ${this.age} years old.`;
    }
};

