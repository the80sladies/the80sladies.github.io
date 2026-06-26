// The 80s Ladies Club site JavaScript
// Handles mobile navigation, dynamic year, and subtle homepage polish.

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('#site-nav');
  const year = document.querySelector('#year');
  const header = document.querySelector('.site-header');

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.textContent = isOpen ? '×' : '☰';
    });
  }

  if (header) {
    const updateHeader = () => {
      header.classList.toggle('scrolled', window.scrollY > 24);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }
});
