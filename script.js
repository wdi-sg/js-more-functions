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
// 	switch(true) {
// 		case(i % 3 === 0 && i % 5 === 0):
// 			console.log("FizzBuzz");
// 			break
// 		case (i % 3 === 0):
// 			console.log("Fizz");
// 			break
// 		case (i % 5 === 0):
// 			console.log("Buzz");
// 			break
// 		default:
// 			console.log(i);
// 			break;
// 	}
// }



// Exercise 2: Prime Counting
// ==========================
// Write a function that takes a number and returns true if the number is prime, and false otherwise.
// Hint: A number is prime when it is only divisble by 1 and itself.

// function isPrime(num) {
// 	if (num < 2) {
// 		return false;
// 	} else if (num === 2) {
// 		return true;
// 	} else {
// 		for (var i = 2; i < num; i++) {
// 			if (num % i !== 0) {
// 				return true;
// 			} else {
// 				return false;
// 			}
// 		}
// 	}
// }
// console.log(isPrime(5));



// Exercise 3: Letter Counting
// ===========================
// Write a function that takes a string and prints out how many times a character occurs in the string. For example, letterCount("apple") should print the following:
// a - 1
// p - 2
// l - 1
// e - 1
// Hint: Somewhere, you will need to examine each letter in the string, and increase the value of a counter depending on the letter you're currently examining. An object with keys corresponding to the letters of the string would be useful.

// function letterCount(str) {
// 	var obj = {};
// 	for (var i = 0; i < str.length; i++) {
// 		if (str.charAt(i) !== " ") {
// 			var key = str.charAt(i);
// 			obj[key] = 0;
// 		}
// 	}
// 	for (key in obj) {
// 		for (var j = 0; j < str.length; j++) {
// 			if (key === str.charAt(j)) {
// 				obj[key] += 1;
// 			}
// 		}
// 	}
// 	for (key in obj) {
// 		console.log(key + " - " + obj[key]);
// 	}
// }
// console.log(letterCount("generalassembly"));








// Exercise 4: Debugging
// =====================
// The swap function below is supposed to swap the values of two variables given to it. Run the code and explain the result. Write any necessary corrected code below.
// Note: Compare this to a previous exercise on swapping two elements of an array. If time permits, explain the difference between this swap function and the function you wrote for swapping two elements of an array which worked.

// var x = 2, y = 10;

// function swap(a, b) {
//     var tmp = a; 
//     a = b;
//     debugger;
//     b = tmp;
//     console.log("Variables swapped:", a, b);
// }

// swap(x, y);
// console.log("The value of x is", x, "and the value of y is", y);

// // Explanation: var a and b are of local scope and x and y are of global scope. x and y are still not changed.

// // Write your corrected code below.

// var num1, num2;

// function swap(a, b) {
// 	num1 = b;
// 	num2 = a;
// 	console.log("Variables swapped:", a, b);
// }
// swap(x, y);
// console.log("The value of x is", num1, "and the value of y is", num2);


// Exercise 5: Array arithmetic
// ============================
// 5A. Write a function that takes 2 arrays of numbers and returns an array containing only the unique elements in both arrays. For example, union([1, 2, 3], [2, 3, 4]) should return [1, 2, 3, 4].
// Hint: The .indexOf method of an array can find you the index of a given element in an array.
// *Optional challenge: add an optional 3rd parameter, to be a boolean value, so that when it is true, the array that you return is sorted.


// function union(arr1, arr2, choice) {
// 	var result = arr1.concat(arr2);
// 	var result2 = [];
// 	for (var i = 0; i < result.length; i++) {
// 		for (var j = 0; j < result.length; j++) {
// 			if (i !== j) {
// 				if (result[i] === result[j]) {
// 					delete result[i];
// 				}
// 			}
			
// 		}
// 	}
// 	for (var k = 0; k < result.length; k++) {
// 		if (result[k] !== undefined) {
// 			result2.push(result[k]);
// 		}
// 	}
// 	if (choice === true) {
// 		var result3 = result2.sort();
// 		return result3;
// 	} else {
// 		return result2;	
// 	}
// }

// console.log(union([1,2,3], [2,3,4], true));


// 5B. Write a function that takes 2 arrays of numbers and returns an array containing only the unique elements common to both arrays. For example, intersection([1, 2, 3], [2, 3, 4]) should return [2,3].
// *Optional challenge: Handle the situation where the elements may not be unique, i.e. intersection([1, 2, 2, 2, 3], [2, 2, 3, 4]) should then return [2, 2, 3].

// function intersection(a, b) {
// 	var result = [];
// 	for (var i = 0; i < a.length; i++) {
// 		for (var j = 0; j < b.length; j++) {
// 			if (a[i] === b[j] && result.indexOf(a[i]) < 0) {
// 				result.push(a[i]);
// 			}
// 		}
// 	}
// 	return result;
// }

// console.log(intersection([1,2,2,2,3], [2,2,3,4]));





// 5C. Write a function that takes 2 arrays of numbers and returns an array containing only the unique elements that belong to exactly one array. For example, difference([1, 2, 3], [2, 3, 4]) should return [1, 4].
// *Optional challenge: Handle the situation where the elements may not be unique, i.e. difference([1, 2, 2, 3], [2, 2, 2, 3, 4]) should return [1, 2, 4].


// function difference(a, b) {
// 	var result2 = [];
// 	for (var i = 0; i < a.length; i++) {
// 		for (var j = 0; j < b.length; j++) {
// 			if (a[i] === b[j]) {
// 				a[i] += "a"
// 				b[i] += "a";
// 			}
// 		}
// 	}
// 	var result = a.concat(b);
// 	result.forEach(function(el) {
// 		if (isNaN(el) === false) {
// 			result2.push(el);
// 		}
// 	});
// 	return result2;
// }

// test1 = [1,2,2,3];
// test2 = [2,2,2,3,4];

// console.log(difference(test1, test2));



// Bonus round!
// ============
// Extension to Exercise 2: Uncomment the code below. It generates an array of 10000 random integers. Write a function that takes the array of integers and returns an array of objects. Each object should have the following 3 keys and their corresponding values:
// 1. key: `number`, value: the integer itself
// 2. key: `ordinalForm`, value: the ordinal version of the number itself, e.g. 1st, 2nd, etc
// 3. key: `isPrime`, value: true if the number is prime, false if it isn't

// var i = 1, testArray = [], newObject1 = {}, newObject2 = {}, newObject3 = {};
// while (i <= 10000) {
//     testArray[i-1] = Math.ceil(Math.random() * 10000);
//     i++;
// };
// testArray.forEach(function(el) {
// 	var index = testArray.indexOf(el);
// 	var ordinal = index + 1;
// 	var result;
// 	switch(true) {
// 		case isPrime(el):
// 			result = "prime number";
// 			break;
// 		default:
// 			result = "not a prime number"
// 			break;
// 	}
// 	newObject1[el] = el;
// 	newObject2[ordinal] = el;
// 	newObject3[el] = result;
// });	
// console.log(newObject1);
// console.log(newObject2);
// console.log(newObject3);




// Extension to Exercise 3: Write a function that takes 2 strings and returns true if one string can be formed by rearranging the letters in the other. E.g. isAnagram("meta", "team") should return true, while isAnagram("meat", "meh") should return false.

// var score = function(word) {
// 	var keyboard = "abcdefghijklmnopqrstuvwxyz";
// 	var result = 0;
// 	var word2 = word.toLowerCase();
// 	for (var i = 0; i < word2.length; i++) {
// 		var letter = word2.charAt(i);
// 		result += keyboard.indexOf(letter);
// 	}
// 	return result;
// }

// var isAnagram = function(a, b) {
// 	var aScore = score(a), bScore = score(b);
// 	if (aScore === bScore) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

console.log(isAnagram("meat", "mea"));