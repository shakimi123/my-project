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
});