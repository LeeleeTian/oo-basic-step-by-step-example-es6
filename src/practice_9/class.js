"use strict";

export default class Class {
    constructor(x) {
      this.number = x;
    }

    getDisplayName() {
      return 'Class ' + this.number;
    }

    assignLeader(student) {
      (student.klass.number == this.number)? this.leader = student : console.log('It is not one of us.');
    }

    appendMember(student) {
      student.klass = this;  
    }
};




