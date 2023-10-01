const circle = document.querySelector(".circle");
const progvalue = document.getElementById('value');

let progstart = 0;
let progend = 100;
let speed = 50;
let progressInterval; 
let paused = false; 
let pauseValue = 0; 



const updateProgress = () => {
    if (progstart < progend) {
        progstart++;
        progvalue.innerHTML = progstart + '%';
        circle.style.background = `conic-gradient(rgb(17,255,8) ${progstart * 3.6}deg, rgb(0,0,0,0.1) 0deg)`;
    }
    else{
        progstart = 0;
        progvalue.innerHTML = progstart + '%';
        circle.style.background = `conic-gradient(rgb(17,255,8) ${progstart * 3.6}deg, rgb(0,0,0,0.1) 0deg)`;
    }

    if (progstart === progend) {
        clearInterval(progressInterval);
    }
}



const startprog = () => {
    clearInterval(progressInterval);
    progressInterval = setInterval(updateProgress, speed);
}

const pauseprog = () => {
    paused = true;
    clearInterval(progressInterval);
    pauseValue = progstart; 
}

document.getElementById('start').addEventListener('click', () => {
    if (paused) {
        paused = false; 
        startprog();
    } else {
        startprog();
    }
});

document.getElementById('pause').addEventListener('click', pauseprog);
