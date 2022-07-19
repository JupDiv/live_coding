'use strict';

//input: obj, key, value
//output: object

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

console.log(addPropertyV1({}, 'how', 323));
console.log(addPropertyV1({}, 'isCheck', true));
console.log(addPropertyV1({}, 'What', 'Hello'));
console.log(addPropertyV1({}, 'number', NaN));

function addPropertyV2(obj, key, value) {
  //   obj[key] = value;
  //input: objects;
  //output: object
  return Object.assign(obj, { [key]: value });
}
console.log(addPropertyV2({}, 'how', 323));
console.log(addPropertyV2({}, 'isCheck', true));
console.log(addPropertyV2({}, 'What', 'Hello'));
console.log(addPropertyV2({}, 'number', NaN));

//input: object, key, value
//output: new object

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}
console.log(addPropertyV3({}, 'how', 323));
console.log(addPropertyV3({}, 'isCheck', true));
console.log(addPropertyV3({}, 'What', 'Hello'));
console.log(addPropertyV3({}, 'number', NaN));

const transaction = {
  amount: 170,
};
const res1 = addPropertyV3(transaction, 'currency', 'usd');
const res2 = addPropertyV3(res1, 'amount', 300);
console.log('result res 1', res1);
console.log('result res 2', res2);
console.log('obj after', transaction);

//input: object, key, value
//output: object
function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}

console.log(addPropertyV4({}, 'how', 323));
console.log(addPropertyV4({}, 'isCheck', true));
console.log(addPropertyV4({}, 'What', 'Hello'));
console.log(addPropertyV4({}, 'number', NaN));

const res3 = addPropertyV4(transaction, 'currency', 'usd');
const res4 = addPropertyV4(res3, 'amount', 300);
console.log('result res 3', res1);
console.log('result res 4', res2);
console.log('obj after', transaction);
