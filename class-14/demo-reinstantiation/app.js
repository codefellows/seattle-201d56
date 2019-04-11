'use strict';

var allCats = [];

function Cat(name, age){
  this.name = name;
  this.age = age;
  this.meow = function() {
    console.log('MEEEOOOWWWWW!!!')
  };
  allCats.push(this);
}

new Cat ('Buddy', 16);
new Cat ('Aloysius', 1);
