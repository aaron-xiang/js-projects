var startTime = null;
var timer = null;

function clickStart() {
   const btnStart = document.querySelector('button#start');
   if (btnStart.innerHTML === 'Start') {
       btnStart.innerHTML = 'Stop';
       startTime = new Date();
       timer = setInterval(displayFormattedTime, 1);
   } else {
       btnStart.innerHTML = 'Start';
       startTime = null;
       clearInterval(timer);
       timer = null;
   }
}

function clickReset() {
    const display = document.querySelector('div#display');
    display.innerHTML = '00:00:00.000';
}

function displayFormattedTime() {
    const time = new Date() - startTime;
    const display = document.querySelector('div#display');
    display.innerHTML = formatTime(time);
}

function formatTime(time) {
    let ms, sec, min, hr;
    // set ms, sec, min, hr;
    ms = time % 1000;
    sec = Math.floor(time / 1000) % 60;
    min = Math.floor(time / 60000) % 60;
    hr = Math.floor(time / 60000 / 60);
    ms = ms.toString().padStart(3, '0');
    sec = sec.toString().padStart(2, '0');
    min = min.toString().padStart(2, '0');
    hr = hr.toString().padStart(2, '0');
    return `${hr}:${min}:${sec}.${ms}`;
}
