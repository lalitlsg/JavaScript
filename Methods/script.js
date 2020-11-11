"use strict";

//Call Method

let profile1 = {
  name: "Lalit",
  desg: "SE",
  show: function(company, city) {
    console.log(this);
    console.log(`${this.name} works at ${company} as ${this.desg} in ${city}`);
  }
};

profile1.show("XYZ", "Pune");

let profile2 = {
  name: "Nikhil",
  desg: "JD"
};

profile1.show.call(profile2, "PQR", "Mumbai");
