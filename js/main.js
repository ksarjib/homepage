/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  };
}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
  return max(max(a, b), c);

}

/* Check if the argument is vowel or not */
function isVowel(a) {
  if (!a) {
    return false;
  }
  a = a.toLowerCase();
  if (a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u') {
    return true;
  } else {
    return false;
  }
}

/* Sum numbers in array */
function sum(arr) {
  let sum = 0;
  arr.forEach(element => {
    sum += element;
  });
  console.log('The sum is' + sum);
  return sum;
}

/* Multiplies numbers in array */
function multiply(arr) {
  let multipliedValue = 1;
  arr.forEach(element => {
    multipliedValue *= element;
  });
  console.log('The sum is' + multipliedValue);
  return multipliedValue;
}

/* Reverse the given string*/
function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}


/* Largest length word */
function longestWordLength(arr) {
  let largest = 0;
  arr.forEach(element => {
    largest = element.length > largest ? element.length : largest;
  });
  return largest;
}

/* words longer than length n */
function longerThanN(arr, n) {
  var longerThanNArr = [];
  arr.forEach(element => {
    if (element.length > n) {
      console.log('I am here');
      longerThanNArr.push(element);
    }
  });
  return longerThanNArr;
}

/* check if two arrays have same elements */
function checkIfEqualArrTest(expected, found) {
  if (checkIfTwoArraysHaveSameElements(expected, found)) {
    return "TEST SUCCEEDED";
  }
  return "TEST FAILED.  Expected " + expected + " found " + found;
}

function checkIfTwoArraysHaveSameElements(arr1, arr2) {
  arr2.forEach(element => {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false
    if (!arr1.includes(element)) {
      return false;
    }
  });
  return true;
}

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.assert(maxOfThree(5, 4, 44) === 44, 'TEST FAILED');
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
console.assert(maxOfThree(55, 4, 44) === 55, 'TEST FAILED');
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));
console.assert(maxOfThree(55, 4, 44) === 4, 'TEST FAILED');

console.log("Expected output of isVowel('a') is  true " + myFunctionTest(true, isVowel('a')));
console.assert(isVowel('a'), 'TEST FAILED');
console.log("Expected output of isVowel('A') is  true " + myFunctionTest(true, isVowel('A')));
console.assert(isVowel('A'), 'TEST FAILED');

console.log("Expected output of sum([1,2,3,4]) is 10 " + myFunctionTest(10, sum([1, 2, 3, 4])));
console.assert(sum([1, 2, 3, 4]) == 10, 'TEST FAILED');
console.log("Expected output of multiply([1,2,3,4]) is 24 " + myFunctionTest(24, multiply([1, 2, 3, 4])));
console.assert(multiply([1, 2, 3, 4]) == 24, 'TEST FAILED');


console.log("Expected output of reverseString('hello world') is dlrow olleH " + myFunctionTest('dlrow olleH', reverseString('Hello world')));
console.assert(reverseString('Hello world') == 'dlrow olleH', 'TEST FAILED');
console.log("Expected output of longestWordLength(['ashok','kushal','kashinath']) is 9 " + myFunctionTest(9, longestWordLength(['ashok', 'kushal', 'kashinath'])));
console.assert(longestWordLength(['ashok', 'kushal', 'kashinath']) == 9, 'TEST FAILED');
console.log("Expected output of longerThanN(['cat','apple','dog','elephant','mouse'], 3) is [ 'apple', 'elephant', 'mouse' ] " + checkIfEqualArrTest(['apple', 'elephant', 'mouse'], longerThanN(['cat', 'apple', 'dog', 'elephant', 'mouse'])));
console.assert(checkIfEqualArrTest(['apple', 'elephant', 'mouse'], longerThanN(['cat', 'apple', 'dog', 'elephant', 'mouse'])), 'TEST FAILED');
/* Js-fiddle modification */
const a = [1, 3, 5, 3, 3];
const b = a.map(function (elem, i, array) {
  return elem * 10;
});
console.log("Expected output of b is 10,30,50,30,30 " + checkIfEqualArrTest([10, 30, 50, 30, 30], b));
console.assert(checkIfTwoArraysHaveSameElements(b, [10, 30, 50, 30, 30]), 'TEST FAILED');
const c = a.filter(function (elem, i, array) {
  return elem === 3;
});
console.log("Expected output of c is 3,3,3 " + checkIfEqualArrTest([3, 3, 3], c));
console.assert(checkIfTwoArraysHaveSameElements(c, [3, 3, 3]), 'TEST FAILED');
const d = a.reduce(function (prevValue, elem, i, array) {
  return prevValue * elem;
});
console.log("Expected output of d 135 " + myFunctionTest(135, d));
console.assert(d == 135, 'TEST FAILED');