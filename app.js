

// import { getTriangleArea, square } from './myMathsModule.js';

//const { sum } = require("lodash");

//const specificTriangle = (n) => {
//return getTriangleArea(n, square(n) / 2);
//}

//console.log(specificTriangle());

//const square = (a) => {
//return a * a;
//};

//const sumOfSquares = (b, c) => {
//return square(b) + square(c);
//};

//const squareSumOfSquare = (b, c) => {
//return sumOfSquares(b, c) ** 2;
//};

//console.log(squareSumOfSquare(2, 3));

//import { bigLettersCOunt } from "./myMathsModule.js";

//const compare = (str1, str2) => {
//const firstCount = bigLettersCOunt(str1);
//const secondCount = bigLettersCOunt(str2);

//if (firstCount > secondCount) {
// return 1;
//} else if (firstCount < secondCount) {
//return -1;
//} else {
//return 0;
//}
//}

//console.log(compare("Hello Kenobi", "HEllo Kenobi"));

//import { addDigits } from "./myMathsModule.js";
//console.log(addDigits(121));

//const stroka = ('hi there');
//const wordSplit = stroka.split(" ");


/*const solution = (str) => {
  let result = '';
for (let i = 0; i < str.length; i++) {
  if (str[i] !== ' ' && (str[i - 1] === ' ' || i === 0)) {
    result += str[i].toUpperCase();
} else {
  result += str[i];
}
}
return result;
};

console.log(solution("hi"));*/



/*function testCycle(n) {
  var x = '';
  var y = 0;
  for (var i = 1; i <= n; i++) {
    y += (2 * i - 1);
    x += y + ' ';
  }
  return x;
}
console.log(testCycle(2));
*/

/*function testCycle(n) {
  var x = 1;
  if (n % 2 == 0) {
    for (; n > 0; n -= 2) {
      x *= n;
    }
  } else if (n % 2 == 1) {
    for (; n > 0; n -= 2) {
      x *= n;
    }
  }
  return x;
} */

/*function testCycle(n) {
  var x = 1;
  if (n % 2 == 0) {
    for (let i = 2; i <= n; i += 2) {
      x *= i;
    }
  } else if (n % 2 == 1) {
    for (let i = 1; i <= n; i += 2) {
      x *= i;
    }
  }
  return x;
}
*/

/*function testCycle(a, b) {
  var x;
  while (a !== 0 && b !== 0) {
    if (a == b) {
      x = a;
      break;
    }
    else if (a > b) {
      a = a % b;
    } else if (b > a) {
      b = b % a;
    }
  }
  return x = a + b;
}*/

/*function testCycle(n) {
  var x = "Простое число";
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      x = "Составное число";
      break;
    }
  }
  return x;
} */


/*function my_function(n) {
  if (n == 1) return 1;
  return my_function(n - 1) + " " + n;
}*/

/*let salaries = {
  John: 110,
  Ann: 160,
  Pete: 130
}

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}*/

/*let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log(menu);

function multiplyNumbers(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] * 2;
    }
  }
}*/

/*function testStr(a, b) {
  return a.toUpperCase().concat(b.toLowerCase());
}

console.log(testStr("abc", "abc"));*/

//This is a test string
//test

/*function testStr(a, b) {
  let target = b;
  let pos;
  for (pos = 0; pos <= a.length; pos++) {
    let foundPos = a.indexOf(target, pos);
    return foundPos;
  }
}

console.log(testStr("Hello kind happy world", "kind"));*/

/*var myArr = new Array();
myArr[0] = 1;
myArr[1] = 123;
myArr[2] = 234;
myArr.push("hello", 2, true);
myArr.length = 7;
myArr.unshift(98, "I");
myArr[8] = "hui";
console.log(myArr);


var myArr1 = new Array(1, 2, 35, 4);
var a = myArr1[2];
console.log(a);

var myArr2 = [1, 2, 3, 4, 5, 6,];
*/

/*function testArray(a, b) {
  let resA = 0;
  let resB = 0;
  for (let i = 0; i < a.length; i++) {
    resA += a[i];
  }
  for (let j = 0; j < b.length; j++) {
    resB += b[j];
  }
  return resA + resB;
}
*/

/*function testArray(a, b) {
  let newStr = (a + b).split("");

  newStr.splice(0, 0, "Ivanov");

  return newStr.reverse().join("");
}
*/

/*let a = new Date();
console.log(a.toLocaleTimeString());

function testDateTime(a, b) {
  let date1 = new Date(a);
  let date2 = new Date(b);
  let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  if (+date1 > +date2) {
    return days[date1.getDay()];
  } else {
    return days[date2.getDay()];
  }
}*/

/*function testMath(a, b, c, d) {
  return Math.floor(Math.max(a, b, c, d) / Math.min(a, b, c, d));
}
*/

/*function testErrorFunc(a, func) {
  try {
    func(a);
  }
  catch (x) {
    return x.name;
  }
} */

/*
let a = /q$/;
console.log(a);
*/

//import { swap } from "./myMathsModule.js";

/*const numbers = [4, 5, -6, -7, 8, 9, 10];

function getSameParity(arr) {
  if (arr.length == 0) {
    return arr;
  }

  const newArr = [];
  let even = Math.abs(arr[0]) % 2;

  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i]) % 2 === even) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
*/

/*const money1 = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5'];

function getTotalAmount(arr, currency) {
  let sum = 0;

  for (let i of arr) {
    const indexArr = i.split(" ");
    console.log(indexArr);
    if (indexArr[0] === currency) {
      sum += +indexArr[1];
    }
  }
  return sum;
}
*/

/* const scores = [
  [7, 7], // Первая игра
  [6, 6], // Вторая игра
  [5, 5],
  [5, 5],
  [5, 5],
  [2, 2],
  [4, 5],
  [5, 5],
];

function getSuperSeriesWinner(arr) {
  let team1Wins = 0;
  let team2Wins = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] > arr[i][1]) {
      team1Wins = team1Wins + 1;
    } else if (arr[i][0] < arr[i][1]) {
      team2Wins = team2Wins + 1;
    } else if (arr[i][0] === arr[i][1]) {
      continue;
    }
  }
  if (team1Wins > team2Wins) {
    return "Canada";
  } else if (team1Wins < team2Wins) {
    return "USSR";
  } else {
    return "Draw";
  }
}

  let result = 0;
  for (const score of scores) {
    result += Math.sign(score[0] - score[1]);
  }

  if (result > 0) {
    return 'canada';
  }
  if (result < 0) {
    return 'ussr';
  }

  return null;
};
*/

/*const definitions = [
  ['Pineapple tree', 'is a beautiful tree.'],
  ["Good", "is not bad!"]
];

function buildDefinitionList(def) {
  let result = [];
  for (const item of def) {
    result.push(`<dt>${item[0]}</dt><dd>${item[1]}</dd>`);
  }
  const str1 = result.join('');
  const strresult = `<dl>${str1}</dl>`;
  return strresult;
}

console.log(buildDefinitionList(definitions));
*/

/*const text1 = "yyab";
function countUniqChars(str) {
  const arr = [];
  const newArr = str.split("");

  for (let item of newArr) {
    if (!arr.includes(item)) {
      arr.push(item);
    }
  }
  return arr.length;
}

console.log(countUniqChars(text1))
*/

/*const arr = [3, 10, 4, 3];

function bubbleSort(ar) {
  for (let i = 0; i < ar.length; i++)
    for (let j = 0; j < ar.length - i; j++) {
      if (ar[j] > ar[j + 1]) {
        const swap = ar[j];
        ar[j] = ar[j + 1];
        ar[j + 1] = swap;
      }
    }
  return ar;
}

console.log(bubbleSort(arr));
*/

/* const checkIsBalanced = (expression) => {
  const stack = [];
  for (const symbol of expression) {
    if (symbol === '(') {
      stack.push(symbol);
    } else if (symbol === ')') {
      // Если для закрывающего не нашлось открывающего, значит баланса нет
      if (!stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(checkIsBalanced("(()())"))
*/

// import { isBracketStructureBalanced } from "./subapp.js";

/*
const brackets = [""];

function isBracketStructureBalanced(arr) {
  const newStr = arr.join();

}

console.log(isBracketStructureBalanced(brackets));
*/

/*const myArr1 = [24, 10, 11];
const myArr2 = [10, 13, 14, 18, 24, 30];

function sortArr(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++)
      if (arr[j] > arr[j + 1]) {
        let item = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = item;
      }
  }
  return arr;
}

function intersectionOfSortedArrays(arr1, arr2) {
  const newArr = [];

  for (let i = 0; i < arr1.length; i++) {

    for (let j = 0; j < arr2.length; j++) {

      if (arr1[i] === arr2[j]) {
        newArr.push(arr1[i]);
      } else {
        continue;
      }
    }
  }
  return sortArr(newArr);
}

console.log(intersectionOfSortedArrays(myArr1, myArr2));
*/

/*let arr1 = [1, 4, 5, 7, 2];
function getMax(arr) {
  if (arr.length === 0) {
    return null;
  }
  let [item, ...rest] = arr;
  let max = item;

  for (let i = 0; i < rest.length; i++) {
    if (max > rest[i]) {
      return max;
    } else {
      max = rest[i];
    }
  }
  return max;
}
console.log(getMax(arr1)); */

/*let arr = [1, 2, [3,4], [[5,6]]];

function flatten (arrInput) {
  let stack = [...arrInput];
  let result = [];
  
  while(stack.length) {
    
    const takeout = stack.pop();
    
    if (Array.isArray(takeout)) {
      stack.push(...takeout);
    } else {
      result.push(takeout);
    }
  }
  return result.reverse();
}

console.log (flatten(arr));
*/

/*
const locations = [
  ['Park', [10, 5]],
  ['Sea', [4, 5]],
  ['Museum', [8, 4]],
];

const currentPoint = [5, 5];

function getDistance(location, currPoint) {
  let currResult1;
  let arrOfDistance = [];
  let indexMin;

  for (let [, [x1, y1]] of location) {
    let result_1 = x1 + y1;
    let result_2 = currPoint[0] + currPoint[1];
    let currResult1 = Math.abs(result_1 - result_2);
    arrOfDistance.push(currResult1);
  }

  indexMin = Math.min(...arrOfDistance);

  let index = arrOfDistance.indexOf(indexMin);
  let result = locations[index];
  return result;
}

console.log(getDistance(locations, currentPoint));
*/

console.log();