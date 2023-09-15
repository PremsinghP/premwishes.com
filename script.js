// Set the date of Aliya's birthday (September 16, 2023, at 00:00:00 UTC)
const birthdayDate = new Date("2023-09-16T00:00:00").getTime();

// Function to update the countdown
function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeLeft = birthdayDate - currentDate;

    if (timeLeft <= 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "<p>Happy Birthday Aliya!</p>";
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = formatTime(days);
        document.getElementById("hours").innerHTML = formatTime(hours);
        document.getElementById("minutes").innerHTML = formatTime(minutes);
        document.getElementById("seconds").innerHTML = formatTime(seconds);
    }
}

// Update the countdown immediately
updateCountdown();

// Check and update the countdown every second
const countdown = setInterval(updateCountdown, 1000);

// Function to format time as "00" for single digits
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
