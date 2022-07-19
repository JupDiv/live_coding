'use strict';
//HLIB
//remote logic from if
//get rid of duplicated code
//don't use fing

//BAD
balances.find((item, index) => clients.indexOf(client) === index);
//GOOD
balances(clients.indexOf(client));

const withdraw = (clients, balances, client, amount) => {
  if (
    balances.find((item, index) => clients.indexOf(client) === index) < amount
  )
    return -1;
  return (
    balances.find((item, index) => clients.indexOf(client) === index) - amount
  );
};

//IGOR
//BAD
const withdraw = (clients, balances, client, amount) =>
  balances[clients.indexOf(client)] >= amount
    ? (balances[clients.indexOf(client)] -= amount)
    : -1;

// const res = bool ? value1:value2
// OlEKSIY
// BAD
const withdraw = (clients, balances, client, amount) => {
  let clientBalance = balances[clients.indexOf(client)];

  if (clientBalance < amount) {
    return -1;
  }
  if (clientBalance >= amount) {
    clientBalance -= amount;
    balances[clients.indexOf(client)] = clientBalance;
    return clientBalance;
  }

  return -1;
};
//GOOD
const withdraw = (clients, balances, client, amount) => {
  const clientIndex = clients.indexOf(client);

  if (balances[clientIndex] < amount) {
    return -1;
  }

  balances[clientIndex] -= amount;
  return balances[clientIndex];
};

// SERHIY
// BAD
const withdraw = (clients, balances, client, amount) => {
  const curentClient = clients.indexOf(client);
  const newBalance = balances[curentClient] - amount;
  return newBalance > 0 ? newBalance : -1;
};
//Refactoring but yet bad
const withdraw = (clients, balances, client, amount) => {
  const curentClient = clients.indexOf(client);
  balances[curentClient] -= amount;
  return balances[curentClient] > 0 ? balances[curentClient] : -1;
};

// test data

const balance = [1400, 87, -6];
const users = ['Ann', 'John', 'User'];
withdraw(users, balance, 'John', 50);

withdraw(users, balance, 'User', 10);

//DENIS
//BAD
const withdraw = function (clients, balances, client, amount) {
  if (balances[clients.indexOf(client)] - amount < 0) {
    return -1;
  }
  balances[clients.indexOf(client)] -= amount;
  return balances[clients.indexOf(client)];
};
//GOOD
const withdraw = function (clients, balances, client, amount) {
  const clientIndex = clients.indexOf(client);
  if (balances[clientIndex] - amount < 0) {
    return -1;
  }
  balances[clientIndex] -= amount;
  return balances[clientIndex];
};

//VOLODYMYR
//NORM
const withdraw = (clients, balances, client, amount) => {
  let clientIndex = clients.indexOf(client);
  return balances[clientIndex] < amount
    ? -1
    : (balances[clientIndex] -= amount);
};

// DIMA
const withdraw = (clients, balances, client, amount) => {
  const clientBalance = balances[clients.indexOf(client)];

  return clientBalance < amount ? -1 : clientBalance - amount;
};

const withdraw = (clients, balances, client, amount) => {
  if (balances[clients.indexOf(client)] > amount) {
    return (balances[clients.indexOf(client)] -= amount);
  } else {
    return -1;
  }
};

// Anastasia
// BAD
const withdraw = (clients, balances, client, amount) =>
  balances[clients.indexOf(client)] >= amount
    ? balances[clients.indexOf(client)] - amount
    : -1;

const getRandomNumbers = (length, from, to) => {
  const arr = new Array(length);
  if (to - from < 1) {
    return null;
  }
  return arr.fill(
    Math.trunc(
      Math.random() * (Math.ceil(to) - Math.ceil(from)) + Math.ceil(from)
    )
  );
};

const getRandomNumbers = (length, from, to) => {
  if (Math.ceil(to) - Math.ceil(from) < 1) {
    return null;
  }
  return new Array(length)
    .fill()
    .map(() => Math.trunc(Math.random() * (to - from) + to));
};
console.log(getRandomNumbers(5, 0.5, 1.5));
console.log(getRandomNumbers(5, 1.1, 2.5));
console.log(getRandomNumbers(5, -1.1, -2.5));
