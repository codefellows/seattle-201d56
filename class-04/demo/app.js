'use strict';

console.log('js linked');

var coffees = ['drip', 'French press', 'caramel latte', 'capuccino', 'macchiato'];

for (var i = 0; i < coffees.length; i++) {
  // code to figure out if things end in s?
  if (coffees[i][coffees[i].length - 1] !== 's') {
    console.log(coffees[i] + 's');
  }
}
