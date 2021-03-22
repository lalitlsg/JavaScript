//closures
// ex-1
// function a() {
//   let x = 10;
//   function b() {
//     console.log(x);
//   }
//   b();
// }
// a();

// ex-2
// const a = () => {
//   const val = 90;
//   return () => console.log(val);
// };
// const res = a();
// console.log(res);
// res(); //op = 90

// functions along with its lexical scope bundled together is called closures.

// ex-4
// const a = () => {
//   const x = 10;
//   return () => () => console.log(x);
// };
// a()()();

// ex-5
// const a = () => {
//   const x = 10;
//   const b = () => {
//     const y = 20;
//     const c = () => {
//       console.log(x, y);
//     };
//     c();
//   };
//   b();
// };
// a();
