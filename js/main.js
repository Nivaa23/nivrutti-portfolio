// Init Lenis Smooth Scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  smoothTouch: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Custom Round Cursor
const setupCursor = () => {
  const cursor = document.querySelector('.custom-cursor');
  if (!cursor) return;

  window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: "power2.out"
    });
  });

  const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-card');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      gsap.to(cursor, {
        scale: 3,
        backgroundColor: 'rgba(71, 70, 229, 0.1)',
        border: '1px solid #4746E5',
        duration: 0.3
      });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: '#4746E5',
        border: 'none',
        duration: 0.3
      });
    });
  });
};

// Entry Animations
const setupAnimations = () => {
  const tl = gsap.timeline();

  tl.from(".hero-subtitle-large", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  })
  .from(".hero-title", {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  }, "-=0.6")
  .from(".hero-desc", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.6")
  .from(".hero-actions", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.6")
  .from("nav", {
    y: -20,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  }, "-=1");

  // Scroll Reveal for all .reveal-up elements
  const revealElements = document.querySelectorAll('.reveal-up');
  revealElements.forEach(el => {
    gsap.fromTo(el, 
      { 
        y: 60, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  });

  // Parallax Effect for Hero (Subtle)
  gsap.to(".hero-content", {
    y: 100,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  // Parallax for images
  gsap.to(".about-image img", {
    y: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".about-section",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
};

// Initialize
window.addEventListener('DOMContentLoaded', () => {
  setupCursor();
  setupAnimations();
});
