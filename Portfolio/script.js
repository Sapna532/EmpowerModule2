// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    mobileNav.classList.remove('active');
  });
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});