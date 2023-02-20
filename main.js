let startButton = document.getElementById("start")
let startEvent  = startButton.addEventListener("click", startcountdown)
let countdownInterval;
let countdownInterval2;
let countdownInterval3;
let durationNumber = document.getElementById("duration_number");

// start 25min Countdown--

function startcountdown(){
    clearInterval(countdownInterval);
    clearInterval(countdownInterval2);
    clearInterval(countdownInterval3); 

    document.getElementById('start').style.display = 'none';
    document.getElementById('clock').style.color = 'rgb(48, 209, 36)';
    // Set the countdown start time
    let countDownDate = new Date().getTime() + (25 * 60 * 1000);

    // Update the countdown every second
      countdownInterval = setInterval(function() {

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
        document.getElementById("clock").innerHTML = "done 🏅";
        document.getElementById('start').style.display = 'block';
        durationNumber.innerHTML = parseInt(durationNumber.innerHTML) + 1;
        if (parseInt(durationNumber.innerHTML) == 5) {
            durationNumber.style.color = 'rgb(48, 209, 36)';
          
          }

    }
    }, 1000);
 
     //reset Button block
    let resetButton = document.getElementById("reset")
    let resetEvent = resetButton.addEventListener("click", clearCountdown)
    

    function clearCountdown() {
    // Clear the countdown interval
     clearInterval(countdownInterval); 
     // Reset the clock display to the original value
    document.getElementById("clock").innerHTML = "25:00";
    

    document.getElementById('start').style.display = 'block';

    }
}



// short Pause block--

let shortPause = document.getElementById("sPause")
let shortPauseEvent = shortPause.addEventListener("click", startShortPause)

function startShortPause(){
    clearInterval(countdownInterval);
    clearInterval(countdownInterval2);
    clearInterval(countdownInterval3); 
 

     document.getElementById('clock').style.color = 'rgb(228, 216, 42)';
    // Set the countdown start time
    let countDownDate = new Date().getTime() + (5 * 60 * 1000);

    // Update the countdown every second
      countdownInterval2 = setInterval(function() {

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
        clearInterval(countdownInterval2);
        document.getElementById("clock").innerHTML = "back to work";

    }
    }, 1000);

    let resetButton = document.getElementById("reset")
    let resetEvent = resetButton.addEventListener("click", clearCountdown)
    // reset button block


function clearCountdown() {
    // Clear the countdown interval
    clearInterval(countdownInterval2); 

     // Reset the clock display to the original value
     document.getElementById("clock").innerHTML = "5:00";
  
  }
}



// long pause block--

let LongPause = document.getElementById("lPause")
let LongPauseEvent = LongPause.addEventListener("click", startLongPause)


function startLongPause(){
    clearInterval(countdownInterval);
    clearInterval(countdownInterval2);
    clearInterval(countdownInterval3); 
     

     document.getElementById('clock').style.color = 'rgb(228, 216, 42)';
    // Set the countdown start time
    let countDownDate = new Date().getTime() + (10 * 60 * 1000);

    // Update the countdown every second
     countdownInterval3 = setInterval(function() {

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
        clearInterval(countdownInterval3);
        document.getElementById("clock").innerHTML = "back to work";

    }
    }, 1000);
    // reset button block
    let resetButton = document.getElementById("reset")
    let resetEvent = resetButton.addEventListener("click", clearCountdown)



function clearCountdown() {
    // Clear the countdown interval
    clearInterval(countdownInterval3); 

     // Reset the clock display to the original value
     document.getElementById("clock").innerHTML = "10:00";
  }
}
