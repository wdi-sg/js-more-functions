# JS: More Functions, Arrays, and Objects

## Instructions
1. Fork this repository, then clone your forked repository to your system.
2. Write your solutions to the following exercises in `script.js`.
3. Open `index.html` and examine the console to run your code.

## Exercise 1: Fizzbuzz
Write a function that loops through numbers from 1 to 100 and does the following:
- If the number is divisible by 3, print Fizz.
- If the number is divisible by 5, print Buzz.
- If the number is divisible by both 3 and 5, print FizzBuzz.
- If the number is divisible by neither 3 nor 5, print the number.

_Hint: The % operator gives the remainder when one number is divided by another, e.g. 10 % 7 gives 3._

_Note: This used to be a common interview question._

## Exercise 2: Prime Counting
Write a function that takes a number and returns true if the number is prime, and false otherwise.

_Hint: A number is prime when it is only divisble by 1 and itself._

## Exercise 3: Letter Counting
Write a function that takes a string and prints out how many times a character occurs in the string. Assume that the string contains only letters. For example, letterCount("apple") should print the following:
```
a - 1
p - 2
l - 1
e - 1
```

_Hint: Somewhere, you will need to examine each letter in the string, and increase the value of a counter depending on the letter you're currently examining. An object with keys corresponding to the letters of the string would be useful._

## Exercise 4: Debugging
The swap function below is supposed to swap the values of two variables given to it. Run the code and explain the result. Write your explanation and any necessary corrected code in the comments. Note: Compare this to a previous exercise on swapping two elements of an array. If time permits, explain the difference between this swap function and the function you wrote for swapping two elements of an array which worked.
```
var x = 2, y = 10;

function swap(a, b) {
    var tmp = a;
    a = b;
    b = tmp;
    console.log("Variables swapped:", a, b);
}

swap(x, y);
console.log("The value of x is", x, "and the value of y is", y);
```


## Exercise 5: Array arithmetic
__A.__ Write a function that takes 2 arrays of numbers and returns an array containing only the unique elements in both arrays. For example, union([1, 2, 3], [2, 3, 4]) should return [1, 2, 3, 4].

_Hint: The .indexOf method of an array can find you the index of a given element in an array._

*Optional challenge: add an optional 3rd parameter, to be a boolean value, so that when it is true, the array that you return is sorted.

__B.__ Write a function that takes 2 arrays of numbers and returns an array containing only the unique elements common to both arrays. For example, intersection([1, 2, 3], [2, 3, 4]) should return [2,3].

*Optional challenge: Handle the situation where the elements may not be unique, i.e. intersection([1, 2, 2, 2, 3], [2, 2, 3, 4]) should then return [2, 2, 3].

__C.__ Write a function that takes 2 arrays of numbers and returns an array containing only the unique elements that belong to exactly one array. For example, difference([1, 2, 3], [2, 3, 4]) should return [1, 4].

*Optional challenge: Handle the situation where the elements may not be unique, i.e. difference([1, 2, 2, 3], [2, 2, 2, 3, 4]) should return [1, 2, 4].

## Bonus round!
__Extension to Exercise 2:__ Uncomment the code below. It generates an array of 10000 random integers. Write a function that takes the array of integers and returns an array of objects. Each object should have the following 3 keys and their corresponding values:
1. key: `number`, value: the integer itself
2. key: `ordinalForm`, value: the ordinal version of the number itself, e.g. 1st, 2nd, etc
3. key: `isPrime`, value: true if the number is prime, false if it isn't

```
var i = 1, testArray = [];
while (i <= 10000) {
    testArray[i-1] = Math.ceil(Math.random() * 10000);
    i++;
};
```

__Extension to Exercise 3:__ Write a function that takes 2 strings and returns true if one string can be formed by rearranging the letters in the other. E.g. isAnagram("meta", "team") should return true, while isAnagram("meat", "meh") should return false.

