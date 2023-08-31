console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// DOM document selectors, although I imagine there's a more efficient way to do this
let question1 = document.querySelector('#question1');
let question2 = document.querySelector('#question2');
let question3 = document.querySelector('#question3');
let question4 = document.querySelector('#question4');
let question5 = document.querySelector('#question5');
let question6 = document.querySelector('#question6');
let question7 = document.querySelector('#question7');
let question8 = document.querySelector('#question8');
let question9 = document.querySelector('#question9');
let question10 = document.querySelector('#question10');
let question11 = document.querySelector('#question11');

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());
question1.innerHTML = hello();

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

function helloName(name) {
  return (`Hello, ${name}!`);
}

// Remember to call the function to test
console.log(helloName('Chris'));
question2.innerHTML = helloName('Chris');

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber
}
question3.innerHTML = 'addNumbers(7, 3) <br>' + addNumbers(7, 3);
//OOOOH THIS IS MUCH EASIER!
console.log(question3.innerHTML); // should be 10



// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNum, secondNum, thirdNum) {
  return firstNum * secondNum * thirdNum;
}

question4.innerHTML = 'multiplyThree(4, 2, 3) <br>' + multiplyThree(4, 2, 3);
console.log(question4.innerHTML); // should be 24

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
question5.innerHTML = 'isPositive(-4) <br>' + isPositive(-4) + '<br> isPositive(18) <br>' + isPositive(18);

// And now I see the limitations of using the query selector variable inside of the console log!
console.log(isPositive(-4)); // should be false
console.log(isPositive(18)); // should be true

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  return array[array.length - 1];
}
testArray = [2, 3, 10, 14, 'this is the last item in the array'];
question6.innerHTML = 'getLast(testArray) <br>' + getLast(testArray);
console.log(getLast(testArray)); // should be "this is the last item in the array"

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  let containsValue = false;
  for (let item of array) {
    if (item == value) {
      containsValue = true;
      return containsValue;
    } else {
      containsValue = false;
    }
  } return containsValue;
}
question7.innerHTML = 'find(10, testArray) <br.' + find(10, testArray);
console.log(find(2, testArray)); // Should be true
console.log(find(47, testArray)); // Should be false
console.log(find(10, testArray)); // Should be true

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
    if (string.indexOf(letter) == 0) {
      return true;
    } else {
      return false;
    }
}
question8.innerHTML = "isFirstLetter('w', 'happy') <br>" + isFirstLetter('w', 'happy');
console.log('Does the letter start the string:', isFirstLetter('t', 'there')); // should output true
console.log('Does the letter start the string:', isFirstLetter('w', 'happy')); // should output false

// 9. Function to return the sum of all numbers in an array
function sumAll(numbers) {
  let sum = 0;
  // TODO: loop to add items
  for (let num of numbers) {
    sum += num;
  }
  // TODO: return the sum
  return sum;
}

let sumArray = [4, 7, 20, 13, 15]; // total is 59
let smallArray = [1, 2, 3]; // total is 6

question9.innerHTML = 'sumArray = [4, 7, 20, 13, 15] <br> sumAll(sumArray) <br>' + sumAll(sumArray);
console.log(sumAll(sumArray));
console.log(sumAll(smallArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(numArray) {
  let positiveArray = [];
  for (let num of numArray) {
    if (num > 0) {
      positiveArray.push(num);
    } 
  } return positiveArray;
}

let testNumArray = [6, 4, -3, 4, -1, 9];

question10.innerHTML = 'testNumArray = [6, 4, -3, 4, -1, 9] <br> allPositives(testNumArray) <br>' + allPositive(testNumArray);
console.log(allPositive(testNumArray)); // output should be [6, 4, 4, 9]

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// The edabit challenge was to add up the numbers of a single input (ie if the input is 4,
// add up 4 + 3 + 2 + 1)

function addUp(num) {
  let total = 0;
  while (num > 0) {
    total += num;
    num--;
  }
  return total;
}
question11.innerHTML = 'Edabit problem adding a number addUp(10) <br>' + addUp(10);
console.log(addUp(10)); //


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
