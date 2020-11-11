"use strict";

let profile1 = {
  name: "Lalit",
  desg: "SE",
  show: function(company, city) {
    console.log(this); //refers to owner object
    console.log(`${this.name} works at ${company} as ${this.desg} in ${city}`);
  }
};

profile1.show("XYZ", "Pune");

let profile2 = {
  name: "Nikhil",
  desg: "JD"
};

//apply method takes the argumets as array
profile1.show.apply(profile2, ["PQR", "Mumbai"]);

let arr = [1, 2, 3, 4, 5];
let m = Math.max.apply(null, arr);
// let m = Math.max(...arr); //alterate way using spread operator
console.log(m);
