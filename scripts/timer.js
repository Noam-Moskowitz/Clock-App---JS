let timerStop = false;


function timer(duration) {
    timerInterval = setInterval(() => {
        if (!timerStop) {
            duration--
            let durationInMins = Math.floor(duration / 60);
            let leftOverScnds = duration % 60;
            let hrs = Math.floor(durationInMins / 60)
            let leftOverMins = durationInMins % 60;
            if (duration <= 0) {
                stopTimer(timerInterval)
                setTimeout(() => { alert(`Time's up!`) }, 1000)
            }
            let timeToDisplay = `${hrs.toString().padStart(2, `0`)}:${leftOverMins.toString().padStart(2, `0`)}:${leftOverScnds.toString().padStart(2, `0`)}`;
            document.getElementById(`timer-screen`).textContent = timeToDisplay
        }
    }, 1000)
}



export { timer, timerStop }


