const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const historyBtn = document.querySelector('.history');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');

const infoBtn = document.querySelector('.info');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalBtn = document.querySelector('.close');

const showPaletteBtn = document.querySelector('.change-color');
const color_red = document.querySelector('.red');
const color_blue = document.querySelector('.blue');
const color_green = document.querySelector('.green');
const color_yellow = document.querySelector('.yellow');
const colors = document.querySelector('.colors');

let countTime;
let seconds = 0;
let minutes = 0;
let timesArr = [];

const handleStart = () => {
    clearInterval(countTime);
    countTime = setInterval(() => {
        if(seconds < 9) {
            seconds++;
            stopwatch.textContent = `${minutes}:0${seconds}`;
        } else if(seconds >= 9 && seconds < 59) {
            seconds++;
            stopwatch.textContent = `${minutes}:${seconds}`;
        } else {
            minutes++;
            seconds = 0;
            stopwatch.textContent = `${minutes}:00`
        }
    }, 1000);
}

const handlePause = () => {
    clearInterval(countTime);
}

const handleStop = () => {
    time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`
    if(stopwatch.textContent !== '0:00') {
        time.style.visibility = 'visible';
        timesArr.push(stopwatch.textContent);
    }
    clearStuff();
}

const handleReset = () => {
    time.style.visibility = 'hidden';
    timesArr = [];
    clearStuff();
}

const clearStuff = () => {
    clearInterval(countTime);
    stopwatch.textContent = '0:00';
    timeList.textContent = '';
    seconds = 0;
    minutes = 0;
}

const showHistory = () => {
    timeList.textContent ="";
    let i = 1;
    timesArr.forEach(el => {
        const list = document.createElement('li');
        list.innerHTML = `Pomiar nr ${i}: <span>${el}</span>`

        timeList.appendChild(list);
        i++;
    })
}

const showModal = () => {
    modalShadow.style.display = 'block';
    modalShadow.classList.add('modal-animation');
}

const closeModal = () => {
    modalShadow.style.display = 'none';
    modalShadow.classList.remove('modal-animation');
}

const showTheme = () => {
    colors.classList.toggle('tgl');
}

startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
historyBtn.addEventListener('click', showHistory);
infoBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', closeModal);
window.addEventListener('click', e => { e.target === modalShadow ? closeModal() : false });
showPaletteBtn.addEventListener('click', showTheme);

let root = document.documentElement;

color_red.addEventListener("click", () => {
  root.style.setProperty('--first-color', 'rgb(180, 52, 52)');
});
color_blue.addEventListener("click", () => {
  root.style.setProperty('--first-color', 'rgb(45, 45, 161)');
});
color_green.addEventListener("click", () => {
  root.style.setProperty('--first-color', 'rgb(61, 151, 61)');
});
color_yellow.addEventListener("click", () => {
  root.style.setProperty('--first-color', 'rgb(235, 235, 68)');
});
