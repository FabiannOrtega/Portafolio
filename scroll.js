document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
      } else {
        entry.target.classList.remove("reveal");
      }
    });
  }, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  });

  document.querySelectorAll(".skill-card, .servicio-item").forEach(el => {
    observer.observe(el);
  });
});