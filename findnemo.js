"use strict";
// const nemo = ["nemo"];
// const { performance } = require("perf_hooks");
// function findNemo(array) {
//   //   let t0 = performance.now();
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "nemo") {
//       console.log("Found nemo");
//     }
//   }
//   //   let t1 = performance.now();
//   //   console.log("Call to find nemo took " + (t1 - t0) + "milliseconds");
// }

// console.log(...nemo);
// findNemo(nemo); //O(n) --> linear time

function funChallenge(input) {
  let a = 10;
  a = 50 + 3;

  for (let i = 0; i < input.length; i++) {
    anotherFunction();
    let stranger = true;
    a++;
  }
  return a;
}

console.log(funChallenge(43));
