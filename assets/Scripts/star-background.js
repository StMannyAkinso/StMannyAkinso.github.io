document.addEventListener('DOMContentLoaded', () => {
  const numStars = 300; // Reduced number of stars for better performance
  const starryBackground = document.querySelector('.starry-background');
  const fragment = document.createDocumentFragment(); // Use a document fragment for better performance

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    fragment.appendChild(star);
  }

  starryBackground.appendChild(fragment); // Append all stars at once
});
