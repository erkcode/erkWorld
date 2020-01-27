const launchDate = new Date("Feb 14, 2020 06:00:00").getTime();

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function countdown() {
  const now = new Date().getTime();
  const delta = launchDate - now;
  const days = Math.floor(delta / day);
  const hours = Math.floor((delta % day) / hour);
  const minutes = Math.floor((delta % hour) / minute);
  const seconds = Math.floor((delta % minute) / second);
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

setInterval(countdown, 1000);
