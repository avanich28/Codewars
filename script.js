'use strict';

// 6 kyu: The Supermarket Queue
function queueTime(customers, n) {
  let tills = new Array(n).fill(0);
  customers.forEach(time => (tills[tills.indexOf(Math.min(...tills))] += time));
  return Math.max(...tills);
}
console.log(queueTime([10, 2, 3, 3], 2)); // 10
console.log(queueTime([2, 3, 10, 2], 2)); // 12

// 6 kyu: Playing with digits
function digPow(n, p) {
  const result = (n + '')
    .split('')
    .reduce((acc, cur, i) => acc + Math.pow(+cur, p + i), 0);

  return Number.isInteger(result / n) ? result / n : -1;
}
console.log(digPow(89, 1)); // 1
console.log(digPow(92, 1)); // -1
console.log(digPow(46288, 3)); // 51

// 6 kyu: Find the unique number
function findUniq(arr) {
  const storeNum = {};
  arr.forEach(x => {
    if (!storeNum[`${x}`]) storeNum[`${x}`] = 1;
    else storeNum[`${x}`]++;
  });

  for (const prop in storeNum) {
    if (storeNum[prop] === 1) return +prop;
  }
}
console.log(findUniq([1, 0, 0])); // 1
console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
console.log(findUniq([3, 10, 3, 3, 3])); // 10

// arr.sort((a, b) => a - b)
// arr[0] === arr[1] ? arr.pop() : arr[0]

// 6 kyu: Mexican Wave
function wave(str) {
  return new Array(str.length)
    .fill(str)
    .map((x, i) => x.slice(0, i) + x[i].toUpperCase() + x.slice(i + 1))
    .filter((x, i) => x[i] !== ' ');
}
console.log(wave(''));
console.log(wave('two words'));
