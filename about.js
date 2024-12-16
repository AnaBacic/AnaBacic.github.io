document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".about-image img");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    if (images.length === 0) {
        console.error("Nijedna slika nije pronađena!");
        return;
    }

    // Trenutni indeks
    let currentIndex = 0;

    // Funkcija za prikaz slike
    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove("active");
            img.style.display = "none";
        });

        images[index].classList.add("active");
        images[index].style.display = "block";
    }

    leftArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    rightArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    showImage(currentIndex);
});