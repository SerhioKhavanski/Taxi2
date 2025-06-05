function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }
  
  const whyContent = document.querySelector('.why-content');
  const whyPoints = whyContent.querySelectorAll('.why-content-point');
  
  let whyAnimated = false;
  
  window.addEventListener('scroll', () => {
    if (!whyAnimated && isElementInViewport(whyContent)) {
      whyAnimated = true;
      whyPoints.forEach((point, i) => {
        setTimeout(() => {
          point.classList.add('show');
        }, i * 300);
      });
    }
  });