const refs = {
    start: document.querySelector("button[data-start]"),
    stop: document.querySelector("button[data-stop]"),
    body:document.querySelector("body"),
}
let intervalId = 0;
const TIME = 1000;

refs.start.addEventListener("click", startTimer);
refs.stop.addEventListener("click", stopTimer);

function startTimer() {
    refs.start.setAttribute('disabled', true);
    refs.stop.removeAttribute('disabled');
    intervalId = setInterval(() => {
        refs.body.style.background = getRandomHexColor();
    }, TIME);
}

function stopTimer() {
    refs.start.removeAttribute('disabled');
    refs.stop.setAttribute('disabled', true);
    clearInterval(intervalId);   
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
