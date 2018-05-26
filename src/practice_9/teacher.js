"use strict";

import Person from "./person.js";

export default class Teacher extends Person {
    constructor(x, y, z, c) {
      super(x, y, z);
      this.klass = c;
    }
  
    introduce() {
      return (this.klass != null)? 
      `${super.introduce()} I am a ${Teacher.name}. I teach ${this.klass.getDisplayName()}.`
      : `${super.introduce()} I am a ${Teacher.name}. I teach No Class.`;
    }
};






