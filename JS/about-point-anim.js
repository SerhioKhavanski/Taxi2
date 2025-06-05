function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }
  
  const aboutPoints = document.querySelector('.about-points');
  const points = aboutPoints.querySelectorAll('.about-point');
  
  let animated = false; // чтобы анимация была один раз
  
  window.addEventListener('scroll', () => {
    if (!animated && isElementInViewport(aboutPoints)) {
      animated = true;
      points.forEach((point, i) => {
        setTimeout(() => {
          point.classList.add('visible');
        }, i * 300); // задержка по 300мс между элементами
      });
    }
  });