document.addEventListener("DOMContentLoaded", () => {
  // Animate header
  gsap.from("header", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out",
  });

  // Animate main content
  gsap.from("main > h1, main > p", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out",
  });
});