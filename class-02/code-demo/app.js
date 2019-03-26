'use strict';

// var userName = prompt('What is your name');
var userName = 'sam';

/*
if statement
if(<conditional>){
  <do the things>
} else if(<conditional>){
  <do the things>
} else {
  <do the things>
}
*/

if(userName === 'nicholas'){
  console.log('Hey, we\'ve got the same name');

} else if(userName === 'sam'){
  console.log('hey, you must be my teacher');

} else {
  console.log('Welcome to the site, ' + userName);

}

/*
Arrays

declare an array with "[]"
put things into an array, when we define it, by typing the values separated by commas
"[value1, value2, value3]"
stores values
values are separated by commas
var demoArray = [value1, value2] === "array literal"
elements can be any value in js (number, string, NaN, null, undefined, arrays, objects, functions)
array indexes are assigned new values by accessing the array with bracket "[0]" notation
testArray[3] = 'something new';
demoArray[0] === value1
*/

var testArray = [];

var arrayWithEveryJsValues = [1,2, 'three', true, {}, console.log, [2, 4], null, undefined, NaN];

console.log(testArray);
console.log(arrayWithEveryJsValues);

var nameArray = ['nicholas', 'sam', 'ed', 'roger', 'matt', 'dana'];

nameArray[0] = 'brian';

console.log(nameArray);


// Lab Demo

var isTall = prompt('is nicholas tall');

if(isTall === 'yes' || isTall === 'Yes'){
  alert('yep');
} else {
  alert('nope');
}
