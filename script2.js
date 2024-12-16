document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const formSection = document.querySelector(".contact-section");

    const existingMessage = document.querySelector(".success-message");
    if (existingMessage) {
        existingMessage.remove();
    }

    const successMessage = document.createElement("p");
    successMessage.textContent = "Poruka je uspješno poslana!";
    successMessage.className = "success-message";
    successMessage.style.color = "#28a745";
    successMessage.style.fontWeight = "bold";
    successMessage.style.marginTop = "20px";

    formSection.appendChild(successMessage);

    document.querySelector("form").reset();

    setTimeout(() => successMessage.remove(), 3000);
});



