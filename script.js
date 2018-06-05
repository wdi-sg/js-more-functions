// JS: More Functions, Arrays, and Objects
// =======================================
// Exercise 1: Fizzbuzz
// ====================
// Write a function that loops through numbers from 1 to 100 and does the following:
//   If the number is divisible by 3, print Fizz.
//   If the number is divisible by 5, print Buzz.
//   If the number is divisible by both 3 and 5, print FizzBuzz.
//   If the number is divisible by neither 3 nor 5, print the number.
// Hint: The % operator gives the remainder when one number is divided by another, e.g. 10 % 7 gives 3.
// Note: This used to be a common interview question.

function fizzBuzz() {
  for(a = 1; a <= 100; a++) {
    var = result;

    if (a % 3 === 0) {
      result.push("Fizz");
    };

    if (b % 5 === 0) {
      result.push("Buzz");
    }

    console.log(result.join(""));
  };
};

// Exercise 2: Prime Counting
// ==========================
// Write a function that takes a number and returns true if the number is prime, and false otherwise.
// Hint: A number is prime when it is only divisble by 1 and itself.

function primeCounting(userInput) {
  primeNumbers = [2,3,5,7];

  if (primeNumbers.indexOf(userInput) > -1) {
    return true;
  };

  primeNumbers.forEach(function(number) {
    if(userInput % number != 0) {
      return false;
    };
  });

  return true;
};

// Exercise 3: Letter Counting
// ===========================
// Write a function that takes a string and prints out how many times a character occurs in the string. For example, letterCount("apple") should print the following:
// a - 1
// p - 2
// l - 1
// e - 1
// Hint: Somewhere, you will need to examine each letter in the string, and increase the value of a counter depending on the letter you're currently examining. An object with keys corresponding to the letters of the string would be useful.


function exerciseThree(userString) {
  var obj = {};
  var splitString = userString.split('');

  for(g = 0; g < splitString.length; g++) {
    var character = splitString[g];

    if (obj[character]) {
      obj[character] += 1;
    } else {
      obj[character] = 1;
    };
  };

  for (keys in obj) {
    console.log(keys + " - " + obj[keys]);
  };
};


// Exercise 4: Debugging
// =====================
// The swap function below is supposed to swap the values of two variables given to it. Run the code and explain the result. Write any necessary corrected code below.
// Note: Compare this to a previous exercise on swapping two elements of an array. If time permits, explain the difference between this swap function and the function you wrote for swapping two elements of an array which worked.

var x = 2, y = 10;

function swap(a, b) {
    var tmp = a;
    a = b;
    b = tmp;
    console.log("Variables swapped:", a, b);
}

swap(x, y);
console.log("The value of x is", x, "and the value of y is", y);

// Explanation:

// because integers are considered immutable, you cannot alter the
// variable passed in. you would have to return a new value and access it instead
// however, if it is an array or object, which javascript considers mutable,
// you will be able to alter the original value
// and if you want to alter the global variable, you must call the global variable
// directly inside your function

// Write your corrected code below.

var x = 2, y = 10;

function swap(a,b) {
  var tmp = a;
  a = b;
  b = tmp;
  console.log("Variables swapped:", a, b);

  x = y;
  y = tmp;
};

swap(x, y);
console.log("The value of x is", x, "and the value of y is", y);

// Exercise 5: Array arithmetic
// ============================
// 5A. Write a function that takes 2 arrays of numbers and returns an array containing only the unique elements in both arrays. For example, union([1, 2, 3], [2, 3, 4]) should return [1, 2, 3, 4].
// Hint: The .indexOf method of an array can find you the index of a given element in an array.
// *Optional challenge: add an optional 3rd parameter, to be a boolean value, so that when it is true, the array that you return is sorted.

function arrayArithmetic(a1, a2) {
  if (a1.length > a2.length) {
    var longerArray = a1;
    var shorterArray = a2;
  } else {
    var longerArray = a2;
    var shorterArray = a1;
  };

  for(j = 0; j < longerArray.length; j++) {
    var currentNumber = longerArray[j];
    var checkForDupe1 = longerArray.indexOf(currentNumber, j+1);
    var checkForDupe2 = shorterArray.indexOf(currentNumber);

    if (checkForDupe1 > -1) {
      longerArray.splice(checkForDupe1, 1);
    };

    if (checkForDupe2 > -1) {
      shorterArray.splice(checkForDupe2, 1);
    };

    if (checkForDupe1 > -1 && checkForDupe2 > -1) {
      j -= 1;
    };
  };

  var finalArray = longerArray.concat(shorterArray);

  return finalArray;
};


// 5B. Write a function that takes 2 arrays of numbers and returns an array containing only the unique elements common to both arrays. For example, intersection([1, 2, 3], [2, 3, 4]) should return [2,3].
// *Optional challenge: Handle the situation where the elements may not be unique, i.e. intersection([1, 2, 2, 2, 3], [2, 2, 3, 4]) should then return [2, 2, 3].

function intersection(a1, a2) {
  if (a1.length > a2.length) {
    var longerArray = a1;
    var shorterArray = a2;
  } else {
    var longerArray = a2;
    var shorterArray = a1;
  };

  var result = [];

  for(z = 0; z < longerArray.length; z++) {
    var currentNumber = longerArray[z];
    var checkForMatch = shorterArray.indexOf(currentNumber);

    if (checkForMatch > -1) {
      result.push(longerArray.splice(z, 1));
      shorterArray.splice(checkForMatch, 1);

      z -= 1;
    };
  };

  result = result.reduce(function(a, b) {
            return a.concat(b);
          });

  return result
};

// 5C. Write a function that takes 2 arrays of numbers and returns an array containing only the unique elements that belong to exactly one array. For example, difference([1, 2, 3], [2, 3, 4]) should return [1, 4].
// *Optional challenge: Handle the situation where the elements may not be unique, i.e. difference([1, 2, 2, 3], [2, 2, 2, 3, 4]) should return [1, 2, 4].


function difference(a1, a2) {
  if (a1.length > a2.length) {
    var longerArray = a1;
    var shorterArray = a2;
  } else {
    var longerArray = a2;
    var shorterArray = a1;
  };

  var result = [];

  for(z = 0; z < longerArray.length; z++) {
    var currentNumber = longerArray[z];
    var checkForMatch = shorterArray.indexOf(currentNumber);

    if (checkForMatch > -1) {
        longerArray.splice(z, 1);
        shorterArray.splice(checkForMatch, 1);

        z -= 1;
    } else {
        result.push(longerArray.splice(z, 1));

        z -= 1;
    };
  };

  result.push(shorterArray);

  result = result.reduce(function(a, b) {
            return a.concat(b);
          });

  return result
};

// Bonus round!
// ============
// Extension to Exercise 2: Uncomment the code below. It generates an array of 10000 random integers. Write a function that takes the array of integers and returns an array of objects. Each object should have the following 3 keys and their corresponding values:
// 1. key: `number`, value: the integer itself
// 2. key: `ordinalForm`, value: the ordinal version of the number itself, e.g. 1st, 2nd, etc
// 3. key: `isPrime`, value: true if the number is prime, false if it isn't

// var i = 1, testArray = [];
// while (i <= 10000) {
//     testArray[i-1] = Math.ceil(Math.random() * 10000);
//     i++;
// };


// Extension to Exercise 3: Write a function that takes 2 strings and returns true if one string can be formed by rearranging the letters in the other. E.g. isAnagram("meta", "team") should return true, while isAnagram("meat", "meh") should return false.
