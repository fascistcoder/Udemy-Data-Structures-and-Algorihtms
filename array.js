"use strict";

//Arrays operations

const strings = ["a", "b", "c", "d"];

//4*4 = 16 bytes of storage

console.log(strings[2]);

//push
strings.push("e"); //O(1)
console.log(strings);

//pop
strings.pop();
strings.pop();

console.log(strings);

//unshift
strings.unshift("x"); //O(n)
console.log(strings);

//splice
strings.splice(2,0,"alien"); //O(n)
console.log(strings);

//C++
/* int a[20];
int b[5] {1,2,3,4,5} */

