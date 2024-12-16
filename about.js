document.addEventListener("DOMContentLoaded", () => {
    // Pronalazak slika i strelica
    const images = document.querySelectorAll(".about-image img");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    // Provjera je li pronađeno barem jedna slika
    if (images.length === 0) {
        console.error("Nijedna slika nije pronađena!");
        return;
    }

    // Trenutni indeks
    let currentIndex = 0;

    // Funkcija za prikaz slike
    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove("active"); // Ukloni aktivnu klasu sa svih slika
            img.style.display = "none"; // Sakrij sve slike
        });

        // Prikaži samo odabranu sliku
        images[index].classList.add("active");
        images[index].style.display = "block";
    }

    // Navigacija pomoću strelica
    leftArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Kružna navigacija
        showImage(currentIndex);
    });

    rightArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length; // Kružna navigacija
        showImage(currentIndex);
    });

    // Prikaz prve slike pri učitavanju stranice
    showImage(currentIndex);
});