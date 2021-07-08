//find !st, find nth..

const array = [
  {
    tweet: "hi",
    date: 2012,
  },
  {
    tweet: "my",
    date: 2014,
  },
  {
    tweet: "teddy",
    date: 2017,
  },
];

const x = array[0]; //O(1)
const y = array[array.length - 1]; //O(1)

console.log(x, y);
