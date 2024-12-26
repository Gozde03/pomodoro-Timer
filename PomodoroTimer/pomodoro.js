let minutes = 25;
let seconds = 0;
let isRunning = false;
let timer;
let currentMode = 'pomodoro';

        const minutesDisplay = document.getElementById('minutes');
        const secondsDisplay = document.getElementById('seconds');
        const startBtn = document.getElementById('startBtn');
        const pauseBtn = document.getElementById('pauseBtn');
        const resetBtn = document.getElementById('resetBtn');
        const shortBreakBtn = document.getElementById('shortBreakBtn');
        const longBreakBtn = document.getElementById('longBreakBtn');

        function updateDisplay() {
            minutesDisplay.textContent = String(minutes).padStart(2, '0');
            secondsDisplay.textContent = String(seconds).padStart(2, '0');
        }
        function showAlert() {
            let message = '';
            switch(currentMode) {
                case 'pomodoro':
                    message = 'Time to take a break!';
                    break;
                case 'shortBreak':
                    message = 'Short break is over! Time to work!';
                    break;
                case 'longBreak':
                    message = 'Long break is over! Time to work!';
                    break;
            }
            alert(message);
        }
        function startTimer() {
            if (!isRunning) {
                isRunning = true;
                timer = setInterval(() => {
                    if (seconds === 0) {
                        if (minutes === 0) {
                            clearInterval(timer);
                            isRunning = false;
                            showAlert();
                            return;
                        }
                        minutes--;
                        seconds = 59;
                    } else {
                        seconds--;
                    }
                    updateDisplay();
                }, 1000);
            }
        }


        function pauseTimer() {
            clearInterval(timer);
            isRunning = false;
        }

        function resetTimer() {
            clearInterval(timer);
            isRunning = false;
            minutes = 25;
            seconds = 0;
            updateDisplay();
        }

        function setShortBreak() {
            clearInterval(timer);
            isRunning = false;
            currentMode = 'shortBreak';
            minutes = 5;
            seconds = 0;
            updateDisplay();
        }

        function setLongBreak() {
            clearInterval(timer);
            isRunning = false;
            currentMode = 'longBreak';
            minutes = 15;
            seconds = 0;
            updateDisplay();
        }

        startBtn.addEventListener('click', startTimer);
        pauseBtn.addEventListener('click', pauseTimer);
        resetBtn.addEventListener('click', resetTimer);
        shortBreakBtn.addEventListener('click', setShortBreak);
        longBreakBtn.addEventListener('click', setLongBreak);

        updateDisplay();


