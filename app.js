// 1. (_completed below_) Define a function, as a function declaration, `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. If they are the same,
// return that number. Use the if-else construct or a ternary expression -  the Math.max method is not allowed.

function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }

    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }

  console.log(`Exercise 1 solution is ${maxOfTwoNumbers(3, 9)}.`);


// 2. Define a function as a function expression, `maxOfThree`, that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

let max = function maxOfThree(num1, num2, num3) {
    if(num1 >= num2 && num1 >= num3){
        return(num1);
    }
    else if(num2 >= num1 && num2 >= num3){
      return(num2);
    }
    else {
      return(num3);
    }
  };
console.log(`Exercise 2 solution is ${max(4,2,2)}.`);


// 3. Define a function, as a function declaration, `isCharAVowel` that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(letter) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.includes(letter)){
    return true;
  } else {
    return false;
  }
}

console.log(`Exercise 3 solution is ${isCharAVowel('o')}.`);

// 4. Define a function, as a function expression, `sumArray` that takes an array of numbers and returns the sum of those numbers. For example, `sumArray([2, 4, 5]);` would return `11`.

let sumArray = function(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
  sum = sum + arr[i];
  }
  return(sum);
};

console.log(`Exercise 4 solution is ${sumArray([2, 4, 5])}.`);

// 5. Define a function, as a function declaration, `multiplyArray` that takes an array of numbers and returns the product of those numbers. For example, `multiplyArray([2, 4, 5]);` would return `40`.

function multiplyArray(arr) {
  let product = 0;
  for (let q = 0; q < arr.length; q++) { //This loop is to check that all the elements of the array are not equal to 0. Example: [0,0,0]
    product += arr[q];                   //If at least one of the elements is not equal to 0, then the product will not be equal to 0
  }
  if (product === 0){
  return product;
  }
  else {                                //Since the elements of the given array are not all equal to 0, then the product is not equal to 0 and we can proceed with our multiplication
    let product = 1;
  for (let e = 0; e < arr.length; e++){
    product *= (arr[e]);
  }
  return(product);
}
}
console.log(`Exercise 5 solution is ${multiplyArray([2,4,5])}.`);


// 6. Define a function, as a function expression, `numArgs` that returns the number of arguments passed to the function when called.

let numArgs = function(...args){
  let counter = 0;
  counter = args.length;
  return counter;
}
console.log(`Exercise 6 solution is ${numArgs(1,2,3,'hi', 5)}.`);


// 7. Define a function, as a function declaration, `reverseString` that takes a string, reverses the characters and returns it. For example, `reverseString('rockstar');` would return the string "ratskcor".

function reverseString(string) {
 reversed = ('');
 for(let k = string.length -1; k > -1; k--){
   reversed += string[k];
 }
 return(reversed);
}
console.log(`Exercise 7 solution is ${reverseString('rockstar')}.`);
console.log(reverseString('stressed desserts'));
console.log(reverseString('racecar'));
console.log(reverseString('kayak'));
console.log(reverseString('refer'));
console.log(reverseString('nuf era semordnilap'));


// 8. Define a function, as a function expression, `longestStringInArray` that takes an array of strings as an argument and returns the longest string's length.

let longestStringInArray = function(string) {
  let long = 0;

  for (let v = 0; v < string.length; v++) {
    if (string[v].length > long) {
      long = string[v].length;
      let = longestWord = string[v];
      }
  }
  return long;
}
console.log(`Exercise 8 solution is ${longestStringInArray(['on', 'off', 'four', 'JavaScript', 'potato'])} and the word is ${longestWord}.`);


// 9. Define a function, as a function declaration, `stringsLongerThan` that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, `stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);` would return `["hello", "morning"]`.

function stringLongerThan(words, number){
  let longerThan = [];
  for(let d = 0; d < words.length; d++){
    if(words[d].length > number){
      longerThan.push(words[d]);
    }
  }
  return longerThan;
}
console.log(`Exercise 9 solution is ${stringLongerThan(['on', 'off', 'four', 'JavaScript', 'potato'], 4)}.`);
