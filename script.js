//your JS code here. If required.
// Function to update the timer
function updateTimer() {
    var timerElement = document.getElementById('timer');
    var now = new Date();
    var dateTimeString = now.toLocaleString();
    timerElement.textContent = dateTimeString;
}


updateTimer();
setInterval(updateTimer, 1000);

