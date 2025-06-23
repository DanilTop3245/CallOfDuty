const slides = document.querySelectorAll(".slide");
const titles = ["HAND CANNON", "SEARCH AND DESTROY", "DOOR BARRICADE"];

let current = 0;

function updateSlides() {
  slides.forEach((slide, i) => {
    slide.className = "slide"; // reset

    if (i === current) {
      slide.classList.add("center");
    } else if (i === (current - 1 + slides.length) % slides.length) {
      slide.classList.add("left");
    } else if (i === (current + 1) % slides.length) {
      slide.classList.add("right");
    }
  });

  document.getElementById("title").textContent = titles[current];
}

document.querySelector(".nav.left").addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  updateSlides();
});

document.querySelector(".nav.right").addEventListener("click", () => {
  current = (current + 1) % slides.length;
  updateSlides();
});

updateSlides();
