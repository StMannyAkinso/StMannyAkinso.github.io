document.addEventListener("DOMContentLoaded", () => {
  // Animate header
  gsap.from("header", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out",
  });

  // Animate main content
  gsap.from("main > div", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out",
  });

  // Animate social media links
  gsap.from(".fab", {
    duration: 1,
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out(1.7)",
  });
});
