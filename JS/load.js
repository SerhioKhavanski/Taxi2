
document.addEventListener("DOMContentLoaded", () => {
    const points = document.querySelectorAll(".header-main-info");
    
    points.forEach((point, index) => {
      setTimeout(() => {
        point.classList.add("visible");
      }, index * 300); 
    });
  });