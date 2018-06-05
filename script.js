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

// for (var i = 1; i < 101; i++) {
//   var fizz = i % 3 == 0;
//   var buzz = i % 5 == 0;
//   console.log(fizz ? buzz ? "FizzBuzz" : "Fizz" : buzz ? "Buzz" : i);
// }

// Exercise 2: Prime Counting
// ==========================
// Write a function that takes a number and returns true if the number is prime, and false otherwise.
// Hint: A number is prime when it is only divisble by 1 and itself.

// var userInput = Math.round(prompt("Enter a whole number below."));
// // initially, assume all numbers are prime
// var isPrime = true;

// if (userInput > 0) {
//     // start the division from 2 (to exclude 1)
//     i = 2;

//     // loop through all numbers before userInput (to exclude userInput itself) to check divisions
//     while (i < userInput) {

//         if (userInput % i == 0) {
//             // userInput is not prime if it can be divided by 2
//             isPrime = false;
//         }

//         // keep checking through all i
//         i++;

//         }

//         if (isPrime) {

//             console.log(i + " is a prime number!");

//         } else {

//             console.log(i + " is NOT a prime number!");

//         }

//     } else if (isNaN(userInput)) {

//         console.log("Invalid input - not a number!");

//     }


// Exercise 3: Letter Counting
// ===========================
// Write a function that takes a string and prints out how many times a character occurs in the string. For example, letterCount("apple") should print the following:
// a - 1
// p - 2
// l - 1
// e - 1
// Hint: Somewhere, you will need to examine each letter in the string, and increase the value of a counter depending on the letter you're currently examining. An object with keys corresponding to the letters of the string would be useful.

// // list the array of particular occurrence
// var regex = /e/g;
// var string = "appleeeeeeeeee";
// // var result = string.match(regex);
// console.log(result);


// // check counter with loops
// var string = "appleeeeeeeeee";
// var myCounter = {};

// // loops through each letter
// for (i = 0; i < string.length; i++) {
//     var matchString = string.match(new RegExp(string[i], "g"))
//     myCounter[string[i]] = matchString.length;
// }
// console.log(myCounter);

// // check counter with function
// var myCounter = {};

// // loops through each letter
// var checkCounter = function (string) {
//     for (i = 0; i < string.length; i++) {
//         var matchString = string.match(new RegExp(string[i], "g"))
//         myCounter[string[i]] = matchString.length;
//     }
//     return myCounter;
// }

// var stringToCheck = prompt("Type in a string to check character counter");
// console.log(checkCounter(stringToCheck));

// Exercise 4: Debugging
// =====================
// The swap function below is supposed to swap the values of two variables given to it. Run the code and explain the result. Write any necessary corrected code below.
// Note: Compare this to a previous exercise on swapping two elements of an array. If time permits, explain the difference between this swap function and the function you wrote for swapping two elements of an array which worked.

// var valueOne = 2;
// var valueTwo = 10;

// function swap(a, b) {
//     var tmp = a;
//     a = b;
//     b = tmp;
//     console.log("Variables swapped:", a, b);
//     return [a, b];
// }

// var newArray = swap(valueOne, valueTwo);
// var newValueOne = newArray[0];
// var newValueTwo = newArray[1];

// console.log("The value of x is", newValueOne, "and the value of y is", newValueTwo);


// Explanation:
// did not return the values in function
// should store returned values in a var to access

// Write your corrected code below.
// see above


// Exercise 5: Array arithmetic
// ============================
// 5A. Write a function that takes 2 arrays of numbers and returns an array containing only the unique elements in both arrays.
// For example, union([1, 2, 3], [2, 3, 4]) should return [1, 2, 3, 4].
// Hint: The .indexOf method of an array can find you the index of a given element in an array.
// *Optional challenge: add an optional 3rd parameter, to be a boolean value, so that when it is true, the array that you return is sorted.


// var arrayOne = [4,12,21,33,50];
// var arrayTwo = [11,21,33,44,99];
// var combinedArray = arrayOne.concat(arrayTwo); // [4, 12, 21, 33, 50, 11, 21, 33, 44, 99]
// var uniqueArray = combinedArray.filter(function (item, pos) {return combinedArray.indexOf(item) == pos}); // [4, 12, 21, 33, 50, 11, 44, 99]

// var checkExist = function(element) {
//     // if number exists in uniqueArray in either arrayOne or arrayTwo, below condition will return false
//     return (arrayOne.indexOf(element) === -1 || arrayTwo.indexOf(element) === -1);
// };

// // the numbers filtered as true in arrayOne are unique, stored in arrayThree
// var arrayThree = uniqueArray.filter(checkExist);
// console.log(arrayThree);


// 5B. Write a function that takes 2 arrays of numbers and returns an array containing only the unique elements common to both arrays. For example, intersection([1, 2, 3], [2, 3, 4]) should return [2,3].
// *Optional challenge: Handle the situation where the elements may not be unique, i.e. intersection([1, 2, 2, 2, 3], [2, 2, 3, 4]) should then return [2, 2, 3].

// var arrayOne = [4,12,21,33,50];
// var arrayTwo = [11,21,33,44,99];
// var combinedArray = arrayOne.concat(arrayTwo); // [4, 12, 21, 33, 50, 11, 21, 33, 44, 99]

// var isUniqueAndCommon = function(element, pos) {
//     var existInBothArrays = arrayOne.indexOf(element) >= 0 && arrayTwo.indexOf(element) >= 0;
//     var firstOccurrence = combinedArray.indexOf(element) == pos;
//     return (existInBothArrays && firstOccurrence);
// };

// var arrayThree = combinedArray.filter(isUniqueAndCommon);
// console.log(arrayThree);

// Option 2:

// var exists = function(array, element) {
//     return array.indexOf(element) >= 0;
// }

// var arrayOne = [4,12,21,33,50];
// var arrayTwo = [11,21,33,44,99];
// var combinedArray = arrayOne.concat(arrayTwo); // [4, 12, 21, 33, 50, 11, 21, 33, 44, 99]

// var isUniqueAndCommon = function(element, pos) {
//     var existInBothArrays = exists(arrayOne, element) && exists(arrayTwo, element);
//     var firstOccurrence = combinedArray.indexOf(element) == pos;
//     return (existInBothArrays && firstOccurrence);
// };

// var arrayThree = combinedArray.filter(isUniqueAndCommon);
// console.log(arrayThree);


// 5C. Write a function that takes 2 arrays of numbers and returns an array containing only the unique elements that belong to exactly one array.
// For example, difference([1, 2, 3], [2, 3, 4]) should return [1, 4].
// *Optional challenge: Handle the situation where the elements may not be unique, i.e. difference([1, 2, 2, 3], [2, 2, 2, 3, 4]) should return [1, 2, 4].

// var exists = function(array, element) {
//     return array.indexOf(element) >= 0;
// }

// var arrayOne = [4,12,21,33,50];
// var arrayTwo = [11,21,33,44,99];
// var combinedArray = arrayOne.concat(arrayTwo); // [4, 12, 21, 33, 50, 11, 21, 33, 44, 99]

// var isUniqueInEitherArray = function(element, pos) {
//     var existInOneArrayOnly = exists(arrayOne, element) && !exists(arrayTwo, element) || (!exist(arrayOne, element) && exist(arrayTwo, element));
//     var firstOccurrence = combinedArray.indexOf(element) == pos;
//     return (existInOneArrayOnly && firstOccurrence);
// };

// var arrayThree = combinedArray.filter(isUniqueInEitherArray);
// console.log(arrayThree);


// Bonus round!
// ============
// Extension to Exercise 2: Uncomment the code below. It generates an array of 10000 random integers.
// Write a function that takes the array of integers and returns an array of objects.
// Each object should have the following 3 keys and their corresponding values:
// 1. key: `number`, value: the integer itself
// 2. key: `ordinalForm`, value: the ordinal version of the number itself, e.g. 1st, 2nd, etc
// 3. key: `isPrime`, value: true if the number is prime, false if it isn't

// var isPrime = function(number) {
//     var isPrime = true;
//     if (number > 0) {
//         i = 2;
//         while (i < number) {
//             if (number % i == 0) {
//                 return false;
//             }
//             i++;
//         }
//         return true;
//     }
// }

// var ordinalForm = function(number) {
//     var modulus1 = number % 10,
//         modulus2 = number % 100;
//     if (modulus1 == 1 && modulus2 != 11) {
//         return number + "st";
//     }
//     if (modulus1 == 2 && modulus2 != 12) {
//         return number + "nd";
//     }
//     if (modulus1 == 3 && modulus2 != 11) {
//         return number + "rd";
//     }
//     return number + "th";
// }

// var i = 1, testArray = [];
// while (i <= 10000) {
//     testArray[i-1] = Math.ceil(Math.random() * 10000);
//     i++;
// };

// var infoArray = testArray.map(function (currentNumber) {
//     var info = {number: currentNumber, ordinalForm: ordinalForm(currentNumber), isPrime: isPrime(currentNumber)};
//     return info;
// });

// console.log(infoArray);

// Extension to Exercise 3: Write a function that takes 2 strings and returns true if one string can be formed by rearranging the letters in the other.
// E.g. isAnagram("meta", "team") should return true, while isAnagram("meat", "meh") should return false.

// break each string into characters
// for each character in stringOne, check if exist in stringTwo
// if exist, remove checked element from stringTwo (with .indexOf())
// if doesnt exist, return false
