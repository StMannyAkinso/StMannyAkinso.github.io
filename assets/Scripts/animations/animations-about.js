document.addEventListener("DOMContentLoaded", () => {
  
  // Animate left section
  gsap.from("#left-section", {
    duration: 1.5,
    x: -50,
    opacity: 0,
    ease: "power2.out",
  });

  // Animate right section
  gsap.from("#right-section", {
    duration: 1.5,
    x: 50,
    opacity: 0,
    ease: "power2.out",
  });
});
