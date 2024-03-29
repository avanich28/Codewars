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

// 6 kyu: Counting Duplicates
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

// 6 kyu: Break camelCase
function solution(string) {
  return string === ''
    ? ''
    : string[0] + string.slice(1).replace(/[A-Z]/g, w => ` ${w}`);
}
// console.log(solution('aC'));

// 6 kyu: Find the odd int
function findOdd(A) {
  //happy coding!
  const count = A.reduce((acc, cur) => {
    !acc[cur] ? (acc[cur] = 1) : acc[cur]++;
    return acc;
  }, {});
  console.log(count);

  for (const [key, value] of Object.entries(count)) {
    if (value % 2 !== 0) return +key;
  }
}
// console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 5

// 6 kyu: Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
function sumDigPow(a, b) {
  let eureka = [];
  for (let i = a; i <= b; i++) {
    const powSum = (i + '')
      .split('')
      .map((x, i) => Math.pow(x, i + 1))
      .reduce((acc, cur) => acc + cur, 0);
    if (powSum === i) eureka.push(powSum);
  }
  return eureka;
}
// console.log(sumDigPow(90, 100));

// 6 kyu: Two Sum
function twoSum(numbers, target) {
  // ...
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i, j];
    }
  }
}
// console.log(twoSum([2, 2, 3], 4));

// 4 kyu: Strip comments
function solution(input, markers) {
  const output = input
    .split('\n')
    .map(x => {
      if (!x.includes(markers[0]) && !x.includes(markers[1])) return x;

      const indexMarker = x.includes(`${markers[0]}`)
        ? x.indexOf(`${markers[0]}`)
        : x.indexOf(`${markers[1]}`);

      return x.slice(0, indexMarker).trim();
    })
    .join('\n');

  return output;
}
// function solution(input, markers) {
//   return input
//     .split('\n')
//     .map(x => markers.reduce((aIsX, marker) => aIsX.split(marker)[0].trimEnd(), x)) // 🔥
//     .join('\n');
// }

// console.log(
//   solution('apples, plums % and bananas\npears\noranges !applesauce', [
//     '%',
//     '!',
//   ])
// );

// 4 kyu: Adding Big Numbers
function add(a, b) {
  const len = Math.max(a.length, b.length);
  const aRev = a.split('').reverse();
  const bRev = b.split('').reverse();
  let output = [];
  let carry = 0;
  for (let i = 0; i < len; i++) {
    const num = [aRev[i], bRev[i]].map(x => (x === undefined ? 0 : +x));
    const sum = num[0] + num[1] + carry;

    carry = sum > 9 ? +String(sum)[0] : 0;
    output.unshift(sum > 9 ? +String(sum)[1] : sum);
  }
  return carry !== 0 ? carry + output.join('') : output.join('');
}
// console.log(add('63829983432984289347293874', '90938498237058927340892374089')); // 110

// 6 kyu: Build Tower Advanced
function towerBuilder(nFloors, nBlockSz) {
  const arr = [];
  const [unit, repeatFloor] = nBlockSz;
  const maxLength = unit * (2 * nFloors - 1);
  for (let i = 0; i < nFloors; i++) {
    const str = '*'.repeat(unit * (2 * i + 1));
    const space = ' '.repeat((maxLength - str.length) / 2);
    for (let j = 0; j < repeatFloor; j++) {
      arr.push(space + str + space);
    }
  }
  return arr;
}
// console.log(towerBuilder(3, [4, 2]));

// 4 kyu: Catching Car Mileage Numbers
function isInteresting(number, awesomePhrases) {
  if (number < 98) return 0;

  const strNum = num =>
    String(num)
      .split('')
      .map(x => Number(x));

  const checkCondition = (num, strNumArr) => {
    if (strNumArr.length < 3) return false;
    if (
      awesomePhrases.includes(num) ||
      strNumArr.slice(1).every(x => x === 0) ||
      strNumArr.slice(1).every(x => strNum[0] === x) ||
      Number(strNumArr.reverse().join('')) === num
    )
      return true;

    const checkSeq = strNumArr
      .slice(1)
      .every((x, i) => Math.abs(strNumArr[i] - x) === 1);

    if (
      Number(strNumArr.sort((a, b) => a - b).join('')) === num &&
      checkSeq === true
    )
      return true;

    if (
      Number(strNumArr.sort((a, b) => b - a).join('')) === num &&
      checkSeq === true
    )
      return true;

    if (
      String(num).slice(-2) === '90' &&
      strNumArr.slice(1, -2).every((x, i) => Math.abs(strNumArr[i] - x) === 1)
    )
      return true;

    return false;
  };

  const check1 = checkCondition(number, strNum(number));
  const check2 = checkCondition(number + 1, strNum(number + 1));
  const check3 = checkCondition(number + 2, strNum(number + 2));

  if (check1 === true) return 2;
  if (check2 === true || check3 === true) return 1;

  return 0;
}
// console.log(isInteresting(7890, [1337, 256]));

// 4 kyu: So Many Permutations! 🔥 so hard!
function permutations(str) {
  if (str.length <= 1) return [str];

  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    let remain = str.slice(0, i) + str.slice(i + 1, str.length);

    for (let permutation of permutations(remain)) {
      // console.log(permutation);
      arr.push(char + permutation);
    }
  }
  return [...new Set(arr)];
}
console.log(permutations('abc'));

// 4 kyu: Roman Numerals Helper
class RomanNumerals {
  static toRoman(num) {
    let temp = num;
    let str = '';
    while (temp) {
      if (temp >= 1000) {
        str += 'M';
        temp -= 1000;
      } else if (temp >= 900) {
        str += 'CM';
        temp -= 900;
      } else if (temp >= 500) {
        str += 'D';
        temp -= 500;
      } else if (temp >= 400) {
        str += 'CD';
        temp -= 400;
      } else if (temp >= 100) {
        str += 'C';
        temp -= 100;
      } else if (temp >= 90) {
        str += 'XC';
        temp -= 90;
      } else if (temp >= 50) {
        str += 'L';
        temp -= 50;
      } else if (temp >= 40) {
        str += 'XL';
        temp -= 40;
      } else if (temp >= 10) {
        str += 'X';
        temp -= 10;
      } else if (temp >= 9) {
        str += 'IX';
        temp -= 9;
      } else if (temp >= 5) {
        str += 'V';
        temp -= 5;
      } else if (temp >= 4) {
        str += 'IV';
        temp -= 4;
      } else if (temp >= 1) {
        str += 'I';
        temp -= 1;
      }
    }
    return str;
  }

  static fromRoman(str) {
    const roman = {
      I: 1,
      IV: 4,
      V: 5,
      IX: 9,
      X: 10,
      XL: 40,
      L: 50,
      XC: 90,
      C: 100,
      CD: 400,
      D: 500,
      CM: 900,
      M: 1000,
    };
    let sum = 0;
    let i = 0;
    while (i < str.length) {
      // For 2 digits in roman
      let temp = roman[str[i] + str[i + 1]];
      if (temp) {
        sum += temp;
        i += 2;
      } else {
        sum += roman[str[i]];
        i++;
      }
    }
    return sum;
  }
}
console.log(RomanNumerals.toRoman(1990)); // MCMXC
console.log(RomanNumerals.fromRoman('MDCLXVI')); // 1666
