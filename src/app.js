var clock = document.getElementById("clock");

function updateClock() {
var now = new Date();

// Get the current time and format it
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();
var ampm = "AM";

// Add AM/PM indicator
if (hours >= 12) {
ampm = "PM";
hours -= 12;
}

// Add leading zeroes if needed
if (hours < 10) {
hours = "0" + hours;
}
if (minutes < 10) {
minutes = "0" + minutes;
}

// Get the current month and year
var monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
var month = monthNames[now.getMonth()];
var year = now.getFullYear();

// Update the clock with the current time and date
clock.innerHTML = hours + ":" + minutes + ":" + seconds + " " + ampm + " " + month + " " + now.getDate() + ", " + year;
}

// Call the updateClock function every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);