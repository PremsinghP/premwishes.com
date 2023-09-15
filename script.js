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
});
