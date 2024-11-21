const accordionItems = document.querySelectorAll(".accordion-item");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const setAccordionStartState = () => {
    const activeContent = document.querySelectorAll('.accordion__content.active');
    if (activeContent.length) {
        activeContent.forEach((el) => {
            el.style.transition = 'none';
            el.style.maxHeight = '100%';
            setTimeout(() => {
                el.style.transition = null;
                el.style.maxHeight = el.scrollHeight + 'px';
            }, 300);
        });
    }
};

const updateActiveAccordion = () => {
    const activeContent = document.querySelectorAll('.accordion__content.active');
    if (activeContent.length) {
        activeContent.forEach((el) => {
            el.style.transition = 'none';
            el.style.maxHeight = el.scrollHeight + 'px';
            setTimeout(() => {
                el.style.transition = null;
            }, 300);
        });
    }
};

const initAccordionAction = (accordion) => {
    const btn = accordion.children[0];
    const content = accordion.children[1];
    const parent = accordion.closest('.accordion__content');
    const selfClosing = document.querySelectorAll('.self-closing');

    btn.addEventListener('click', (e) => {

        e.preventDefault();
        btn.blur();
        const maxHeight = content.style.maxHeight;
        if (maxHeight) {
            content.style.maxHeight = null;
            btn.classList.remove('active');
            content.classList.remove('active');

        } else {
            if (selfClosing.length) {
                selfClosing.forEach((item) => {
                    item.children[0].classList.remove('active');
                    item.children[1].classList.remove('active');
                    item.children[1].removeAttribute('style');
                });
            }

            content.style.maxHeight = content.scrollHeight + 'px';
            btn.classList.add('active');
            content.classList.add('active');


        }

        if (parent) {
            parent.style.maxHeight = parent.scrollHeight + content.scrollHeight + 'px';
        }
    });
};

const initAccordion = () => {
    
    const accordions = document.querySelectorAll('.accordion');
    console.log("11", accordions)
    if (accordions.length) {
        setAccordionStartState();
        window.addEventListener('resize', updateActiveAccordion);
        accordions.forEach((accordion) => initAccordionAction(accordion));
    }
};

initAccordion();

// slider animation starts here
const sliderPictures = document.querySelector(".slider-pictures");
const buttonLeft = document.getElementById("button-left");
const buttonRight = document.getElementById("button-right");

let currentIndex = 0;
let prevIndex;
const pictures = document.querySelectorAll(".slider-picture");

const totalPictures = Object.keys(pictures).length;

const imageWidth = 520;

buttonRight.addEventListener("click", () => {
    sliderPictures.classList.add("sliding-transition");
    prevIndex = currentIndex;
    currentIndex = (currentIndex + 1) % totalPictures;
    sliderPictures.transform = `translateX(-${imageWidth}px)`;
    setTimeout(() => {
        sliderPictures.appendChild(pictures[prevIndex]);
        sliderPictures.classList.remove("sliding-transition");
        sliderPictures.style.transform = "";
    }, 500);
});

buttonLeft.addEventListener("click", () => {
    prevIndex = currentIndex;
    currentIndex = (currentIndex - 1 + totalPictures) % totalPictures;
    sliderPictures.transform = `translateX(-${imageWidth}px)`;
    sliderPictures.insertBefore(pictures[currentIndex], sliderPictures.firstChild);
    setTimeout(() => {
        sliderPictures.style.transform = "";
        sliderPictures.classList.add("sliding-transition");
    }, 10);
    setTimeout(() => {
        sliderPictures.classList.remove("sliding-transition");
    }, 490);
});
// slider animation ends here

