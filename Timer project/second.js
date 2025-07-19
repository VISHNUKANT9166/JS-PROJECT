function updateClock() {
    const dateElem = document.getElementById('date');
    const timeElem = document.getElementById('time');
    const now = new Date();

    dateElem.innerText = now.toLocaleDateString('en-IN');
    timeElem.innerText = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();
