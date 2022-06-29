//func
function getSenseOfLife() {
  return 42;
}
//test data 1
const res = getSenseOfLife();
console.log(res);

//func 2
function getSquared(num) {
  return num * num;
}
//test data 2
console.log(getSquared(4));

//func 3
function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

//test data 3
console.log(sum('1', 3));
console.log(sum(2, 3));
console.log(sum(-1, -6));
console.log(sum(0, '-2'));

//func 4
function printMessage(age) {
  return `I'm ${age} years old`;
}
//test data 4
console.log(printMessage(20));
console.log(printMessage('55'));
console.log(printMessage(-43));
console.log(printMessage('infinity'));

//func 5
function printMessage(age) {
  return `I'm ${age} years old`;
}
//test data 5
console.log(printMessage(20));
console.log(printMessage('55'));
console.log(printMessage(-43));
console.log(printMessage('infinity'));

//func 6

function sumFunc(from, to) {
  let result = 0;

  for (let index = from; index <= to; index += 1) {
    result += index;
  }

  return result;
}

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  return sumFunc(firstFrom, firstTo) > sumFunc(secondFrom, secondTo)
    ? true
    : false;
}

//test data 6
console.log(sumFunc(1, 5));
console.log(sumFunc(-10, 0));
console.log(sumFunc(5, 5));
//test data 6
console.log(compareSums(5, 10, 4, 9));
console.log(compareSums(5, 10, 4, 11));
console.log(compareSums(5, 10, 4, 11));

//func 7
const mult = (firstNumber, secondNumber) => firstNumber * secondNumber;
//test data 7

console.log(mult(10, 10));
console.log(mult(-10, 10));
console.log(mult(NaN, 10));
console.log(mult(Infinity, 10));
console.log(mult('15', 10));
console.log(mult(10, 'number'));

//func 8
const getMagicNumbers = () => 17;
//test data 8
console.log(getMagicNumbers());
console.log(getMagicNumbers(1));
console.log(getMagicNumbers('1'));
console.log(getMagicNumbers(-4));
