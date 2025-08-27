document.addEventListener('DOMContentLoaded', () => {
  const numStars = 300;
  const starryBackground = document.querySelector('.starry-background');
  const fragment = document.createDocumentFragment();

  const pageHeight = document.body.scrollHeight; // Full page height

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * pageHeight}px`; // spread across full page
    star.style.animationDuration = `${Math.random() * 2 + 1}s`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    fragment.appendChild(star);
  }

  starryBackground.appendChild(fragment);
});
