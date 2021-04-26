// Function Currying :
// take first argument and return function
// take second argument and return function
// take third argument and return function and so on... until the argument list ends

// We can do function currying in two ways
// 1. using bind method
// 2. using closures

// 1. using bind method

const multiply = (a, b) => {
  return a * b;
};

const multiply2ByAny = multiply.bind(this, 2);
console.log(multiply2ByAny(10));

const multiple3ByAny = multiply.bind(this, 3);
console.log(multiple3ByAny(20));

// 2. using closures

const addAllNos = (a) => {
  return (b) => {
    return (c) => {
      console.log(a + b + c);
    };
  };
};

const add = addAllNos(0);
const add20 = add(10);
add20(20);
