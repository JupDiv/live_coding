// 1
//input: none;
//output: number/element;
const numbersList1 = [1, 2, 3, 4, 5];
console.log(`BEFORE POP ${numbersList1}`);
let lastElem = numbersList1.pop();
console.log(`AFTER POP ${numbersList1}`);

//2
//input: new elem
//output: length new array

const numbersList2 = [1, 2, 3, 4, 5];
console.log(`BEFORE PUSH ${numbersList1}`);
let lastAddElem = numbersList2.push(777);
console.log(`AFTER PUSH ${lastAddElem}`);

//3
//input: none
//output: first elem

const numbersList3 = [2, 1, 3, 4, 5];
console.log(`BEFORE SHIFT ${numbersList1}`);
let firstElem = numbersList3.shift();
console.log(`AFTER SHIFT ${numbersList3}`);

// ===== //

//filter
//input: callback
//output: new array

//callback
//input: elem
//output: boolean
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

const filterRes = anotherNumbersList.filter(function filterCallBack(elem) {
  return elem > 5;
});

const filterArray = anotherNumbersList.filter((el) => el > 5);

console.log(filterRes);
console.log(filterArray);

//callback
//**** */

//input: number + callback
//output: console.log()
function sum(from, to, resolver) {
  let sumRes = 0;
  for (let index = from; index <= to; index += 1) {
    sumRes += index;
  }
  resolver(sumRes);
}

//testData

sum(0, 5, (elem) => console.log(elem));
sum(-5, 10, (elem) => console.log(elem));
sum(NaN, 10, (elem) => console.log(elem));
sum(undefined, 10, (elem) => console.log(elem));
sum('7', 10, (elem) => console.log(elem));
sum(Infinity, 10, (elem) => console.log(elem));
