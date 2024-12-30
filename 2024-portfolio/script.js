const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

// Toggle the hamburger menu
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Smooth scrolling and close menu on click
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
    const target = item.getAttribute('href');
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
