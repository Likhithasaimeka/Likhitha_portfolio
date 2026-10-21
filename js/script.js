/**
 * ==========================================================================
 * PORTFOLIO JAVASCRIPT
 * Name: Meka Likhitha Sai
 * Description: Clean, vanilla JavaScript for interactive UI, typing effect,
 *              mobile menu navigation, smooth scrolling, and form validation.
 * ==========================================================================
 */

// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all features
  initTypingEffect();
  initMobileNavigation();
  initNavbarScroll();
  initScrollSpy();
  initScrollReveal();
  initScrollToTop();
  initContactForm();
  setCurrentYear();
});

/* --------------------------------------------------------------------------
   1. Dynamic Typing Effect for Hero Title
   -------------------------------------------------------------------------- */
function initTypingEffect() {
  const typedTextElement = document.getElementById('typed-text');
  if (!typedTextElement) return;

  // Words / titles to cycle through
  const titles = [
    'Aspiring Software Developer',
    'B.Tech IT Student @ SRKREC',
    'Tech & AI Enthusiast',
    'Problem Solver'
  ];

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;    // Milliseconds per character while typing
  const deletingSpeed = 50;   // Milliseconds per character while deleting
  const pauseEnd = 1800;      // Pause before starting deletion
  const pauseStart = 400;     // Pause before typing next title

  function type() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      // Remove a character
      typedTextElement.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
    } else {
      // Add a character
      typedTextElement.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
    }

    // Determine speed for next step
    let currentSpeed = isDeleting ? deletingSpeed : typingSpeed;

    // If finished typing the whole word
    if (!isDeleting && charIndex === currentTitle.length) {
      currentSpeed = pauseEnd;
      isDeleting = true;
    } 
    // If finished deleting the word
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length; // Move to next title
      currentSpeed = pauseStart;
    }

    setTimeout(type, currentSpeed);
  }

  // Start the typing loop
  setTimeout(type, 500);
}

/* --------------------------------------------------------------------------
   2. Mobile Hamburger Menu Toggle
   -------------------------------------------------------------------------- */
function initMobileNavigation() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-resume-btn');

  if (!navToggle || !navMenu) return;

  // Toggle mobile navigation when clicking the hamburger button
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    navToggle.classList.toggle('open');
    navMenu.classList.toggle('active');
  });

  // Close mobile navigation when any nav link is clicked
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navMenu.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close mobile navigation when clicking outside the menu
  document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
      navToggle.classList.remove('open');
      navMenu.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/* --------------------------------------------------------------------------
   3. Sticky Navbar Styling on Scroll
   -------------------------------------------------------------------------- */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* --------------------------------------------------------------------------
   4. ScrollSpy: Highlight Active Nav Link on Scroll
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 120; // Offset for header

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. Scroll Reveal Animation Using IntersectionObserver
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  // Use modern IntersectionObserver for high performance
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once revealed, no need to keep observing
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach((el) => el.classList.add('active'));
  }
}

/* --------------------------------------------------------------------------
   6. Scroll to Top Floating Button
   -------------------------------------------------------------------------- */
function initScrollToTop() {
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  const footerTopBtn = document.getElementById('footer-top-btn');

  // Show floating button after scrolling down 350px
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Footer back-to-top button
  if (footerTopBtn) {
    footerTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/* --------------------------------------------------------------------------
   7. Contact Form Validation & Submission
   -------------------------------------------------------------------------- */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (!contactForm || !formStatus) return;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent standard page reload

    // Form input values
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput ? subjectInput.value.trim() : 'Portfolio Inquiry';
    const message = messageInput.value.trim();

    // Validation checks
    if (!name || name.length < 2) {
      showStatus('Please enter your valid name (at least 2 characters).', 'error');
      nameInput.focus();
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      showStatus('Please enter a valid email address.', 'error');
      emailInput.focus();
      return;
    }

    if (!message || message.length < 10) {
      showStatus('Please enter a message with at least 10 characters.', 'error');
      messageInput.focus();
      return;
    }

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton ? submitButton.lastChild.textContent : '';
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('_replyto', email);
    formData.append('_subject', `[Portfolio Contact] ${subject || 'New Message'} from ${name}`);
    formData.append('message', message);
    formData.append('_captcha', 'false');
    formData.append('_template', 'table');

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.lastChild.textContent = ' Sending...';
    }
    showStatus('Sending your message...', 'success');

    try {
      const response = await fetch('https://formsubmit.co/ajax/sailikhitha68@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData
      });

      const result = await response.json();
      if (!response.ok || (result.success !== 'true' && result.success !== true)) {
        throw new Error(result.message || `Contact form request failed with status ${response.status}`);
      }

      showStatus('✓ Your message was sent successfully. Thank you for reaching out!', 'success');
      contactForm.reset();
    } catch (error) {
      console.error('Contact form submission failed:', error);
      showStatus('Unable to send your message right now. Please email sailikhitha68@gmail.com directly.', 'error');
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.lastChild.textContent = originalButtonText;
      }
    }
  });

  function showStatus(text, type) {
    formStatus.textContent = text;
    formStatus.className = `form-status ${type}`;
    formStatus.style.display = 'block';

    // Auto-hide error messages after 5 seconds
    if (type === 'error') {
      setTimeout(() => {
        formStatus.style.display = 'none';
      }, 5000);
    }
  }
}

/* --------------------------------------------------------------------------
   8. Dynamic Footer Year
   -------------------------------------------------------------------------- */
function setCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
