const btnStart = document.querySelector(".start");

const startTimer = () => {};

const start = e => {
  const btnLoop = document.querySelector(".loop");
  const btnPause = document.querySelector(".pause");
  const btnStop = document.querySelector(".stop");
  e.target.classList.add("hidden");
  startTimer();
  btnLoop.classList.remove("hidden");
  btnPause.classList.remove("hidden");
  btnStop.classList.remove("hidden");
};

btnStart.addEventListener("click", start);
