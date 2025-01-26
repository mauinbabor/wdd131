// Dynamically Update Footer
document.getElementById('2025').textContent = new Date().getFullYear();
document.getElementById('lastModified:01/23/2025').textContent = document.lastModified;

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.textContent = navMenu.classList.contains('active') ? '✖' : '☰';
});
