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

  // Contact form submit handler
  const contactForm = document.querySelector('#contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // Optionally, you can add validation here
      alert('Thank you for contacting us! We have received your message.');
      contactForm.reset();
    });
  }

  // FAQ accordion logic
  document.querySelectorAll('.faq-question').forEach((btn) => {
    btn.addEventListener('click', function () {
      const answer = this.nextElementSibling;
      const arrow = this.querySelector('.faq-arrow');
      const isOpen = !answer.classList.contains('hidden');

      // Close all answers
      document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
      document.querySelectorAll('.faq-arrow').forEach(ar => ar.classList.remove('rotate-180'));

      // Toggle current
      if (!isOpen) {
        answer.classList.remove('hidden');
        arrow.classList.add('rotate-180');
      }
    });
  });

  // Menu Carousel (if you use it)
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

  // FAQ Accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function () {
      const answer = btn.parentElement.querySelector('.faq-answer');
      if (answer) {
        answer.classList.toggle('hidden');
        const arrow = btn.querySelector('.faq-arrow');
                if (arrow) {
                  arrow.classList.toggle('rotate-180');
                }
              }
            });
          });
        
        });