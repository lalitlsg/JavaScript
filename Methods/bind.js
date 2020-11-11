"use strict";

// var name = "garghate";
// var desg = "Python dev";
// console.log(this === window);
// console.log(this.desg);

let profile1 = {
  name: "Lalit",
  desg: "SE",
  show: function(company, city) {
    console.log(this); //refers to owner object
    console.log(`${this.name} works at ${company} as ${this.desg} in ${city}`);
  }
};

//Note :
//Cannot Do like this because now commonShow fun comes in global excution context hence "this" keyword
//will refers to window object and will get name and desg as undefined because there is no such varibles declared
//in global execution context
//and in strict mode it will give TypeError because "this" keyword refers to undefined in strict mode
let commonShow = profile1.show;
// commonShow();

//To overcome this we use bind() method

let profile2 = {
  name: "Nikhil",
  desg: "JD"
};

profile2.show = profile1.show.bind(profile2);
// profile2.show("TCS", "Chennai");

// ---------------------------------------------------------------------------------------------------------------------

let bike1 = {
  bname: "Honda",
  bavg: 60
};
let bike2 = {
  bname: "Activa",
  bavg: 50
};
let bike3 = {
  bname: "Access",
  bavg: 70
};

/*
This will not work because 
You cannot rebind this in an arrow function. It will always be defined as the context in which it was defined. 
link: https://stackoverflow.com/questions/33308121/can-you-bind-this-in-an-arrow-function
*/
// const showAvg = () => {
//   console.log(this); // refers to window object
//   console.log(`${this.bname} has average of ${this.avg}`);
// };

const showAvg = function() {
  console.log(this); // refers to owner object
  console.log(`${this.bname} has average of ${this.bavg}`);
};
bike1.avg = showAvg.bind(bike1);
bike2.avg = showAvg.bind(bike2);
bike3.avg = showAvg.bind(bike3);

bike1.avg();
bike2.avg();
bike3.avg();
