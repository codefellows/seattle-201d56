'use strict';

console.log('js is linked');

var fruits = ['apple', 'banana', 'cantaloupe', 'dragonfruit'];

// for ( initializing / ; boundary / condition ; increment/update)
// for ( setting up ; when to keep going ; update between loops )
// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// // while loop version of going through array
// var j = 0;
// while(j < fruits.length) {
//   console.log(fruits[j]);
//   j++;
// }

// var amountOfStuff = 30;

// while (amountOfStuff > 1) {
//   console.log('we have ' + amountOfStuff + ' stuff');
//   amountOfStuff = amountOfStuff / 2;
//   console.log('we got rid of ' + amountOfStuff + ' stuff');
// }

// this loop is broken



// these are exactly the same
// the while and the for loop work the same way

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

var userAnswer = '';
var limit = 3;
var numGuesses = 0;
while (userAnswer !== 'yes' && numGuesses < limit) {
  userAnswer = prompt('Is Ping Pong the best?\nHint: The answer is yes.');
  numGuesses++;
}
