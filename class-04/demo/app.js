'use strict';

console.log('js linked');

// global variables
var coffees = ['drip', 'French press', 'caramel latte', 'capuccino', 'macchiato'];

// function declarations

// function that takes in a word and puts an s on the end of that word and returns the new word
function pluralize(wordToBePluralized) {
  return wordToBePluralized + 's';
}

// step 1: writing a function
// aka declaring
// aka defining
// aka setting up the function
// giving the code a name

// step 2: using the function
// aka calling
// aka invoking


// functions take inputs and give outputs... sometimes

// functions execute a set of instructions

// a way to modularize code


function printPluralizedCoffees() {
  for (var i = 0; i < coffees.length; i++) {
    // code to figure out if things end in s?
    if (coffees[i][coffees[i].length - 1] !== 's') {
      console.log(pluralize(coffees[i]));
      //console.log(coffees[i] + 's');
    }
  }
}

// driver code: what actually makes my website work

printPluralizedCoffees();
printPluralizedCoffees();
alert('coffees printed!');
