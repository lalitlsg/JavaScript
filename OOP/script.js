class Mobile {
  constructor(month, year) {
    //instance member
    this.month = month;
    this.year = year;
    this.showMonth = () => {
      console.log(this);
      console.log(`${this.name} lauch in month of ${this.month}`);
    };

    this.view = () => {
      //   console.log(this);
      console.log(`I am super class instance method, I have ${this.name}`);
    };
  }
  //prototype member
  display() {
    return `Super class display method,You purchase ${this.name}`;
  }

  showYear() {
    console.log(this);
    console.log(`${this.name} lauch in year of ${this.year}`);
  }

  //static method
  static writeClass() {
    console.log(this);
    console.log(`I am Mobile class method, called using ${this.name} class`);
  }
}

class Samsung extends Mobile {
  constructor(name, price, month, year) {
    super(month, year); //to invoke parent class constructor and pass arguments
    //instance member
    this.name = name;
    this.price = price;
    //overrides super class view method
    // this.view = () => {
    //   console.log("Sub class view method");
    // };
    this.showName = () => {
      //   console.log(this);
      //   console.log(`Name : ${this.name}`);
      console.log(this.display()); // call super class prototype method
      console.log(super.display()); // call super class prototype method
      this.view(); //to call super class instance method
      //   super.view(); // will not work bacause view() is super class instance method, so it will be
      //automatically available in subclass hence call with this keyword
    };
  }

  //   Observation : If we define arrow function inside class like this then it will
  //   automatically becomes instance member
  // showPrice = () => {
  //   console.log(this);
  //   console.log(`Price of ${this.name} is ${this.price}`);
  // };

  //prototype member
  //override super class display method
  display() {
    console.log(this);
    return `Sub class display method`;
  }
  showPrice() {
    console.log(this);
    console.log(`Price of ${this.name} is ${this.price}`);
  }
}

let m1 = new Mobile();
// console.log(Mobile.prototype);
// console.log(m1);
let s1 = new Samsung("galexy", 5000, "Nov", 2012);
// let s2 = new Samsung("galexy", 5000);

// s1.showName();
// s1.showPrice();
// console.log(s1.__proto__);
// s1.showMonth();
// s1.showYear();
// console.log(s1);
// console.log(s2);

s1.display();
// Samsung.writeClass();
// Mobile.writeClass();

//Note : How to identify prototype
//If constructor of Function.prototype holds the Function itself then,
//Function.prototype is prototype object of that Function
//In case of classes consider class in place of function

//If we override instance member method then parent class method will be remove from the object hence
//cannot call parent class method (with super keyword)
//On the other hand If we overide prototype member method then parent class method will not remove
//and we can still call parent class method with super keyword
//this is because both child and parent class have their seperate prototype object
