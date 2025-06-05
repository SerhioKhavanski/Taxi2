const sections = document.querySelectorAll('[id]');
const navLinks = document.querySelectorAll('.menu-fixed a');

function highlightCurrentSection() {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  // Снимаем активные классы
  navLinks.forEach(link => {
    link.classList.remove("active");

    // Назначаем активный, если id совпал
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });

  // === ДОПОЛНИТЕЛЬНО ===
  // Если проскроллил до самого низа страницы — подсвети "Контакты"
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5) {
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#footer") {
        link.classList.add("active");
      }
    });
  }
}

window.addEventListener("scroll", highlightCurrentSection);