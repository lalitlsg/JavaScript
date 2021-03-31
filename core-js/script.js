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

const print = function () {
  console.log(`${this.firstname} ${this.lastname}`);
};

print.call(obj1);
print.call(obj2);
