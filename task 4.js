const risingSeniorText = "Rising senior at Sathyabama University Studying BE Computer Science Engineering.";
let risingSeniorIndex = 0;

function typeRisingSeniorText() {
    if (risingSeniorIndex < risingSeniorText.length) {
        document.getElementById("rising-senior").innerHTML += risingSeniorText.charAt(risingSeniorIndex);
        risingSeniorIndex++;
        setTimeout(typeRisingSeniorText, getTypingSpeed()); 
    }
}

function getTypingSpeed() {
    return window.innerWidth <= 768 ? 120 : 60; 
}

function animateHomeSection(entries, observer) {
    entries.forEach((entry) => {
        const animateElements = entry.target.querySelectorAll('.animate');

        if (entry.isIntersecting) {
            const nameElement = entry.target.querySelector('h1');

            nameElement.style.animation = `zoomInFromRight 1s forwards`;

            nameElement.addEventListener('animationend', () => {
                risingSeniorIndex = 0;
                document.getElementById("rising-senior").innerHTML = '';

                typeRisingSeniorText();

                animateElements.forEach((item, index) => {
                    if (item !== nameElement && item.id !== 'rising-senior') {
                        item.style.animation = `fadeIn 1s forwards`;
                        item.style.animationDelay = `${index * 0.2}s`;
                    }
                });
            }, { once: true });
        } else {
            risingSeniorIndex = 0;
            document.getElementById("rising-senior").innerHTML = '';

            animateElements.forEach((item) => {
                item.style.animation = '';
                item.style.opacity = '0';
            });
        }
    });
}


const observerHome = new IntersectionObserver(animateHomeSection);
const homeSection = document.querySelector('#home');
observerHome.observe(homeSection);

document.addEventListener("DOMContentLoaded", function() {
    const skillBars = document.querySelectorAll('.progress-bar');
    const skillWidths = [80, 70, 55, 90, 75, 40];

    function animateSkillBars() {
        skillBars.forEach((bar, index) => {
            bar.style.width = '0%';

            setTimeout(() => {
                bar.style.width = skillWidths[index] + '%';
            }, 100);
        });
    }

    function resetSkillBars() {
        skillBars.forEach((bar) => {
            bar.style.width = '0%';
        });
    }

    function resetCircleProgress() {
        document.querySelectorAll('.circle-progress').forEach((circle) => {
            const radius = circle.querySelector('circle').r.baseVal.value;
            const circumference = 2 * Math.PI * radius;

            circle.querySelector('.progress').style.strokeDashoffset = circumference; 
        });
    }

    function animateCircleProgress() {
        document.querySelectorAll('.circle-progress').forEach((circle) => {
            const progress = circle.dataset.progress;
            const radius = circle.querySelector('circle').r.baseVal.value;
            const circumference = 2 * Math.PI * radius;

            circle.querySelector('.progress').style.strokeDasharray = `${circumference} ${circumference}`;
            const offset = circumference * (1 - progress / 100);
            setTimeout(() => {
                circle.querySelector('.progress').style.strokeDashoffset = offset; 
            }, 100);
        });
    }

    function checkIfInView(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                resetCircleProgress();
                animateCircleProgress();
            } else {
                resetSkillBars();
                resetCircleProgress();
            }
        });
    }

    const observer = new IntersectionObserver(checkIfInView, { threshold: 0.1 });
    const skillsSection = document.querySelector('#skills');
    observer.observe(skillsSection);
});

(function () {
    "use strict";

    var items = document.querySelectorAll(".timeline li");
    
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            } else {
                items[i].classList.remove("in-view");
            }
        }
    }

    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
})();

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const pagination = document.querySelector('.pagination');

for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlides();
    });
    pagination.appendChild(dot);
}

document.querySelector('.next').addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0; 
    }
    updateSlides();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; 
    }
    updateSlides();
});

function updateSlides() {
    const slideWidth = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${slideWidth}%)`;
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function animateContactDetails(entries, observer) {
    entries.forEach((entry) => {
        const contactDetails = entry.target.querySelectorAll('li');
        
        if (entry.isIntersecting) {
            contactDetails.forEach((item, index) => {
                if (index < 2) {
                    item.classList.add('slide-right');
                    item.style.animationDelay = `${index * 0.2}s`;
                } else if (index < 4) {
                    item.classList.add('slide-left');
                    item.style.animationDelay = `${(index - 2) * 0.2}s`;
                } else {
                    item.classList.add('slide-bottom');
                    item.style.animationDelay = `0.6s`;
                }
            });
        } else {
            contactDetails.forEach((item) => {
                item.classList.remove('slide-right', 'slide-left', 'slide-bottom');
                item.style.animationDelay = '';
                item.style.opacity = '0';
            });
        }
    });
}

const observer = new IntersectionObserver(animateContactDetails);
const contactSection = document.querySelector('.contactdetails');
observer.observe(contactSection);

window.addEventListener('resize', () => {
    updateSlides();
    adjustAnimationsForScreenSize(); 
});

function adjustAnimationsForScreenSize() {
    const width = window.innerWidth;
}

adjustAnimationsForScreenSize();


