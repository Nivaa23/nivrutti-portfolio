import { projects } from './data.js';

// Init Lenis
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
gsap.registerPlugin(ScrollTrigger);

// Custom Cursor
const cursor = document.querySelector('.custom-cursor');
if (cursor) {
  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, ease: "power2.out" });
  });
  const hoverElements = document.querySelectorAll('a, button');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
}

// Get project ID from URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id');

const project = projects.find(p => p.id === projectId);

if (!project) {
  document.querySelector('main').innerHTML = `
    <div class="container" style="padding: 150px 0; text-align: center;">
      <h1>Project Not Found</h1>
      <a href="index.html" class="btn btn-primary" style="margin-top: 20px;">Back to Home</a>
    </div>
  `;
} else {
  // Update Title
  document.title = `${project.name} - Nivrutti Dandekar`;

  // Render Content
  const app = document.getElementById('case-study-content');
  
  app.innerHTML = `
    <section class="cs-hero">
      <div class="cs-bg" style="background: ${project.gradient}"></div>
      <div class="container">
        <a href="index.html" class="back-btn reveal-up">← Back to Portfolio</a>
        <h1 class="cs-title reveal-up">${project.name}</h1>
        <p class="cs-tagline reveal-up">${project.tagline}</p>
        
        <div class="cs-meta reveal-up">
          <div class="cs-meta-item">
            <span class="cs-meta-label">Role</span>
            <span class="cs-meta-value">Lead Designer</span>
          </div>
          <div class="cs-meta-item">
            <span class="cs-meta-label">Type</span>
            <span class="cs-meta-value">${project.tags[0]}</span>
          </div>
          <div class="cs-meta-item">
            <span class="cs-meta-label">Duration</span>
            <span class="cs-meta-value">2-3 Months</span>
          </div>
        </div>
      </div>
    </section>

    <section class="cs-content-section container reveal-up">
      <div class="cs-grid">
        <div class="cs-sidebar">
          <h3>The Problem</h3>
        </div>
        <div class="cs-bodytext">
          <p>${project.problem}</p>
        </div>
      </div>
    </section>

    <section class="cs-content-section container reveal-up">
      <div class="cs-grid">
        <div class="cs-sidebar">
          <h3>Key Issues Identified</h3>
        </div>
        <div class="cs-bodytext">
          <ul class="cs-list">
            ${project.issues.map(issue => `<li>${issue}</li>`).join('')}
          </ul>
        </div>
      </div>
    </section>

    <section class="cs-content-section container reveal-up">
      <div class="cs-mockup glass-panel">
        <div style="width: 100%; height: 500px; display: flex; align-items: center; justify-content: center; background: ${project.gradient}">
           <h2 style="font-size: 2rem; color: #fff; mix-blend-mode: overlay;">Product Mockup Presentation</h2>
        </div>
      </div>
    </section>
    
    <section class="cs-content-section container reveal-up">
      <div class="cs-grid">
        <div class="cs-sidebar">
          <h3>Design Goals</h3>
        </div>
        <div class="cs-bodytext">
          <ul class="cs-list">
            ${project.goals.map(goal => `<li>${goal}</li>`).join('')}
          </ul>
        </div>
      </div>
    </section>

    <section class="cs-content-section container reveal-up">
      <div class="cs-grid">
        <div class="cs-sidebar">
          <h3 style="color: ${project.accent}">Expected Impact</h3>
        </div>
        <div class="cs-bodytext">
          <p>${project.impact}</p>
        </div>
      </div>
    </section>

    <!-- Find next project -->
    ${(() => {
      const pIdx = projects.findIndex(p => p.id === projectId);
      const nextP = projects[(pIdx + 1) % projects.length];
      return `
        <a href="case-study.html?id=${nextP.id}" class="next-project reveal-up js-next-project" style="display: block">
          <div class="container">
            <h4>Next Project</h4>
            <h2>${nextP.name}</h2>
          </div>
        </a>
      `;
    })()}
  `;

  // Animate Elements
  gsap.from(".reveal-up", {
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".cs-hero",
      start: "top 80%"
    }
  });

  const scrollElements = document.querySelectorAll('.cs-content-section.reveal-up');
  scrollElements.forEach(el => {
    gsap.fromTo(el, 
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%" }
      }
    );
  });
}
