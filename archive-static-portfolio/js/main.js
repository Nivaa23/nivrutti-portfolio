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

// Entry Animations
const setupAnimations = () => {
  // Set initial state for all revealable elements
  gsap.set(".reveal-up", { y: 60, opacity: 0 });

  const tl = gsap.timeline();

  // Hero Animations (Target specifically to avoid reveal-up conflicts)
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
    gsap.to(el, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
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

  // Refresh ScrollTrigger after initializing everything
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);
};

// Adaptive Bento Layout Manager
const applyAdaptiveLayout = (visibleCards) => {
  const count = visibleCards.length;
  if (count === 0) return;

  // Reset all cards first
  visibleCards.forEach(card => {
    card.style.gridColumn = '';
    card.style.gridRow = '';
    card.style.minHeight = '';
    // Clear specific adaptive classes
    card.classList.remove('bento-3-featured', 'bento-3-small');
    // Restore original classes
    const original = card.getAttribute('data-original-class');
    if (original) card.className = original;
  });

  // Mobile check (Handled by CSS Mostly, but we force span-12 for JS-added classes)
  if (window.innerWidth < 992) {
    visibleCards.forEach(card => {
      card.classList.remove('p-bento-span-4', 'p-bento-span-6', 'p-bento-span-8');
      card.classList.add('p-bento-span-12');
    });
    return;
  }

  // Specialized layouts for small sets
  if (count === 1) {
    visibleCards[0].classList.remove('p-bento-span-4', 'p-bento-span-6', 'p-bento-span-8');
    visibleCards[0].classList.add('p-bento-span-12');
  } else if (count === 2) {
    visibleCards[0].classList.remove('p-bento-span-4', 'p-bento-span-12');
    visibleCards[0].classList.add('p-bento-span-8');
    visibleCards[1].classList.remove('p-bento-span-8', 'p-bento-span-12');
    visibleCards[1].classList.add('p-bento-span-4');
  } else if (count === 3) {
    visibleCards[0].classList.add('bento-3-featured');
    visibleCards[1].classList.add('bento-3-small');
    visibleCards[2].classList.add('bento-3-small');
  }
};

// Project Filtering Logic
const setupFiltering = () => {
  const filterPills = document.querySelectorAll('.filter-pill');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterPills.length || !projectCards.length) return;

  // Store original classes
  projectCards.forEach(card => {
    if (!card.getAttribute('data-original-class')) {
      card.setAttribute('data-original-class', card.className);
    }
  });

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const filter = pill.getAttribute('data-filter');

      // Update active state
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      // Filter projects
      const tl = gsap.timeline();

      tl.to(projectCards, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          projectCards.forEach(card => {
            const categories = card.getAttribute('data-category')?.split(' ') || [];
            if (filter === 'all' || categories.includes(filter)) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          });

          const visibleCards = Array.from(projectCards).filter(c => c.style.display !== 'none');
          applyAdaptiveLayout(visibleCards);

          gsap.fromTo(visibleCards,
            { opacity: 0, y: 30, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "back.out(1.7)",
              clearProps: "opacity, y, scale"
            }
          );

          ScrollTrigger.refresh();
        }
      });
    });
  });

  // Re-apply layout on resize
  window.addEventListener('resize', () => {
    const activePill = document.querySelector('.filter-pill.active');
    const filter = activePill ? activePill.getAttribute('data-filter') : 'all';
    const visibleCards = Array.from(projectCards).filter(c => {
      const categories = c.getAttribute('data-category')?.split(' ') || [];
      return filter === 'all' || categories.includes(filter);
    });
    applyAdaptiveLayout(visibleCards);
  });
};

// Initialize
window.addEventListener('load', () => {
  setupAnimations();
  setupFiltering();

  // Refresh ScrollTrigger to catch all layout positions
  ScrollTrigger.refresh();

  // Apply initial adaptive layout for "All"
  const projectCards = document.querySelectorAll('.project-card');
  if (projectCards.length) {
    applyAdaptiveLayout(Array.from(projectCards));
  }
});
