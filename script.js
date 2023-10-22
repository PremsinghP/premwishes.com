
function updateCountdown() {
    const currentDate = new Date();
    const birthdayDate = new Date(currentDate.getFullYear(), 10, 23);

    // Check if today is the birthday
    if (currentDate.getMonth() === 10 && currentDate.getDate() === 23) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "<p>Happy Birthday Padya MounikaJeevan (Jerry) & Chota Jerry Ga!</p>";
    } else if (currentDate > birthdayDate) {
        // If birthday has passed this year, set it for next year
        birthdayDate.setFullYear(currentDate.getFullYear() + 1);
    }

    const timeLeft = birthdayDate - currentDate;
    if (timeLeft <= 0) {
        // Birthday is today or in the past
        document.getElementById("countdown").innerHTML = `<p>Birthday was ${Math.abs(daysBetween(currentDate, birthdayDate))} days ago</p>`;
    } else {
        // Countdown to birthday
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = formatTime(days);
        document.getElementById("hours").textContent = formatTime(hours);
        document.getElementById("minutes").textContent = formatTime(minutes);
        document.getElementById("seconds").textContent = formatTime(seconds);
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function daysBetween(date1, date2) {
    // Calculate the difference in days between two dates
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    return Math.floor(Math.abs((date1 - date2) / oneDay));
}

updateCountdown();
const countdown = setInterval(updateCountdown, 1000);
