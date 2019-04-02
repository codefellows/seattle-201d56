'use strict';

var luke = {
  course: '201d56',
  enrolled: true,
  instructors: 'Sam',
  first: 'Luke',
  lastName: 'Chandler',
  preferredName: 'Skywalker',
  homeTown: 'Tatooine',
  codeNinja: true,
  introduction: function () {
    return 'Hi, my name is ' + this.firstName + ' ' + this.lastName + ', but you can call me ' + this.preferredName + '. I am from ' + this.homeTown + '.';
  }
};

// 15 lines of code were needed to create that object.
// We would need 525 lines of code to model the entire class in objects!
// Not only that, but also 35 variable names added to the global namespace? Yuck!
// There must be a better way!

// Constructor function syntax

// function ConstructorFunctionName (parameter1, parameter2) {
//   this.property = parameter1;
//   this.property2 = parameter2;
//   this.staticProperty1 = 'ExampleString';
//   this.method1 = function () {
//     console.log('do stuff');
//   };
// }

//====================
// Student Constructor
//====================

var allStudents = [];

function Student(firstName, lastName, preferredName, homeTown) {
  this.course = '201d56';
  this.enrolled = true;
  this.instructors = 'Sam';
  this.firstName = firstName;
  this.lastName = lastName;
  this.preferredName = preferredName;
  this.homeTown = homeTown;
  this.codeNinja = true;
  allStudents.push(this);
}

Student.prototype.introduction = function () {
  return 'Hi, my name is ' + this.firstName + ' ' + this.lastName + ', but you can call me ' + this.preferredName + '. I am from ' + this.homeTown + '.';
};

new Student('Luke', 'Chandler', 'Skywalker', 'Tatooine');
new Student('Paula', 'Thomas', 'Paula', 'Silverdale');
new Student('Tim', 'Busch', 'Tim', 'Seattle');
new Student('Jen', 'Shin', 'Jen', 'Narnia');

// Constructor = 15
// Each instance = 1 * 35
// Total lines to model the entire class: 50

console.table(allStudents);

//Student Prototype Property

Student.prototype.employer = 'Amazon';
