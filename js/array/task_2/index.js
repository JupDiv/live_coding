const numberList = [5, 0, 8, 10, -4, 50, 220];
console.log(numberList);
/*     func_1     */
//input: callback
//output: new array

//callback
//input: element
//output: element

//option_1
const mapRes = numberList.map((element) => {
  const newElement = element * element;
  return newElement;
});
console.log(mapRes);
//option_2
const mapRes2 = numberList.map((element) => element * element);
/*     func_2       */

//input: callback
//output: none

//callback
//input: element
//output: none

//option_1
const forEachRes = numberList.forEach((el) =>
  el > 0 ? console.log(el) : null
);
//option_2

/*        */
const transaction = [5, 0, 8, 10, -4, 50, 220, 1203, 1144, 555];
/*     func_3       */

//input: callback
//output: number

//callback
//input: acc, element, index, array
//output: new acc;

//option_1
const sumTransaction = transaction.reduce((sum, elem) => {
  console.log(`Accamulator :${sum}`);
  console.log(`Element: ${elem}`);
  if (elem > 100) {
    return sum + elem;
  }
  return sum;
}, 0);

console.log(sumTransaction);
//option_2
const sumTransactionOption2 = transaction.reduce(
  (sum, elem) => (elem > 100 ? sum + elem : sum),
  0
);
/*     func_4       */

//input:
//output:

//callback
//input:
//output:

//option_1

//option_2

/*     func_5       */

//input:
//output:

//callback
//input:
//output:

//option_1

//option_2

/*     func_6       */

//input:
//output:

//callback
//input:
//output:

//option_1

//option_2

/*     func_7       */

//input:
//output:

//callback
//input:
//output:

//option_1

//option_2
/*     func_8       */

//input:
//output:

//callback
//input:
//output:

//option_1

//option_2
