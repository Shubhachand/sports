document.addEventListener('DOMContentLoaded', function() {
  const testimonials = document.querySelectorAll('.testimonial-card');
  let index = 0;

  function showNextTestimonial() {
    // Hide the current testimonial
    // testimonials[index].style.opacity = '0';

    // Move to the next testimonial index
    index = (index +1) % testimonials.length;

    // Show the new testimonial
    testimonials[index].style.opacity = '1';
  }

  setInterval(showNextTestimonial, 1000); // Slide every 3 seconds
});
