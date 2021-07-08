"use strict";

const arr1 = ["a", "b", "c", "d", "e"];
const arr2 = ["x", "y", "i"];

/* naive approach
function commonitems(a1, a2) {
  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      if (a1[i] === a2[j]) {
        return true;
        break;
      }
    }
  }
  return false;
}*/

//array1 ==> obj{
// a: true,
// b: true,
// c: true,
// d: true,
//}
//array2[index] === obj.properties

/*optimize solution
function commonitems2(a1, a2) {
  // loop through first array and create object where propeties === items in the array
  let map = {};
  for (let i = 0; i < a1.length; i++) {
    if (!map[a1[i]]) {
      const item = a1[i];
      map[item] = true;
    }
  }
  // loop through second array and check if item in second array exists on created object.
  for(let j=0;j<a2.length;j++)
  {
      if(map[a2[j]])
      {
          return true;
      }
  }
  return false;
}*/

/* ES 6 inbuilt functions
function commonitems3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}*/

/*
 const result = commonitems3(arr1, arr2);
 console.log(result);*/

const x = Math.pow(6,100);
console.log(x);