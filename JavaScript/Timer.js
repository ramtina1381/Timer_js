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
        // I added the second parameter, so that if I want to continue the timer after stopping it; it allows me to do so.
        if (this.state === "initial" || this.state === "stopped") {
            this.state = "running";
            this.timer();
            this.interval = setInterval(() => this.timer(), 1000);
        }
    }


    stop() {
        if (this.state ==="running"){
        clearInterval(this.interval);
        this.state = "stopped";
        }
    }

    reset() {
        clearInterval(this.interval);
        this.state = "initial";
        this.seconds = 0;
        this.display.innerText = "00:00:00";
    }

    timer() {
        // Using the padStart() and making a function to avoid repetition with the name padWithZero.
        function padWithZero(value) {
            return value.toString().padStart(2, '0');
        }
        let hrs = Math.floor(this.seconds / 3600);
        let min = Math.floor((this.seconds - hrs * 3600) / 60);
        let sec = this.seconds % 60;

        this.display.innerText = `${padWithZero(hrs)}:${padWithZero(min)}:${padWithZero(sec)}`;
        this.seconds++;
    }
}

// Using the IIFE to pull it out of the global scope and also call it immediately.
(function (){
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
    clock.timer()
})();
