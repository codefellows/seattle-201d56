'use strict';

var hours = ['6am', '7am', '8am', '9am']

var pike = {
  minCustomersPerHour: 23,
  maxCustomersPerHour: 44,
  avgCookiesPerCustomer: 3.14,
  locationName: 'Pike Place Market',
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForDay: 0
};

pike.calcCustomersEachHour = function() {
  // generate a random number between min and max
  for (var i = 0; i < hours.length; i++) {
    this.customersEachHour.push(rand(this.minCustomersPerHour, this.maxCustomersPerHour));
  }
};

pike.calcCookiesEachHour =  function() {
  for (var i = 0; i < hours.length; i++) {
    var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer);
    this.cookiesEachHour.push(oneHour);
    this.totalCookiesForDay += oneHour;
  }
};

pike.render =  function() {
  var ulEl = document.getElementById('pikeplace');
  for (var i = 0; i < hours.length; i++) {
  // create, content, append
    var liEl = document.createElement('li');
    liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
    ulEl.appendChild(liEl);
  }
  // create, content, append
  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalCookiesForDay} cookies`;
  ulEl.appendChild(liEl);
}


function rand(min, max) {
  // following line line MDN Math.random docs
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

pike.calcCustomersEachHour();
pike.calcCookiesEachHour();
pike.render();
