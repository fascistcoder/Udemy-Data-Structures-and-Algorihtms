//log all pairs o array

const boxes = [1, 2, 3, 4, 5];

// function logAllpairs(Arr) {
//   for (let i = 0; i < Arr.length; i++) {
//     for (let j = 0; j < Arr.length; j++) {
//       console.log(i, j);
//     }
//   }
// }

function logAllpairs(boxes) {
    for (const i of boxes.entries()) {
      for (const j of boxes.entries()) {
        console.log(i[0], j[0]);
      }
    }
  }

logAllpairs(boxes);
