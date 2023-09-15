document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("birthdayForm");
    const wishesList = document.getElementById("wishesList");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get user input
        const nameInput = document.getElementById("name");
        const messageInput = document.getElementById("message");

        const name = nameInput.value;
        const message = messageInput.value;

        // Create a new birthday wish element
        const wishElement = document.createElement("div");
        wishElement.classList.add("birthday-wish");
        wishElement.innerHTML = `
            <strong>${name} says:</strong>
            <p>${message}</p>
        `;

        // Add the wish to the list
        wishesList.appendChild(wishElement);

        // Clear the form inputs
        nameInput.value = "";
        messageInput.value = "";
    });

    // Function to clear birthday wishes after 24 hours
    function clearWishes() {
        wishesList.innerHTML = ""; // Clear the wishes list
    }

    // Set a timer to clear wishes after 24 hours (24 * 60 * 60 * 1000 milliseconds)
    setInterval(clearWishes, 24 * 60 * 60 * 1000);
});
