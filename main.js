


function startcountdown(){
    document.getElementById('start').style.display = 'none';
    document.getElementById('clock').style.color = 'rgb(48, 209, 36)';
    // Set the countdown start time
    let countDownDate = new Date().getTime() + (25 * 60 * 1000);

    // Update the countdown every second
    let countdownInterval = setInterval(function() {

    // Get the current time
    let now = new Date().getTime();

    // Calculate the time remaining
    let timeRemaining = countDownDate - now;

    // Calculate minutes and seconds
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Add leading zero if seconds is less than 10
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Display the time remaining
    document.getElementById("clock").innerHTML = minutes + ":" + seconds;

    // If the countdown is finished, display "Time's up!" and stop the countdown
    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("clock").innerHTML = "Fertig 🏅";
        document.getElementById('start').style.display = 'block';
    }
    }, 1000);
}



function clearCountdown() {
    // Clear the countdown interval
    clearInterval(countdownInterval);
  
    // Reset the countdown start time to the original value
    countDownDate = new Date().getTime() + (25 * 60 * 1000);
  
    // Reset the clock display to the original value
    document.getElementById("timer").innerHTML = "25:00";
  }


let startButton = document.getElementById("start")
let startEvent  = startButton.addEventListener("click", startcountdown)


let resetButton = document.getElementById("reset")
let resetEvent = resetButton.addEventListener("click", clearCountdown)
