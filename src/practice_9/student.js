"use strict";

import Person from "./person.js";

export default class Student extends Person {
    constructor(x, y, z, c) {
      super(x, y, z);
      this.klass = c;
    }

    introduce() {
      return (this == this.klass.leader)?
      `${super.introduce()} I am a ${Student.name}. I am Leader of ${this.klass.getDisplayName()}.`
      :`${super.introduce()} I am a ${Student.name}. I am at ${this.klass.getDisplayName()}.`;
    }
};




