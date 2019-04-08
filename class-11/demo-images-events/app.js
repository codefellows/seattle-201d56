'use strict';

//global variables
var allGoats = [];
var goatpic = document.getElementById('goatpic');

function GoatPic(name) {
  // images/sassy-goat.jpg
  this.filepath = `images/${name}.jpg`;
  this.name = name;
  this.views = 0;
  allGoats.push(this);
}

new GoatPic('sassy-goat');
new GoatPic('cruisin-goat');
new GoatPic('float-your-goat');
new GoatPic('goat-away');
new GoatPic('goat-out-of-hand');
new GoatPic('kissing-goat');
new GoatPic('smiling-goat');
new GoatPic('sweater-goat');
new GoatPic('the-goat');

// var previous;
function showRandomGoat(){
  var ramdom = Math.floor(Math.random() * allGoats.length);
  console.log('currently showing before generating new ramdom', goatpic.alt);
  while (goatpic.alt === allGoats[ramdom].name) {
    var ramdom = Math.floor(Math.random() * allGoats.length);
    console.log('duplicate found');
  }
  // previous = ramdom;
  allGoats[ramdom].views += 1;
  goatpic.src = allGoats[ramdom].filepath;
  goatpic.alt = allGoats[ramdom].name;
  goatpic.title = allGoats[ramdom].name;
}

function handleGoatClick(event) {
  console.log(event.target);
  showRandomGoat();
}

showRandomGoat();

goatpic.addEventListener('click', handleGoatClick);
