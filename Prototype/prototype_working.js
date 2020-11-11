"use strict";

function Student() {
  this.b = 20;
}

// console.log(Student); //return Student Object

console.log(Student.prototype); // return Student.prototype - prototype object of Student

let s1 = new Student();
console.log(s1.__proto__); //return Student.prototype - prototype object of Student

console.log(Student.prototype === s1.__proto__); //return true

console.log(s1.__proto__.constructor === Student); //return true

console.log(Student.prototype.constructor === Student); //return true

Student.prototype.a = 10;

console.log(s1.a); //return 10
console.log(s1.b);
//Thought:
//If you want to override prototype method then define the method with same name as instance member
