"use strict";

export default class Class {
    constructor(x) {
      this.number = x;
    }

    getDisplayName() {
      return 'Class ' + this.number;
    }

    assignLeader(student) {
      if(student.klass.number == this.number)  
        this.leader = student;  
    }
};




