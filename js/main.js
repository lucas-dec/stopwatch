const btnStart = document.querySelector(".start");
let pauseActive = false;
let startTime, pauseTime;

const btnLoop = document.querySelector(".loop");
const btnPause = document.querySelector(".pause");
const btnStop = document.querySelector(".stop");
const btnReset = document.querySelector(".reset");

const displayTime = document.querySelector(".timer");
let indexInterval;
let time = 0;
let min, sec, mill;

const timer = () => {
  const currentTime = new Date().getTime();
  time = currentTime - startTime;
  const double = value => {
    if (value < 10) return "0" + value;
    else return value;
  };
  min = double(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  sec = double(Math.floor((time % (1000 * 60)) / 1000));
  mill = double(Math.floor((time % 1000) / 10));
  displayTime.innerText = `${min} : ${sec} : ${mill}`;
};

const start = () => {
  btnStart.classList.add("hidden");
  startTime = new Date().getTime();
  indexInterval = setInterval(timer, 10);
  btnLoop.classList.remove("hidden");
  btnPause.classList.remove("hidden");
  btnStop.classList.remove("hidden");
  btnReset.classList.add("hidden");
};

btnStart.addEventListener("click", start);
