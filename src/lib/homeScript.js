export function initHomeScript() {
  const cleanupCallbacks = [];

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    const handleClick = function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    anchor.addEventListener("click", handleClick);
    cleanupCallbacks.push(() => anchor.removeEventListener("click", handleClick));
  });



  // Enhanced scroll animations with stagger effect
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        const children = entry.target.querySelectorAll(".animate-slide");
        children.forEach((child, i) => {
          setTimeout(() => {
            child.style.animation = "slideInUp 0.5s ease forwards";
          }, i * 100);
        });
      }
    });
  }, observerOptions);

  const fadeInElements = document.querySelectorAll(".fade-in");
  fadeInElements.forEach((el) => observer.observe(el));

  cleanupCallbacks.push(() => observer.disconnect());

  return () => {
    cleanupCallbacks.forEach((cleanup) => cleanup());
  };
}