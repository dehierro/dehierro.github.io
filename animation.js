document.addEventListener('DOMContentLoaded', function() {
  animateText();
});

function animateText() {
  const nameElement = document.getElementById('name');
  let opacity = 0;
  let fadeIn = true;

  setInterval(() => {
    if (fadeIn) {
      opacity += 0.05;
      if (opacity >= 1) {
        fadeIn = false;
      }
    } else {
      opacity -= 0.05;
      if (opacity <= 0) {
        fadeIn = true;
      }
    }
    nameElement.style.opacity = opacity;
  }, 100);
}
