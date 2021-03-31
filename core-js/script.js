// let obj1 = {
//   firstname: "lalit",
//   lastname: "garghate",
//   print: function () {
//     console.log(`${this.firstname} ${this.lastname}`);
//   },
// };

// obj1.print();

// let obj2 = {
//   firstname: "sam",
//   lastname: "walton",
// };

// //function borrowing
// //using call method
// obj1.print.call(obj2);

//seperating function from obj and make it common

let obj1 = {
  firstname: "lalit",
  lastname: "garghate",
};
let obj2 = {
  firstname: "sam",
  lastname: "walton",
};

// will give undefine cause arrow fun does not have its own this.
// const print = () => {
//   console.log(`${this.firstname} ${this.lastname}`);
// };

const print = function (place, age) {
  console.log(`${this.firstname} ${this.lastname} ${place} ${age}`);
};

// print.call(obj1, "nagpur", 12);
// print.call(obj2, "pune", 10);

//apply method
// print.apply(obj1, ["nagpur", 22]);
// print.apply(obj2, ["pune", 66]);

//bind method
let show = print.bind(obj2, "mumbai", 33);
show();
