/* Sum numbers in array */
function sum(arr) {
    let sum = arr.reduce((accumulator, element) => accumulator + element, 0);
    console.log('The sum is' + sum);
    return sum;
}

/* Multiplies numbers in array */
function multiply(arr) {
    let product = arr.reduce((accumulator, element) => accumulator * element, 1);
    console.log('The product is' + product);
    return product;
}

/* words longer than length n */
function longerThanN(arr, n) {
    return arr.filter((element) => element.length > n);
}

console.log(sum([2, 3]));
console.log(multiply([2, 3]));
console.log(longerThanN(['asdf', 'aeroplane', 'ball', 'hippopotamus'], 7));
console.log(reverseString('Hello World'));

/* Reverse the given string*/
function reverseString(str) {
    let strArr = str.split('');
    return strArr.reduce((a, e) => e + a);
}
