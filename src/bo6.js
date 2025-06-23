const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".mod-card").forEach((card) => {
  observer.observe(card);
});
