const navBtnContainer = document.querySelector(".btn-container");

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
    let slideWidth = sliderPictures?.querySelector(".slider-picture")?.offsetWidth + 20;
    const totalPictures = sliderPictures.children.length;

    let currentIndex = 0;
    let prevIndex;

    window.addEventListener("resize", () => slideWidth = sliderPictures?.querySelector(".slider-picture")?.offsetWidth + 20);

    buttonRight.addEventListener("click", () => {
        sliderPictures.classList.add("sliding-transition");
        prevIndex = currentIndex;
        currentIndex = (currentIndex + 1) % totalPictures;
        sliderPictures.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    });

    buttonLeft.addEventListener("click", () => {
        prevIndex = currentIndex;
        currentIndex = (currentIndex - 1 + totalPictures) % totalPictures;
        sliderPictures.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    });
})

// slider animation ends here

// svg settings starts here
const svg = document.querySelector("svg.squiggle");
const path = svg.querySelector("path");

const scroll = () => {
    const distance = window.scrollY;
    const totalDistance = svg.clientHeight - window.innerHeight;

    const percentage = distance / totalDistance;

    const pathLength = path.getTotalLength();

    path.style.strokeDasharray = `${pathLength}`;
    path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;
};
scroll();
window.addEventListener("scroll", scroll);
// svg settings ends here

if (navBtnContainer) {
    window.addEventListener("scroll", function() {
        let isFirstScreen = !navBtnContainer.classList.contains("short-nav"); 

        if (window.scrollY >= 250 && isFirstScreen) {
            isFirstScreen = false;
            navBtnContainer.classList.add("short-nav");
        }
    
        if (window.scrollY < 250 && !isFirstScreen) {
            isFirstScreen = true;
            navBtnContainer.classList.remove("short-nav");
        }
    });
}
