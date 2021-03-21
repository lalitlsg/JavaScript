// functions in js
// var x = 1;
// a();
// b();
// console.log(x);
// function a() {
//   var x = 10;
//   console.log(x);
// }
// function b() {
//   var a = 100;
//   console.log(a);
// }

//the window object
// console.log(window.x);
//console.log(a); //Reference Error : a is not define
// console.log(this.x);
//note: shortest js program is empty js file

// scope chain
// function a() {
//   b();
//   function b() {
//     console.log(p);
//   }
// }
// var p = 10;
// a();

//let, const & temporal dead zone
//yes, let and const are hosted too
// console.log(b);
//console.log(a); //ReferenceError: Cannot access 'a' before initialization
// let a = 10;
// console.log(a);
// var b = 100;
// const c = 12;
//Temporal Dead Zone: A time between a varible(let, const) get hosted until they are initialize.
//If you try to access variable in temporal dead zone, it will give reference error.
//let & const are not attach to window/this object
//redeclaration is not possible in case of let & const unlike var.
