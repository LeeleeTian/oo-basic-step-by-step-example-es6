"use strict";

import Person from "./person.js";

export default class Teacher extends Person {
    constructor(x, y, z) {
      super(x, y);
      this.class = z;
    }
  
    introduce() {
      return (this.class != null)? super.introduce() + ` I am a ${Teacher.name}. I teach Class ${this.class}.`
      : super.introduce() + ` I am a ${Teacher.name}. I teach No Class.`;
    }
};



