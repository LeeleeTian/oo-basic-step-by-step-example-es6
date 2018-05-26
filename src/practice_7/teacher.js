"use strict";

import Person from "./person.js";

export default class Teacher extends Person {
    constructor(x, y, z) {
      super(x, y);
      this.klass = z;
    }
  
    introduce() {
      return (this.klass != null)? 
      `${super.introduce()} I am a ${Teacher.name}. I teach ${this.klass.getDisplayName()}.`
      : `${super.introduce()} I am a ${Teacher.name}. I teach No Class.`;
    }

    introduceWith(student) {
      return (student.klass.number == this.klass.number)?
      `${super.introduce()} I am a ${Teacher.name}. I teach ${student.name}.`
      : `${super.introduce()} I am a ${Teacher.name}. I don't teach ${student.name}.`;
    }
};




