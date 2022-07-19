//1. give number in function
//2. iterate a number
//3. check a prime number
//4. output code

function getPrime(num) {
  for (let number = 2; number <= num; number += 1) {
    let isPrime = true;

    for (let index = 2; index < number; index += 1) {
      if (number % index === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      console.log(number);
    }
  }
}

console.log(getPrime(15));
