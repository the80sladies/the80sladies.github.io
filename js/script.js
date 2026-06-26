// The 80s Ladies Club site JavaScript
// Handles mobile navigation, dynamic year, and subtle site polish.

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

  if (document.body.classList.contains('shop-page')) {
    const shopHeroCopy = document.querySelector('.shop-hero-copy');
    const shopHeroText = document.querySelector('.shop-hero-copy .page-copy');
    const shopHeroButtons = document.querySelector('.shop-hero-copy .button-row');
    const accessoriesButton = document.querySelector('a[href*="section_id=59007461"]');
    const accessoriesCard = accessoriesButton ? accessoriesButton.closest('.product-card') : null;
    const accessoriesImage = accessoriesCard ? accessoriesCard.querySelector('.product-image') : null;

    if (shopHeroCopy) {
      shopHeroCopy.style.textAlign = 'center';
      shopHeroCopy.style.display = 'grid';
      shopHeroCopy.style.justifyItems = 'center';
    }

    if (shopHeroText) {
      shopHeroText.style.marginLeft = 'auto';
      shopHeroText.style.marginRight = 'auto';
    }

    if (shopHeroButtons) {
      shopHeroButtons.style.justifyContent = 'center';
    }

    if (accessoriesImage) {
      accessoriesImage.style.backgroundImage = "linear-gradient(135deg, rgba(255,43,214,.22), rgba(0,229,255,.12)), url('images/v2-accessories-tote-mall.jpg')";
      accessoriesImage.style.backgroundSize = 'cover';
      accessoriesImage.style.backgroundRepeat = 'no-repeat';
      accessoriesImage.style.backgroundPosition = 'center';
    }
  }
});