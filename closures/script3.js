// setTimeout does not always run after specific amount of time.

// console.log("Start");

// setTimeout(() => {
//   console.log("Callback");
// }, 3000);

// console.log("End");

//block main thread

// const startDate = new Date().getTime();
// let endDate = startDate;
// while (endDate < startDate + 10000) {
//   endDate = new Date().getTime();
// }
// console.log("Main Thread Execution Complete");
