const limbText = document.getElementById("limb");
const colorText = document.getElementById("color");
const countElement = document.getElementById("counter");
const timerElement = document.getElementById('timer');
const container = document.getElementById("container");

const colors = ["red", "green", "yellow", "blue"];
const limbs = ["right hand", "left hand", "right foot", "left foot"]
let timerId;
let seconds = 0;

const change = () => {
  const colorIndex = Math.floor(Math.random() * 4);
  const limbIndex = Math.floor(Math.random() * 4);

  colorText.innerText = colors[colorIndex];
  limbText.innerText = limbs[limbIndex];

  container.classList.remove(...container.classList);
  container.classList.add(colors[colorIndex]);

  const count = countElement.innerText;
  if (count) {
    countElement.innerText = parseInt(count) + 1;
  } else {
    countElement.innerText = 1;
  }

  clearTimeout(timerId);
  timerId = setInterval(() => {
    seconds++;
    timerElement.innerText = formatTime(10 - seconds);

    if (seconds >= 10) {
      clearInterval(timerId);
      seconds = 0;
      change();
    }
  }, 1000); // Update timer every 1 second

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }
}

document.addEventListener("keypress", () => {
  seconds = 0;
  change();
});
document.addEventListener("click", () => {
  seconds = 0;
  change();
});