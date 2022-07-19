const compareObjects = (obj1, obj2) => {
  const objectFirst = Object.keys(obj1);
  const objectSecond = Object.keys(obj2);

  if (objectFirst.length !== objectSecond.length) {
    return false;
  }

  return objectFirst.every((key) => objectFirst[key] === obj2[key]);
};
//objectFirst[key] === objectSecond[key]
// // examples
const obj1 = {
  name: 'Tom',
  age: 33,
  email: null,
};

const obj2 = {
  age: 33,
  email: null,
  name: 'Tom',
};

const obj3 = {
  name: 'Bob',
  age: 17,
};

const obj4 = {
  name: 'Bob',
  age: 17,
};
const obj5 = {
  name: 'Bob',
  age: 17,
};

const obj6 = {
  addres: 'Lviv',
  name: 'Bob',
  age: 17,
};

console.log('res 1 ', compareObjects(obj1, obj2)); // ==> true
console.log('res 2 ', compareObjects(obj2, obj3)); // ==> false
console.log('res 3 ', compareObjects(obj1, obj4)); // ==> false
console.log('res 4 ', compareObjects(obj3, obj4)); // ==> true
console.log('res 5 ', compareObjects(obj5, obj6)); // ==> false
