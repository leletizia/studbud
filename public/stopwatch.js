//Global variables

// stores the time element inside of a variable
const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

let seconds = 0;
let interval = null;

// Events Listeneners
start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);


// Update the timer
function timer () {
  seconds++;

  // Format time with calculations
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hrs * 3600) / 60);
  let secs = seconds % 60;

  if (secs < 10) secs = '0' + secs;
  if (mins < 10) mins = '0' + mins;
  if (hrs < 10) hrs = '0' + hrs;
  
  time_el.innerText = `${hrs}:${mins}:${secs}`;
}

// what should happen if user presses start
function start () {
  if (interval) {
    return
  }

  interval = setInterval(timer, 1000);
}

// what should happen if user presses stop
function stop () {
  clearInterval(interval);
  interval = null;
}

// what should happen if user presses reset
function reset () {
  stop();
  seconds = 0;
  time_el.innerText = '00:00:00'
}