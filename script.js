'use strict';

// 6 kyu: The Supermarket Queue
function queueTime(customers, n) {
  let tills = new Array(n).fill(0);
  customers.forEach(time => (tills[tills.indexOf(Math.min(...tills))] += time));
  return Math.max(...tills);
}
// console.log(queueTime([10, 2, 3, 3], 2)); // 10
// console.log(queueTime([2, 3, 10, 2], 2)); // 12

// 6 kyu: Playing with digits
function digPow(n, p) {
  const result = (n + '')
    .split('')
    .reduce((acc, cur, i) => acc + Math.pow(+cur, p + i), 0);

  return Number.isInteger(result / n) ? result / n : -1;
}
// console.log(digPow(89, 1)); // 1
// console.log(digPow(92, 1)); // -1
// console.log(digPow(46288, 3)); // 51

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
// console.log(findUniq([1, 0, 0])); // 1
// console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
// console.log(findUniq([3, 10, 3, 3, 3])); // 10

// arr.sort((a, b) => a - b)
// arr[0] === arr[1] ? arr.pop() : arr[0]

// 6 kyu: Mexican Wave
function wave(str) {
  return new Array(str.length)
    .fill(str)
    .map((x, i) => x.slice(0, i) + x[i].toUpperCase() + x.slice(i + 1))
    .filter((x, i) => x[i] !== ' ');
}
// console.log(wave(''));
// console.log(wave('two words'));

// 6 kyu: Persistent Bugger
function persistence(num) {
  let times = 0;
  let output = num;

  while (String(output).length > 1) {
    output = String(output)
      .split('')
      .reduce((acc, cur) => acc * cur);
    times++;
  }
  return times;
}
// console.log(persistence(39)); // 3
// console.log(persistence(4)); // 0
// console.log(persistence(999)); // 4

// const persistence = num => {
//   return `${num}`.length > 1
//     ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b))
//     : 0;
// }

// 7 kyu: Two to one
function longest(s1, s2) {
  // set as string don't need to fill []
  return [...new Set(s1 + s2)].sort().join('');
}
// console.log(longest('aretheyhere', 'yestheyarehere')); // aehrsty

// 6 kyu: Build Tower
function towerBuilder(nFloors) {
  return new Array(nFloors).fill('*').map((x, i) =>
    x
      .repeat(2 * i + 1)
      .padStart(nFloors + i, ' ')
      .padEnd(nFloors * 2 - 1, ' ')
  );
}
// console.log(towerBuilder(3)); //  ['  *  ', ' *** ', '*****']

// Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]
// Array.from({length: n}, function(v, k) {
//   const spaces = ' '.repeat(n - k - 1);
//   return spaces + '*'.repeat(k + k + 1) + spaces;
// });

// 6 kyu: Count the smiley faces!
function countSmileys(arr) {
  const str1 = [';', ':'];
  const str2 = ['-', '~', ')', 'D'];
  const str3 = [')', 'D'];

  return arr.filter(
    x =>
      str1.includes(x[0]) &&
      ((x.length === 2 && str2.includes(x[1])) ||
        (x.length === 3 && str2.includes(x[1]) && str3.includes(x[2])))
  ).length;
}
// function countSmileys(arr) {
//   return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
// }
// console.log(countSmileys([':)', ':(', ':D', ':O', ':;']));

// kyu 6: Count characters in your string
function count(string) {
  // TODO
  return string.split('').reduce((acc, cur) => {
    !acc[cur] ? (acc[cur] = 1) : acc[cur]++;
    return acc;
  }, {});
}
// console.log(count('abaABC'));

// kyu 6: Equal Sides Of An Array
function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let left = arr.slice(0, i).reduce((acc, cur) => acc + cur, 0);
    let right = arr.slice(i + 1).reduce((acc, cur) => acc + cur, 0);

    if (left === right) return i;
  }
  return -1;
}
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); // 3
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -1

// 6 kyu: Array.diff
function arrayDiff(a, b) {
  return a.filter(x => !b.includes(x));
}
// console.log(arrayDiff([1, 2], [1])); // [2]
// console.log(arrayDiff([], [1, 2])); // []

// 7 kyu: Isograms
function isIsogram(str) {
  const arrStr = str.toLowerCase().split('');
  return arrStr.every((x, i) =>
    x === '' ||
    !arrStr
      .slice(0, i)
      .concat(arrStr.slice(i + 1))
      .includes(x)
      ? true
      : false
  );
}
// function isIsogram(str){
// 	return new Set(str.toUpperCase()).size == str.length;
// }
// console.log(isIsogram('isogram')); // true
// console.log(isIsogram('isIsogram')); // false
// console.log(isIsogram('')); // true

// kyu 5: Rot13 🔥
function rot13(message) {
  //your code here
  const cipherA = 'abcdefghijklmABCDEFGHIJKLM';
  const cipherB = 'nopqrstuvwxyzNOPQRSTUVWXYZ';

  return message
    .split('')
    .map(x => {
      if (!(cipherA + cipherB).includes(x)) return x;

      const type = cipherA.split('').includes(x) ? 'cipherA' : 'cipherB';

      const index =
        type === 'cipherA' ? cipherA.indexOf(x) : cipherB.indexOf(x);

      return type === 'cipherA' ? cipherB[index] : cipherA[index];
    })
    .join('');
}
// function rot13(message) {
//   var a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   var b = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
//   return message.replace(/[a-z]/gi, match => {
//     console.log(match)
//     return b[a.indexOf(match)]});
// }
// console.log(rot13('Test:)')); // Grfg:)

// kyu 6: Detect Pangram
function isPangram(string) {
  const alphabet = [...new Set(string.toLowerCase())].filter(x =>
    /[a-z]/.test(x)
  );

  return alphabet.length === 26 ? true : false;
}
// console.log(isPangram('The quick brown fox jumps over the lazy dog.'));

// kyu 6: Counting Duplicates
function duplicateCount(text) {
  //...
  return Object.values(
    text
      .toLowerCase()
      .split('')
      .reduce((acc, cur) => {
        !acc[cur] ? (acc[cur] = 1) : acc[cur]++;
        return acc;
      }, {})
  ).filter(x => x > 1).length;
}
// console.log(duplicateCount('Indivisibilities')); // 2
