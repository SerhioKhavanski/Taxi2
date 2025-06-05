const mapContainer = document.querySelector('.map-container');

mapContainer.addEventListener('click', () => {
  mapContainer.classList.add('active');
});

// Чтобы убрать активность (например, когда курсор уходит с карты), можно так:
mapContainer.addEventListener('mouseleave', () => {
  mapContainer.classList.remove('active');
});