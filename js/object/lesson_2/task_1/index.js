'use strict';

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */

//algo
//1. Create new Object
//2. iterate keysList
//3.put key/value to the obj


// function buildObject(keysList, valuesList) {
// const obj = {};
// for(let index = 0; index < keysList.length; index += 1) {
//     obj[keysList[index]] = valuesList[index];
// }
// return obj;
// }

// examples
const keys = ['name', 'address', 'age', 'name'];
const values = ['Bob', {price: 100}, 34, null];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }

console.log(result)


//option2

// function buildObject(keysList, valuesList) {
    
// return keysList.reduce((obj, key, index) =>
// {
//     console.log('STEP', index)
//     console.log('BEFORE', obj)
//    const res =  {...obj, [key] : valuesList[index]}

//     console.log('AFTER', obj)
//    return res;
// }, {} )

// }

//refactor
function buildObject(keysList, valuesList) {

return keysList.reduce((obj, key, index) => ({...obj, [key] : valuesList[index] }), {})

}


