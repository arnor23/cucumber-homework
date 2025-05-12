const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

//Find First Number

let sentence;
let extractedNumber;

Given('a sentence with a number: {string}', function (inputSentence) {
  sentence = inputSentence;
});

When('the first number is extracted from the sentence', function () {
  const match = sentence.match(/\d+/);
  if (match) {
    extractedNumber = parseInt(match[0], 10);
  } else {
    throw new Error("No number found in the sentence.");
  }
});

Then('the extracted number should be {int}', function (expectedNumber) {
  assert.strictEqual(extractedNumber, expectedNumber);
});


// Validate URL

let url;
let isValid;

Given('a URL: {string}', function (inputURL) {
  url = inputURL;
});

When('I validate the format', function () {
  try {
    new URL(url);
    isValid = true;
  } catch {
    isValid = false;
  }
});

Then('it should be valid', function () {
  assert.strictEqual(isValid, true);
});

// Validate credentials (AN ERROR WILL BE THROWN HERE BECASUE VMERCADO HAS FALSE ON THE TABLE STATUS)

let users = [];

Given('I have the following users:', function (dataTable) {
  users = dataTable.hashes();
});

Then('each user should be validated correctly', function () {
  const validCredentials = {
    aguzman: 'unqork',
    vmercado: 'cocha',
    ldiaz: 'bridge',
  };

  users.forEach(({ user, password, status }) => {
    const expected = status === 'true';
    const actual = validCredentials[user] === password;
    assert.strictEqual(actual, expected, `Expected ${user} to return ${expected} but got ${actual}`);
  });
});

//Shoping cart

let cart = [];
let totalPrice = 0;

Given('the following items in the cart: {string}', function (cartItems) {
  cart = cartItems.split(';').map(item => {
    const [name, price] = item.split(',');
    return { name, price: parseFloat(price) };
  });
});

When('I calculate the total price', function () {
  totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
});

Then('the total price should be {int}', function (expectedTotal) {
  assert.strictEqual(totalPrice, expectedTotal);
});