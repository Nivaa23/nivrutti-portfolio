// Init Lenis Smooth Scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Custom Cursor
const cursor = document.querySelector('.custom-cursor');
if (cursor) {
  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: "power2.out"
    });
  });

  const hoverElements = document.querySelectorAll('a, button, .project-card');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
}

// Navbar background on scroll
const nav = document.querySelector('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}

// Render Projects
const projectsContainer = document.querySelector('.projects-grid');
if (projectsContainer) {
  projects.forEach((project, index) => {
    const card = document.createElement('a');
    card.href = `${project.id}.html`;
    card.className = 'project-card reveal-up';
    // Use staggered delay for reveal based on index
    card.style.transitionDelay = `${(index % 2) * 0.1}s`;

    card.innerHTML = `
      <div class="project-bg" style="background: ${project.gradient}"></div>
      <div class="project-content">
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        <h3 class="project-title">${project.name}</h3>
        <p class="project-desc">${project.tagline}</p>
      </div>
    `;
    projectsContainer.appendChild(card);
  });
}

// Entry animations
window.addEventListener('DOMContentLoaded', () => {
  const tl = gsap.timeline();

  tl.from(".hero-subtitle", {
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

  // Scroll animations
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
          start: "top 85%", // when top of element hits 85% of screen
          toggleActions: "play none none none"
        }
      }
    );
  });

  // Parallax effects
  gsap.to(".about-image img", {
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
      trigger: ".about-image",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });

  gsap.to(".bg-orb-1", {
    y: 300,
    x: 100,
    ease: "none",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 1
    }
  });

  gsap.to(".bg-orb-2", {
    y: -300,
    x: -100,
    ease: "none",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 1
    }
  });
});
