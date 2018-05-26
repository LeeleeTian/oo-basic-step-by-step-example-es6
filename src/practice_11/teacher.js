"use strict";

import Person from "./person.js";

export default class Teacher extends Person {
    constructor(x, y, z, c) {
      super(x, y, z);
      this.klasses = c;
    }
  
    introduce() {
      return (Array.isArray(this.klasses) && this.klasses.length != 0)? 
      `${super.introduce()} I am a ${Teacher.name}. I teach ${this.klasses.reduce((string, klass) => 
        (string == '')? string += klass.getDisplayName() : string += `, ${klass.number}`
      , '')}.`
      : `${super.introduce()} I am a ${Teacher.name}. I teach No Class.`;
    }

    isTeaching(student) {
        return this.klasses.some((klass) => klass.isIn(student));
    }
};








