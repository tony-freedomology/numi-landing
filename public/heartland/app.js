/* app.js — Heartland AI Strategy */

(function() {
  'use strict';

  // ===== THEME TOGGLE =====
  const toggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  let theme = 'light'; // Default to light
  root.setAttribute('data-theme', theme);
  updateToggleIcon();

  if (toggle) {
    toggle.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
      updateToggleIcon();
    });
  }

  function updateToggleIcon() {
    if (!toggle) return;
    toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    toggle.innerHTML = theme === 'dark'
      ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }

  // ===== QUESTION CARD TOGGLES =====
  document.querySelectorAll('.question-card').forEach(card => {
    card.addEventListener('click', () => {
      const wasOpen = card.classList.contains('is-open');
      
      // Close all cards in the same category
      const category = card.closest('.question-list');
      if (category) {
        category.querySelectorAll('.question-card.is-open').forEach(openCard => {
          openCard.classList.remove('is-open');
          openCard.setAttribute('aria-expanded', 'false');
        });
      }
      
      // Toggle clicked card
      if (!wasOpen) {
        card.classList.add('is-open');
        card.setAttribute('aria-expanded', 'true');
      }
    });

    // Keyboard support
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  // ===== FALLBACK SCROLL REVEAL (for browsers without scroll-driven animations) =====
  if (!CSS.supports('animation-timeline: scroll()')) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.clipPath = 'inset(0 0 0 0)';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.fade-in, .reveal-up').forEach(el => {
      el.style.opacity = '0';
      el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), clip-path 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      if (el.classList.contains('reveal-up')) {
        el.style.clipPath = 'inset(100% 0 0 0)';
      }
      observer.observe(el);
    });
  }

  // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();