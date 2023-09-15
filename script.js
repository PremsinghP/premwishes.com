function updateCountdown() {
    const currentDate = new Date();
    const birthdayDate = new Date(currentDate.getFullYear(), 8, 16); // September is month 8 (0-based index)

    // Check if today is the birthday
    if (currentDate.getMonth() === 8 && currentDate.getDate() === 16) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "<p>Happy Birthday Aliya!</p>";
    } else if (currentDate > birthdayDate) {
        // If birthday has passed this year, set it for next year
        birthdayDate.setFullYear(currentDate.getFullYear() + 1);
    }

    const timeLeft = birthdayDate - currentDate;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = formatTime(days);
    document.getElementById("hours").textContent = formatTime(hours);
    document.getElementById("minutes").textContent = formatTime(minutes);
    document.getElementById("seconds").textContent = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

updateCountdown();
const countdown = setInterval(updateCountdown, 1000);
