"use strict";

export default class Class {
    constructor(x) {
      this.number = x;
    }

    getDisplayName() {
      return 'Class ' + this.number;
    }

    assignLeader(student) {
      if(this.isIn(student)) {
        this.leader = student;
        if(this.assignLeaderListener != null)
          console.log(`I am ${this.assignLeaderListener.name}. I know ${this.leader.name} become Leader of ${this.getDisplayName()}.`);
      }else{  
        console.log('It is not one of us.');
      }
    }

    appendMember(student) {
      student.klass = this;
      if(this.joinListener != null)
        console.log(`I am ${this.joinListener.name}. I know ${student.name} has joined ${this.getDisplayName()}.`);
    }

    isIn(student) {
      return (student.klass.number == this.number)? true : false;    
    }

    registerAssignLeaderListener(teacher) {
      this.assignLeaderListener = teacher;
    }
    
    registerJoinListener(teacher) {
      this.joinListener = teacher;
    }
};






