"use strict";

import Person from "./person.js";

export default class Student extends Person {
    constructor(x, y, z) {
    super(x, y);
    this.class = z;
    }

    introduce() {
    return `I am a ${Student.name}. I am at Class ${this.class}.`;
    }
};
