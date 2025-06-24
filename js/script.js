document.addEventListener('DOMContentLoaded', function () {
  // Testimonial Carousel Logic
  const testimonials = document.querySelectorAll('.testimonial-item');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let current = 0;

  function showTestimonial(index) {
    testimonials.forEach((item, i) => {
      if (i === index) {
        item.classList.remove('hidden');
        item.classList.add('active');
      } else {
        item.classList.add('hidden');
        item.classList.remove('active');
      }
    });
  }

  if (testimonials.length > 0 && prevBtn && nextBtn) {
    showTestimonial(current);

    prevBtn.addEventListener('click', () => {
      current = (current - 1 + testimonials.length) % testimonials.length;
      showTestimonial(current);
    });

    nextBtn.addEventListener('click', () => {
      current = (current + 1) % testimonials.length;
      showTestimonial(current);
    });

    // Optional: Auto-advance every 5 seconds
    setInterval(() => {
      current = (current + 1) % testimonials.length;
      showTestimonial(current);
    }, 5000);
  }

  // Contact form submit handler (Formspree or local)
  const contactForm = document.querySelector('form[action*="formspree"], #contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      if (!contactForm.action.includes('formspree')) {
        e.preventDefault();
        alert('Thank you for contacting us! We have received your message.');
        contactForm.reset();
      } else {
        setTimeout(() => {
          alert('Thank you for your message!');
        }, 100);
      }
    });
  }

  // FAQ accordion logic (only one open at a time)
  document.querySelectorAll('.faq-question').forEach((btn) => {
    btn.addEventListener('click', function () {
      const answer = this.nextElementSibling;
      const arrow = this.querySelector('.faq-arrow');
      const isOpen = !answer.classList.contains('hidden');
      document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
      document.querySelectorAll('.faq-arrow').forEach(ar => ar.classList.remove('rotate-180'));
      if (!isOpen) {
        answer.classList.remove('hidden');
        if (arrow) arrow.classList.add('rotate-180');
      }
    });
  });

  // Menu Carousel (if present)
  const carousel = document.getElementById('menu-carousel');
  if (carousel) {
    const items = carousel.children;
    const totalItems = items.length;
    const itemsPerSlide = 3;
    let currentSlide = 0;

    function updateCarousel() {
      const slideWidth = items[0].offsetWidth;
      carousel.style.transform = `translateX(-${currentSlide * slideWidth * itemsPerSlide}px)`;
    }

    const prevBtn = document.getElementById('menu-prev');
    const nextBtn = document.getElementById('menu-next');
    if (prevBtn && nextBtn) {
      prevBtn.onclick = function () {
        if (currentSlide > 0) {
          currentSlide--;
          updateCarousel();
        }
      };
      nextBtn.onclick = function () {
        if ((currentSlide + 1) * itemsPerSlide < totalItems) {
          currentSlide++;
          updateCarousel();
        }
      };
    }

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
  }

  // Language Switcher
  const langSwitcher = document.getElementById('lang-switcher');
  if (langSwitcher) {
    langSwitcher.addEventListener('change', function () {
      const lang = langSwitcher.value;
      document.querySelectorAll('[data-lang]').forEach(el => {
        el.classList.toggle('hidden', el.getAttribute('data-lang') !== lang);
      });
      document.querySelectorAll('[data-placeholder-en]').forEach(el => {
        el.placeholder = el.getAttribute('data-placeholder-' + lang) || el.getAttribute('data-placeholder-en');
      });
    });
  }

  // Terms & Privacy Modal/Section Show/Hide
  function showSection(sectionId) {
    document.querySelectorAll('#terms, #privacy').forEach(sec => sec.classList.add('hidden'));
    const section = document.getElementById(sectionId);
    if (section) section.classList.remove('hidden');
    window.scrollTo({ top: section.offsetTop - 40, behavior: 'smooth' });
  }

  document.querySelectorAll('a[href="#terms"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      showSection('terms');
    });
  });

  document.querySelectorAll('a[href="#privacy"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      showSection('privacy');
    });
  });

  // Optional: Hide sections when clicking outside or pressing Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('#terms, #privacy').forEach(sec => sec.classList.add('hidden'));
    }
  });
});