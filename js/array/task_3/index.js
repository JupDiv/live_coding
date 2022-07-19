//input: array, callback
//output: new array

//algo
//create new array
//iterate input array
//apply callback for every callback
//if true => push

//callback
//input: elem, index[optional], array[optional]
//output: boolean
const filterArrayElements = (arr, callback) => {
  const resultArray = [];

  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index];
    if (callback(el, index, arr)) {
      resultArray.push(arr[index]);
    }
  }
  return resultArray;
};

//test data

const testData = [
  'John',
  'Doe',
  '44',
  'Dima',
  'NaN',
  NaN,
  undefined,
  null,
  233,
  34,
  Infinity,
  '-45',
  -32,
];

console.log(
  filterArrayElements(testData, (elem, index, arr) => typeof elem === 'string')
);

const arr = [1, 2, 11, 0, -5, 5, 4, 8, NaN, 20, 50];

const fliterRes = filterArrayElements(
  arr,
  (el, index, arr) => index > 5 && el > 10
);
console.log(fliterRes);

//-- multuply
//input: number
//output: number
function multuply(...args) {
  console.log(args);

  return args.reduce((acc, ele) => acc * ele);
}

console.log(multuply(1, 2, 3, 4));
