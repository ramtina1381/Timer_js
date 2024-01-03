//this code is written to operationalize a timer with 3 main functions of Start, Stop and Reset.
class Clock {
    /*fourth take */

    constructor(displayElement) {
        this.display = displayElement;
        this.state = "initial";
        this.seconds = 0;
        this.interval = null;
    }

    start() {
        if (this.state === "initial") {
            this.interval = setInterval(() => this.timer(), 1000);
            this.state = "running"
        }
    }

    stop() {
        if (this.state ==="running"){
        clearInterval(this.interval);
        this.state = "stopped";
        }
    }

    reset() {
        this.state = "initial";
        clearInterval(this.interval);
        this.seconds = 0;
        this.display.innerText = "00:00:00";
    }

    timer() {


        let hrs = Math.floor(this.seconds / 3600);
        let min = Math.floor((this.seconds - hrs * 3600) / 60);
        let sec = this.seconds % 60;

        if (sec < 10) sec = "0" + sec;
        if (min < 10) min = "0" + min;
        if (hrs < 10) hrs = "0" + hrs;

        this.display.innerText = `${hrs}:${min}:${sec}`;
        this.seconds++;
    }
}

// Initialize the Clock object
const display = document.querySelector(".watch .display");
const clock = new Clock(display);

// Add event listeners to buttons
const startbtn = document.getElementById("start");
const stopbtn = document.getElementById("stop");
const resetbtn = document.getElementById("reset");

startbtn.addEventListener("click", () => clock.start());
stopbtn.addEventListener("click", () => clock.stop());
resetbtn.addEventListener("click", () => clock.reset());

// Initially display the timer
clock.timer();
