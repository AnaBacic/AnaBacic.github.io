document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Sprječava osvježavanje stranice

    // Pronađi sekciju u koju ćeš dodati poruku
    const formSection = document.querySelector(".contact-section");

    // Provjeri postoji li već poruka i ukloni je
    const existingMessage = document.querySelector(".success-message");
    if (existingMessage) {
        existingMessage.remove();
    }

    // Kreiraj novu poruku
    const successMessage = document.createElement("p");
    successMessage.textContent = "Poruka je uspješno poslana!";
    successMessage.className = "success-message";
    successMessage.style.color = "#28a745"; /* Zelena boja */
    successMessage.style.fontWeight = "bold";
    successMessage.style.marginTop = "20px";

    // Dodaj poruku ispod forme
    formSection.appendChild(successMessage);

    // Očisti formu
    document.querySelector("form").reset();

    // Automatski ukloni poruku nakon 3 sekunde
    setTimeout(() => successMessage.remove(), 3000);
});



