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
