// a();
// b();

//1. Function Statement / Function Declaration
// function a() {
//   console.log("a Lalit");
// }

//2. Function Expresion
// const b = function () {
//   console.log("b Lalit");
// };

//Diff bet 1 & 2 is hoisting, as b is just a variable. Hence the err would be b is not a function if called.

//Anonymous Functions
// (() => {
//   console.log("Called Lalit");
// })();

//Named Function Expression
// const c = function xyz() {
//   console.log("named lalit");
// };

//First Class Functions / First Class Citizens
//The ability of functions to be used as values,
//can be pass as values to another functions &
//can return function as result from another function
//is called First Class Functions

// const d = (fun) => {
//   return () => 1 + fun();
// };
// const res = d(() => {
//   return 10;
// });
// console.log(res()); //op : 11

//Callback Functions
// setTimeout(() => {
//   console.log("i'm callback inside setTimeout");
// }, 4000);

// const e = (fun) => {
//   fun();
// };
// e(() => {
//   console.log("i'm callback fun");
// });

//Event Listeners, Callbacks & Closures
const attachEventListener = () => {
  let count = 0;
  document.getElementById("click").addEventListener("click", () => {
    console.log(`btn clicked ${++count} times`);
  });
};
attachEventListener();
