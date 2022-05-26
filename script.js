"use strict";

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

document.querySelector(".bttn1").addEventListener("click", function () {
  if (state) {
    interval = window.setInterval(stopwatch, 1000);
    state = false;
  }
});

document.querySelector(".bttn3").addEventListener("click", function () {
  window.clearInterval(interval);
  state = true;
});

document.querySelector(".bttn2").addEventListener("click", function () {
  window.clearInterval(interval);
  initializing();
  document.getElementById("timer").innerHTML = `00:00:00`;
});
