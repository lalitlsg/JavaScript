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

// ex-6
// const a = () => {
//   var x = 10;
//   setTimeout(() => {
//     console.log(x);
//   }, 1000);
// };
// a();

// ex-7
// const a = () => {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000 * i);
//   }
// };
// a(); op: 6 6 6 6 6

// ex-8
// const a = () => {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000 * i);
//   }
// };
// a(); op: 1 2 3 4 5

// ex-9
// const a = () => {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(
//       (val) => {
//         console.log(val);
//       },
//       1000 * i,
//       i
//     );
//   }
// };
// a();

// ex-10
// const a = () => {
//   for (var i = 1; i <= 5; i++) {
//     const b = (val) => {
//       setTimeout(() => {
//         console.log(val);
//       }, 1000 * val);
//     };
//     b(i);
//   }
// };
// a();
