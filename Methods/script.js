"use strict";

//Call Method

let profile1 = {
  name: "Lalit",
  desg: "SE",
  show: function(company, city) {
    console.log(this); //refers to owner object
    console.log(`${this.name} works at ${company} as ${this.desg} in ${city}`);
  },

  //Note : In Object method if we use arrow function then it will refers to window object
  disp: (company, city) => {
    console.log(this); //refers to window object
    console.log(`${this.name} works at ${company} as ${this.desg} in ${city}`);
  }
};

profile1.show("XYZ", "Pune");
// profile1.disp("XYZ", "Pune");

let profile2 = {
  name: "Nikhil",
  desg: "JD"
};

profile1.show.call(profile2, "PQR", "Mumbai");
