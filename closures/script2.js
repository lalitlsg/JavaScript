// Event Loops
// Web Apis eg: setTimeout, DOM Apis, fetch(), console.log()

// Callback Queue / Task Queue

// MicroTask Queue
// - Higher Priority ,
// All the callback fun which comes through promices & Mutation Onserver comes under microtask queue.
// fetch() comes under it.

//  ^
//  |
//  |

// Event Loop - In sabaka paharedar, jo call stack aur Web apis k bich santulan banaye rakhata hai.
// Event loop bhai, callback queue, microtask queue aur call stack k upper nazar gadaye baitha hai.

// Mutation Observer : keeps on checking whether there is some mutation in dom tree or not.

// Starvation: If microtask queue is very long, then fun inside callback queue will not get a chance
// to execute for a long time.This is called starvation.
