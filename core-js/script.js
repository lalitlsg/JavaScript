let obj1 = {
  firstname: "lalit",
  lastname: "garghate",
  print: function () {
    console.log(`${this.firstname} ${this.lastname}`);
  },
};

obj1.print();

let obj2 = {
  firstname: "sam",
  lastname: "walton",
};

//function borrowing
//using call method
obj1.print.call(obj2);
