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
    const shopHeroEyebrow = document.querySelector('.shop-hero-copy .eyebrow');
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

    if (shopHeroEyebrow) {
      shopHeroEyebrow.style.fontSize = 'clamp(1rem, 2.1vw, 1.45rem)';
      shopHeroEyebrow.style.letterSpacing = '0.2em';
      shopHeroEyebrow.style.textShadow = 'var(--shadow-green)';
      shopHeroEyebrow.style.marginBottom = '1rem';
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

  if (document.body.classList.contains('videos-page')) {
    const platformIntro = Array.from(document.querySelectorAll('.section-heading p')).find((paragraph) =>
      paragraph.textContent.trim() === 'The videos live across the main social channels. The website is the official hub that ties everything together.'
    );

    if (platformIntro) {
      platformIntro.textContent = 'Follow the big hair trail across YouTube, TikTok, and Instagram — then come back here when you want the whole 80s Ladies Club universe in one neon-lit place.';
    }

    const featuredLaneButtons = Array.from(document.querySelectorAll('.feature-split .button-row')).find((row) =>
      row.querySelector('a[href*="youtube.com/channel"]') && row.querySelector('a[href*="tiktok.com/@the.80s.ladies"]')
    );

    if (featuredLaneButtons && !featuredLaneButtons.querySelector('a[href*="instagram.com/official80sladies"]')) {
      const instagramButton = document.createElement('a');
      instagramButton.className = 'btn secondary';
      instagramButton.href = 'https://www.instagram.com/official80sladies';
      instagramButton.textContent = 'Open Instagram';
      featuredLaneButtons.appendChild(instagramButton);
    }

    const featuredImage = Array.from(document.querySelectorAll('.feature-split .image-slot')).find((slot) =>
      slot.getAttribute('style')?.includes('v2-rock-concert-ladies.jpg')
    );

    if (featuredImage) {
      featuredImage.style.cursor = 'pointer';
      featuredImage.setAttribute('role', 'link');
      featuredImage.setAttribute('tabindex', '0');
      featuredImage.setAttribute('aria-label', 'Watch this 80s Ladies TikTok post');
      const openFeaturedTikTok = () => {
        window.location.href = 'https://www.tiktok.com/@the.80s.ladies/video/7651281118699851039';
      };
      featuredImage.addEventListener('click', openFeaturedTikTok);
      featuredImage.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openFeaturedTikTok();
        }
      });
    }

    const playlistLinks = {
      'Big Hair Emergencies': {
        url: 'https://www.youtube.com/watch?v=q0APn6bj6bQ&list=PLhWH_tOZ8lWLMjh0X0FH0jM36Xagm_OoQ',
        label: 'Watch Big Hair Playlist',
        image: 'images/v2-video-shoulder-pads-gone-wild.jpg',
        position: 'center'
      },
      'Neon Fashion Moments': {
        url: 'https://www.youtube.com/watch?v=LJP0NV4eMcw&list=PLhWH_tOZ8lWIDY3bHovmVXf2eAs8sYK8s',
        label: 'Watch Fashion Playlist'
      },
      'Boombox & Cassette Energy': {
        url: 'https://www.youtube.com/watch?v=_m2uuKvPdyM&list=PLhWH_tOZ8lWLY5jnHIk86KeXN8fxcOh9t',
        label: 'Watch Shoulder Pads Playlist',
        newTitle: 'Shoulder Pads Gone Wild',
        newCopy: 'Oversized shoulder pads, bold outfits, dramatic mall entrances, and the kind of fashion confidence only the 80s could get away with.',
        image: 'images/v2-video-shoulder-pads-mall.jpg',
        position: 'center'
      },
      'Mall, Arcade & Food Court Nostalgia': {
        url: 'https://www.youtube.com/watch?v=4xm4D6w88KA&list=PLhWH_tOZ8lWL_0aaE0e0XZJpUpjNP2iHQ',
        label: 'Watch Rockin’ Playlist',
        newTitle: 'Rockin’ Through the 80s',
        newCopy: 'Big hair, loud guitars, neon lights, stage energy, and the kind of rock-and-roll attitude that made the 80s impossible to ignore.',
        image: 'images/v2-video-rockin-through-80s.jpg',
        position: 'center'
      },
      '80s Ladies Thought of the Day': {
        url: 'https://www.youtube.com/watch?v=JSdym55iuw4&list=PLhWH_tOZ8lWIJaaVsiuSd4BfTRS0EjFZ3',
        label: 'Watch Phone Cord Playlist',
        newTitle: 'Phone Cord Emergencies',
        newCopy: 'Tangled cords, dramatic calls, kitchen-wall phones, and the kind of 80s communication chaos only a landline could create.',
        image: 'images/v2-video-phone-cord-emergencies.jpg',
        position: 'center'
      },
      'Retro Product Features': {
        url: 'https://www.tiktok.com/@the.80s.ladies/video/7652886761936260383',
        label: 'Watch Product Feature'
      }
    };

    document.querySelectorAll('.video-lane-card').forEach((card) => {
      const title = card.querySelector('h3');
      const copy = card.querySelector('p');
      const frame = card.querySelector('.video-frame');
      if (!title) return;

      const setup = playlistLinks[title.textContent.trim()];
      if (!setup) return;

      if (setup.newTitle) {
        title.textContent = setup.newTitle;
      }

      if (setup.newCopy && copy) {
        copy.textContent = setup.newCopy;
      }

      if (setup.image && frame) {
        frame.style.backgroundImage = `linear-gradient(135deg, rgba(255,43,214,.28), rgba(0,229,255,.14)), url('${setup.image}')`;
        frame.style.backgroundSize = 'cover';
        frame.style.backgroundPosition = setup.position || 'center';
      }

      card.style.cursor = 'pointer';
      card.setAttribute('role', 'link');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', setup.label);

      if (!card.querySelector('.video-category-button')) {
        const button = document.createElement('a');
        button.className = 'btn secondary video-category-button';
        button.href = setup.url;
        button.textContent = setup.label;
        button.style.marginTop = '1rem';
        button.addEventListener('click', (event) => event.stopPropagation());
        card.appendChild(button);
      }

      const openPlaylist = () => {
        window.location.href = setup.url;
      };

      card.addEventListener('click', openPlaylist);
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openPlaylist();
        }
      });
    });
  }
});