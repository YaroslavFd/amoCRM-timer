const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

let timerId;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    clearInterval(timerId);

    timerId = setInterval(function () {
      const sec = String(seconds % 60).padStart(2, 0);
      const hours = String(Math.trunc((seconds / 60 / 60) % 60)).padStart(2, 0);
      const minutes = String(Math.trunc((seconds / 60) % 60)).padStart(2, 0);
      if (seconds < 0) {
        clearInterval(timerId);
      } else {
        const result = `${hours}:${minutes}:${sec}`;
        timerEl.textContent = result;
      }
      --seconds;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", (e) => {
  const onlyNum = e.target.value.replace(/\D/g, "");
  e.target.value = onlyNum;
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
