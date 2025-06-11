// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
const icon = toggleBtn?.querySelector("i");

toggleBtn?.addEventListener("click", () => {
  document.body.classList.toggle("light");
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
});

// Section SPA navigation
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(".page-section");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.dataset.section;

    sections.forEach(section => {
      section.classList.toggle("hidden", section.id !== targetId);
    });
  });
});

// Burger menu toggle
const burger = document.getElementById("burger");
const navMenu = document.getElementById("nav-menu");

burger?.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
