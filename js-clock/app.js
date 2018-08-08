const clockElement = document.getElementById('clock');

function getCurrentTime() {
    const d = new Date();
    const h = d.getHours().toString().padStart(2, 0);
    const m = d.getMinutes().toString().padStart(2, 0);
    const s = d.getSeconds().toString().padStart(2, 0);
    clockElement.innerText = `${h} : ${m} : ${s}`;
}

setInterval(getCurrentTime, 1000);
