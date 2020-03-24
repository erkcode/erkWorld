const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

const now = new Date()
const thisMorning = now
thisMorning.setHours(7)
thisMorning.setMinutes(0)
thisMorning.setSeconds(0)
const launchDate = thisMorning.getTime() + 18 * day

function countdown() {
  const now = new Date().getTime()
  const delta = launchDate - now
  const days = Math.floor(delta / day)
  const hours = Math.floor((delta % day) / hour)
  const minutes = Math.floor((delta % hour) / minute)
  const seconds = Math.floor((delta % minute) / second)
  document.getElementById('days').innerText = days
  document.getElementById('hours').innerText = hours
  document.getElementById('minutes').innerText = minutes
  document.getElementById('seconds').innerText = seconds
}

setInterval(countdown, 1000)
