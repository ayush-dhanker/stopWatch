"use strict";

const bttn1El = document.querySelector(".bttn1");
const bttn2El = document.querySelector(".bttn2");
const bttn3El = document.querySelector(".bttn3");
bttn2El.classList.add("clicked");

//Declring variables
let second,
  displaySecond,
  minute,
  displayMinute,
  hour,
  displayHour,
  state,
  interval;

//initializing values
function initializing() {
  second = 0;
  minute = 0;
  hour = 0;
  state = true;
  //values for display
  displaySecond = 0;
  displayMinute = 0;
  displayHour = 0;
}

initializing();

//fuction or logic of stopwatch
function stopwatch() {
  second++;
  if (second / 60 === 1) {
    second = 0;
    minute++;
    if (minute / 60 === 1) {
      minute = 0;
      hour++;
    }
  }

  if (second < 10) {
    displaySecond = `0${second}`;
  } else {
    displaySecond = second;
  }
  if (minute < 10) {
    displayMinute = `0${minute}`;
  } else {
    displayMinute = minute;
  }
  if (hour < 10) {
    displayHour = `0${hour}`;
  } else {
    displayHour = hour;
  }

  //Displaying the timer
  document.getElementById(
    "timer"
  ).innerHTML = `${displayHour}:${displayMinute}:${displaySecond}`;
}

bttn1El.addEventListener("click", function () {
  if (state) {
    interval = window.setInterval(stopwatch, 1000);
    state = false;
    bttn1El.classList.add("clicked");
    bttn3El.classList.remove("clicked");
    bttn2El.classList.remove("clicked");
  }
});

bttn3El.addEventListener("click", function () {
  window.clearInterval(interval);
  state = true;
  bttn3El.classList.add("clicked");
  bttn1El.classList.remove("clicked");
  bttn2El.classList.remove("clicked");
});

bttn2El.addEventListener("click", function () {
  window.clearInterval(interval);
  initializing();
  document.getElementById("timer").innerHTML = `00:00:00`;
  bttn1El.classList.remove("clicked");
  bttn3El.classList.remove("clicked");
  bttn2El.classList.add("clicked");
});
