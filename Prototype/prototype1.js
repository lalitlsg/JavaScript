"use strict";
let Student = function(name, age) {
  //Instance Member
  this.name = name;
  this.age = age;
  //this method will be available in every instance
  //usage more memory
  this.showName = function() {
    console.log(this); //this refers to owner object
    console.log(`Name is ${this.name}`);
  };
  //Arrow fun will also work
  //   this.showName = () => {
  //     console.log(this); //this refers to owner object
  //     console.log(`Name is ${this.name}`);
  //   };
};

let s1 = new Student("Lalit", 23);
let s2 = new Student("Nikhil", 22);

//Prototype Member
//syntax : Classname.prototype.key  = value
//this method will be available at only one place in prototype object of Student hence memory efficient
Student.prototype.showAge = function() {
  console.log(this);
  console.log(`Age of ${this.name} is ${this.age}`);
};

// console.log(s1);
// console.log(s2);

// s1.showName();
// s2.showName();

// s1.showAge();
// s2.showAge();

//iterate through instance member

//will only shows instance member
// console.log(Object.keys(s1));

//will show both instance as well as prototype member
// for (let key in s1) {
//   console.log(key);
// }
