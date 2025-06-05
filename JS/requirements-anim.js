function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }
  
  const requirementsBlocks = document.querySelectorAll('.requirements-info-points');
  
  // Для каждого блока своё состояние "анимировался или нет"
  const animatedFlags = new Array(requirementsBlocks.length).fill(false);
  
  window.addEventListener('scroll', () => {
    requirementsBlocks.forEach((block, index) => {
      if (!animatedFlags[index] && isElementInViewport(block)) {
        animatedFlags[index] = true; // Помечаем, что анимация запущена для этого блока
  
        const points = block.querySelectorAll('.requirements-info-point');
  
        points.forEach((point, i) => {
          setTimeout(() => {
            point.classList.add('active-point');  // Твой класс анимации
          }, i * 300);
        });
      }
    });
  });
  
  // Можно сразу проверить, если блоки изначально видны:
  requirementsBlocks.forEach((block, index) => {
    if (!animatedFlags[index] && isElementInViewport(block)) {
      animatedFlags[index] = true;
      const points = block.querySelectorAll('.requirements-info-point');
      points.forEach((point, i) => {
        setTimeout(() => {
          point.classList.add('active-point');
        }, i * 300);
      });
    }
  });