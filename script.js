'use strict';

// 6 kyu: The Supermarket Queue
function queueTime(customers, n) {
  let tills = new Array(n).fill(0);
  customers.forEach(time => (tills[tills.indexOf(Math.min(...tills))] += time));
  return Math.max(...tills);
}
console.log(queueTime([10, 2, 3, 3], 2)); // 10
console.log(queueTime([2, 3, 10, 2], 2)); // 12
