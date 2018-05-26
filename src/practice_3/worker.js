"use strict";

import Person from "./person.js";

export default class Worker extends Person {
    constructor(x, y) {
      super(x, y);
    }
  
    introduce() {
      return `I am a ${Worker.name}. I have a job.`;
    }
};
