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
let min, sec, mill;

const reset = function() {
  displayTime.style.color = "black";
  displayTime.innerText = "00 : 00 : 00";
  time = 0;
  countLoop = 0;
  loopList.innerText = "";
  btnReset.classList.add("hidden");
  btnStart.classList.remove("hidden");
};

const stop = () => {
  clearInterval(indexInterval);
  if (pauseActive) btnStart.classList.add("hidden");
  displayTime.style.color = "red";
  btnLoop.classList.add("hidden");
  btnPause.classList.add("hidden");
  btnStop.classList.add("hidden");
  btnReset.classList.remove("hidden");
  btnReset.addEventListener("click", reset);
};

function pause() {
  pauseActive = !pauseActive;
  clearInterval(indexInterval);
  pauseTime = time;
  btnPause.classList.add("hidden");
  btnStart.classList.remove("hidden");
}

const loop = () => {
  loopList.classList.add("active");
  countLoop++;
  const li = document.createElement("li");
  li.innerHTML = `<span class="counter">#${countLoop}</span> ${min}:${sec}:${mill}`;
  loopList.appendChild(li);
};

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

btnPause.addEventListener("click", pause);
btnLoop.addEventListener("click", loop);
btnStop.addEventListener("click", stop);
btnStart.addEventListener("click", start);
