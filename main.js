/**
 * FutureXcel Technologies - Main JavaScript
 * Centralized functionality for all pages
 */

(function() {
  'use strict';

  // ========== UTILITY FUNCTIONS ==========
  const normalizePath = (href) => {
    if (!href) return '';
    const [path] = href.split('#');
    if (path === '' || path === '/' || path === window.location.origin + '/') {
      return 'index.html';
    }
    return path.split('/').pop();
  };

  // ========== THEME TOGGLE ==========
  function initThemeToggle() {
    const THEME_KEY = 'fx-theme';
    const themeBtn = document.getElementById('themeToggle');
    if (!themeBtn) return;

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    const applyTheme = (mode) => {
      const isDark = mode === 'dark';
      const root = document.documentElement;
      
      root.classList.toggle('theme-dark', isDark);
      root.style.colorScheme = isDark ? 'dark' : 'light';
      root.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
      
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) {
        meta.setAttribute('content', isDark ? '#0b1220' : '#0d1b2a');
      }
      
      const nav = document.querySelector('nav.navbar');
      if (nav) {
        nav.classList.toggle('navbar-dark', isDark);
        nav.classList.toggle('navbar-light', !isDark);
      }
      
      if (themeBtn) {
        themeBtn.setAttribute('aria-pressed', String(isDark));
        themeBtn.classList.toggle('btn-outline-dark', !isDark);
        themeBtn.classList.toggle('btn-outline-light', isDark);
        
        const icon = themeBtn.querySelector('i');
        if (icon) {
          icon.classList.toggle('bi-moon-stars', !isDark);
          icon.classList.toggle('bi-sun', isDark);
        }
        
        themeBtn.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
      }
    };

    // Apply stored theme or system preference
    const stored = localStorage.getItem(THEME_KEY);
    applyTheme(stored || (prefersDark.matches ? 'dark' : 'light'));

    // Listen to system preference changes if no stored preference
    if (!stored) {
      prefersDark.addEventListener('change', e => {
        applyTheme(e.matches ? 'dark' : 'light');
      });
    }

    // Toggle on button click
    themeBtn.addEventListener('click', () => {
      const next = document.documentElement.classList.contains('theme-dark') ? 'light' : 'dark';
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    });
  }

  // ========== NAVBAR FUNCTIONALITY ==========
  function initNavbar() {
    // Scrolled shadow
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('.navbar');
      if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 30);
      }
    }, { passive: true });

    // Active nav highlight
    const currentPage = normalizePath(window.location.pathname);
    const currentHash = window.location.hash.replace('#', '');

    document.querySelectorAll('.navbar .nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      
      const [path, hash] = href.split('#');
      const pathMatch = normalizePath(path) === currentPage;
      const hashMatch = hash && currentHash && hash === currentHash && 
        (path === '' || path === '#' || normalizePath(path) === currentPage);

      if (pathMatch || hashMatch) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });

    // Dropdown active state
    document.querySelectorAll('.navbar .dropdown').forEach(drop => {
      const toggle = drop.querySelector('.dropdown-toggle');
      if (!toggle) return;

      drop.querySelectorAll('.dropdown-item').forEach(item => {
        const href = item.getAttribute('href') || '';
        if (href.startsWith('#')) return;

        const n = normalizePath(href);
        const isServicePage = n.startsWith('services-');

        if (isServicePage && n === currentPage) {
          toggle.classList.add('active');
          toggle.setAttribute('aria-current', 'page');
          item.classList.add('active');
          item.setAttribute('aria-current', 'page');
        }
      });
    });

    // Dropdown hover (desktop only)
    if (window.matchMedia('(hover: hover)').matches) {
      document.querySelectorAll('.navbar .dropdown').forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
          const toggle = this.querySelector('.dropdown-toggle');
          const menu = this.querySelector('.dropdown-menu');
          if (toggle && menu) {
            toggle.classList.add('show');
            menu.classList.add('show');
            toggle.setAttribute('aria-expanded', 'true');
          }
        });

        dropdown.addEventListener('mouseleave', function() {
          const toggle = this.querySelector('.dropdown-toggle');
          const menu = this.querySelector('.dropdown-menu');
          if (toggle && menu) {
            toggle.classList.remove('show');
            menu.classList.remove('show');
            toggle.setAttribute('aria-expanded', 'false');
          }
        });
      });
    }
  }

  function initLegacyRouteLinks() {
    const routeMap = {
      '/training': 'training.html',
      '/careers': 'careers.html',
      '/about': 'about.html',
      '/contact': 'contact.html',
      '/services-endpoint': 'services-endpoint.html',
      '/services-helpdesk': 'services-helpdesk.html',
      '/services-software': 'services-software.html',
      '/services-research': 'services-research.html',
      '/services-consulting': 'services-consulting.html',
      '/services-data': 'services-data.html',
      '/services-ml': 'services-ml.html',
      '/services-cloud': 'services-cloud.html',
      '/services-training': 'services-training.html',
    };

    document.addEventListener('click', event => {
      const anchor = event.target.closest('a');
      if (!anchor || anchor.target || anchor.hasAttribute('download')) return;
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('/')) return;
      if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

      const [path, hash] = href.split('#');
      const mapped = routeMap[path];
      if (!mapped) return;

      event.preventDefault();
      const destination = mapped + (hash ? `#${hash}` : '');
      window.location.href = destination;
    });
  }

  // (Hero carousel removed: heroes are static across all pages)

  // ========== SMOOTH SCROLL ==========
  function initSmoothScroll() {
    document.querySelectorAll('a[data-scroll], a[href^="#"]:not([href="#"])').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const id = this.getAttribute('href');
        if (!id || id.charAt(0) !== '#') return;

        e.preventDefault();
        const target = document.querySelector(id);
        if (!target) {
          console.warn('Smooth scroll target not found:', id);
          return;
        }

        try {
          const y = target.getBoundingClientRect().top + window.scrollY - 68;
          window.scrollTo({
            top: Math.max(0, y),
            behavior: 'smooth'
          });

          history.pushState(null, '', id);
        } catch (error) {
          console.error('Smooth scroll error:', error);
        }
      });
    });
  }

  // ========== LAZY LOADING IMAGES ==========
  function initLazyLoading() {
    if ('loading' in HTMLImageElement.prototype) {
      // Native lazy loading supported
      const images = document.querySelectorAll('img[loading="lazy"]');
      images.forEach(img => {
        img.addEventListener('load', function() {
          this.classList.add('loaded');
        });
        if (img.complete) {
          img.classList.add('loaded');
        }
      });
    } else {
      // Fallback for browsers without native lazy loading
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  // ========== YEAR UPDATE ==========
  function updateYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  // ========== AOS INITIALIZATION ==========
  function initAOS() {
    if (window.AOS) {
      AOS.init({
        duration: 900,
        once: true,
        disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
      });
    }
  }

  // ========== FORM VALIDATION ==========
  function initFormValidation() {
    const forms = document.querySelectorAll('.needs-validation');
    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        if (!form.checkValidity()) {
          e.preventDefault();
          e.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }

  // ========== INITIALIZE ALL ==========
  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    // Initialize all features
    initThemeToggle();
    initNavbar();
    initLegacyRouteLinks();
    initSmoothScroll();
    initLazyLoading();
    updateYear();
    initAOS();
    initFormValidation();
  }

  // Start initialization
  init();

})();

