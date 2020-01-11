const btnStart = document.querySelector(".start");
let pauseActive = false;
let startTime, pauseTime;
let countLoop = 0;

const btnLoop = document.querySelector(".loop");
const btnPause = document.querySelector(".pause");
const btnStop = document.querySelector(".stop");
const btnReset = document.querySelector(".reset");

const displayTime = document.querySelector(".timer");
const loopList = document.querySelector("ul.loop");
let indexInterval;
let time = 0;
let min, sec, mil;

function pause() {
  pauseActive = !pauseActive;
  clearInterval(indexInterval);
  pauseTime = time;
  btnPause.classList.add("hidden");
  btnStart.classList.remove("hidden");
}

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
  btnLoop.classList.remove("hidden");
  btnPause.classList.remove("hidden");
  btnStop.classList.remove("hidden");
  btnReset.classList.add("hidden");
  if (!pauseActive) {
    startTime = new Date().getTime();
    indexInterval = setInterval(timer, 10);
  }
  if (pauseActive) {
    pauseActive = !pauseActive;
    startTime = new Date().getTime() - time;
    indexInterval = setInterval(timer, 10);
  }
};

btnStart.addEventListener("click", start);
btnPause.addEventListener("click", pause);
