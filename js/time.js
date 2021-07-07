// set up variable to manage date rules
const date = new Date(); // New Date object
date.setDate(date.getDate() + 30) // Current day plus 30 days
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// convert target date to a date object
let targetDate = date;

// set up the loop to update the countdown once a second
let x = setInterval(function() {

  // get the current time
  let now = new Date().getTime();

  // get the time remaining
  let distance = targetDate - now;

  // update the <span> tags with the countdown values
  document.querySelector('#days').innerHTML = Math.floor(distance / (day))+" days, ";
  document.querySelector('#hours').innerHTML = Math.floor((distance % (day)) / (hour))+" hours, ";
  document.querySelector('#minutes').innerHTML = Math.floor((distance % (hour)) / (minute))+" minutes, ";
  document.querySelector('#seconds').innerHTML = Math.floor((distance % (minute)) / second)+" seconds ";
}, second)