// Set the date of your birthday
const birthdayDate = new Date("2023-12-31T00:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(function() {
    const currentDate = new Date().getTime();
    const timeLeft = birthdayDate - currentDate;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = formatTime(days);
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("minutes").innerHTML = formatTime(minutes);
    document.getElementById("seconds").innerHTML = formatTime(seconds);

    // If the countdown is over, display a message
    if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "<p>Happy Birthday!</p>";
    }
}, 1000);

// Function to format time as "00" for single digits
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
