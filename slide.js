window.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".slideshow-image");
    const descriptions = document.querySelectorAll(".slideshow-description");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(function (image) {
            image.classList.remove("active");
        });

        descriptions.forEach(function (description) {
            description.style.display = "none";
        });

        images[index].classList.add("active");
        descriptions[index].style.display = "block";
    }

    function nextImage() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }

        showImage(currentIndex);
    }

    function startSlideshow() {
        showImage(currentIndex);
        setInterval(nextImage, 6000);
    }

    prevBtn.addEventListener("click", prevImage);
    nextBtn.addEventListener("click", nextImage);

    startSlideshow();
});