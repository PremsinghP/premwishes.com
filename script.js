function updateCountdown() {
    const currentDate = new Date();
    let birthdayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);

    // Check if today is the birthday
    if (currentDate.getMonth() === 10 && currentDate.getDate() === 23) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "<p>Happy Birthday Padya MounikaJeevan (Jerry) & Chota Jerry Ga!</p>";
    } else if (currentDate > birthdayDate) {
        // If birthday has passed this year, set it for next year
        birthdayDate = new Date(currentDate.getFullYear() + 23, 10, 23);
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

updateCountdown();
const countdown = setInterval(updateCountdown, 1000);
