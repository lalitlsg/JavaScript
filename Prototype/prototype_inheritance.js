// "use strict";

function Father(sonName, fatherAge, profession) {
  this.sonName = sonName;
  this.age = fatherAge;
  this.profession = profession;

  this.fatherAge = function() {
    // console.log(this);
    console.log(`${this.sonName} Father's Age is ${this.age}`);
  };
}

function Son(sonName, fatherAge, profession) {
  Father.call(this, sonName, fatherAge, profession); //to inherit instance member

  //To override instance member
  //   this.fatherAge = function() {
  //     console.log("overrides fatherAge method");
  //   };
}

Father.prototype.fatherProfession = function() {
  console.log(`${this.sonName} Father's profession is ${this.profession}`);
};

Son.prototype = Object.create(Father.prototype); //prototype inheritance
Son.prototype.constructor = Son;

Father.prototype.s = 100;

//To override prototype member
Son.prototype.s = 200;

let f1 = new Father();
// console.log(f1.s);
let s1 = new Son("Lalit", 50, "Farmer");
s1.fatherAge();
// s1.fatherProfession();
let s2 = new Son("Nikhil", 40, "Teacher");
// s2.fatherAge();
// s2.fatherProfession();
// console.log(s1.s);
// console.log(s1.__proto__);
// console.log(Father.prototype);

//Note :
//To override property and method of parent constructor,
// define property and method with same name in child constructor
