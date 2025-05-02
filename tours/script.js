// Form interaction
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("formMessage").textContent = "Thanks for contacting us!";
    this.reset();
  });
  
  // Reveal animation on scroll
  window.addEventListener("scroll", revealOnScroll);
  
  function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    for (let el of reveals) {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const visiblePoint = 150;
  
      if (elementTop < windowHeight - visiblePoint) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    }
  }
  
