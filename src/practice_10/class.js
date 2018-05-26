"use strict";

export default class Class {
    constructor(x) {
      this.number = x;
    }

    getDisplayName() {
      return 'Class ' + this.number;
    }

    assignLeader(student) {
      (this.isIn(student))? this.leader = student : console.log('It is not one of us.');
    }

    appendMember(student) {
      student.klass = this;  
    }

    isIn(student) {
      return (student.klass.number == this.number)? true : false;    
    }
};





