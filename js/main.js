const accordionItems = document.querySelectorAll(".accordion-item");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// slider animation starts here

const sliderPicturesList = document.querySelectorAll(".slider-pictures");

sliderPicturesList.forEach((sliderPictures) => {
    const buttonLeft = sliderPictures.nextElementSibling.querySelector(".button-left");
    const buttonRight = sliderPictures.nextElementSibling.querySelector(".button-right");
    const slideWidth = sliderPictures?.querySelector(".slider-picture")?.offsetWidth + 20;
    const totalPictures = sliderPictures.children.length;

    let currentIndex = 0;
    let prevIndex;

    buttonRight.addEventListener("click", () => {
        sliderPictures.classList.add("sliding-transition");
        prevIndex = currentIndex;
        currentIndex = (currentIndex + 1) % totalPictures;
        console.log("currentIndex", currentIndex)
        sliderPictures.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    });

    buttonLeft.addEventListener("click", () => {
        prevIndex = currentIndex;
        currentIndex = (currentIndex - 1 + totalPictures) % totalPictures;
        sliderPictures.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    });
})

// slider animation ends here

