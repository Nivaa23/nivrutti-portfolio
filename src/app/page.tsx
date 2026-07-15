"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Crown, 
  X, 
  Award, 
  ArrowUpRight, 
  ChevronRight, 
  Mail, 
  FileText, 
  MessageCircle 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";

// Marquee logos config
const marqueeLogos = [
  { 
    id: "procure", 
    name: "Procure", 
    gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    svg: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor" className="marquee-logo-img">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </svg>
    )
  },
  { 
    id: "shopify", 
    name: "Shopify", 
    gradient: "linear-gradient(135deg, #facc15 0%, #ca8a04 100%)",
    svg: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor" className="marquee-logo-img">
        <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12z" />
      </svg>
    )
  },
  { 
    id: "blender", 
    name: "Blender", 
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)",
    svg: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor" className="marquee-logo-img">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" />
      </svg>
    )
  },
  { 
    id: "figma", 
    name: "Figma", 
    gradient: "linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)",
    svg: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor" className="marquee-logo-img">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8H9V7h2v2zm4 8h-2v-4h2v4zm0-6h-2V7h2v6z" />
      </svg>
    )
  },
  { 
    id: "spotify", 
    name: "Spotify", 
    gradient: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
    svg: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor" className="marquee-logo-img">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.893-1.007-.336.08-.67-.13-.75-.467-.08-.337.13-.67.467-.75 3.856-.882 7.15-.5 9.83 1.14.296.18.387.563.206.86-.002.002-.002.002-.002.002zm1.222-2.724c-.226.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.076-1.183-.412.128-.85-.102-.978-.515-.128-.413.103-.85.516-.98 3.67-1.11 8.243-.57 11.353 1.343.367.227.487.708.26 1.075zm.105-2.833C14.773 8.87 9.54 8.694 6.516 9.61c-.482.146-.984-.13-.113-.61-.146-.48.13-.982.61-.836C10.45 7.1 16.22 7.3 19.86 9.463c.437.26.58.823.32 1.26-.26.438-.824.58-1.26.32a.02.02 0 0 1-.005-.003z" />
      </svg>
    )
  },
  { 
    id: "lottielab", 
    name: "Lottielab", 
    gradient: "linear-gradient(135deg, #84cc16 0%, #4d7c0f 100%)",
    svg: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor" className="marquee-logo-img">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
      </svg>
    )
  },
  { 
    id: "google-cloud", 
    name: "Google Cloud", 
    gradient: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)",
    svg: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor" className="marquee-logo-img">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
      </svg>
    )
  },
  { 
    id: "bing", 
    name: "Bing", 
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0f766e 100%)",
    svg: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor" className="marquee-logo-img">
        <path d="M12 2L2 22h20L12 2zm0 4.8L18 18H6l6-11.2z" />
      </svg>
    )
  }
];

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial state for all revealable elements outside the hero
    gsap.set(".reveal-up-sec", { y: 60, opacity: 0 });

    const ctx = gsap.context(() => {
      // Scroll Reveal for all .reveal-up-sec elements
      const revealElements = document.querySelectorAll(".reveal-up-sec");
      revealElements.forEach((el) => {
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
    }, containerRef);

    // Refresh ScrollTrigger to catch bounding heights
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} style={{ backgroundColor: "#f9fafb" }}>
      {/* Dynamic Header Navbar - Translucent White Theme Overlaid */}
      <nav className="nav-full vanguard-nav">
        <div className="nav-container">
          <Link href="/" className="logo font-podium tracking-wider uppercase text-2xl sm:text-3xl">
            ND.
          </Link>

          {/* Desktop Links (hidden below md) */}
          <div className="nav-links">
            <a href="#home" className="active">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <Link href="/projects">Projects</Link>
            <a href="#contact">Contact</a>
          </div>

          {/* Right Area (GET IN TOUCH or Hamburger Toggle) */}
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* Desktop GET IN TOUCH (hidden below md) */}
            <a 
              href="mailto:nivrutti.dandekar@example.com" 
              className="nav-email" 
              style={{ display: "none" }} // Standard header hides standard email on custom VANGUARD structure
            >
              <Mail size={18} />
            </a>

            {/* Custom VANGUARD style touch link */}
            <a
              href="mailto:nivrutti.dandekar@example.com"
              className="btn btn-vanguard-secondary hidden md:inline-flex items-center gap-1 font-inter text-xs tracking-widest uppercase"
              style={{ 
                fontSize: "12px", 
                letterSpacing: "0.15em", 
                padding: "10px 24px", 
                borderRadius: "0" 
              }}
            >
              Get In Touch <ArrowUpRight size={14} />
            </a>

            {/* Hamburger Toggle (below md only) */}
            <button 
              className="hamburger-btn" 
              onClick={() => setMenuOpen(true)}
              aria-label="Open Menu"
            >
              <div className="hamburger-line" style={{ width: "24px" }}></div>
              <div className="hamburger-line" style={{ width: "24px" }}></div>
              <div className="hamburger-line" style={{ width: "16px" }}></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Fullscreen White Theme Frosted */}
      <AnimatePresence>
        {menuOpen && (
          <div className={`menu-overlay-white ${menuOpen ? "open" : ""}`}>
            <div className="menu-header-white">
              <Link href="/" className="logo font-podium text-2xl tracking-wider uppercase text-slate-800" onClick={() => setMenuOpen(false)}>
                ND.
              </Link>
              <button 
                className="menu-close-btn" 
                onClick={() => setMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X size={18} />
              </button>
            </div>

            <div className="menu-body-white">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "/projects" },
                { label: "Contact", href: "#contact" }
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="menu-link-white font-podium"
                  style={{ 
                    transitionDelay: `${i * 80 + 100}ms`
                  }}
                  onClick={() => {
                    setMenuOpen(false);
                    if (link.href.startsWith("/")) {
                      window.location.href = link.href;
                    }
                  }}
                >
                  {link.label}
                </a>
              ))}

              <a
                href="mailto:nivrutti.dandekar@example.com"
                className="btn btn-vanguard-secondary font-inter"
                style={{ 
                  marginTop: "20px", 
                  fontSize: "12px", 
                  letterSpacing: "0.15em", 
                  padding: "12px 28px", 
                  borderRadius: "0",
                  opacity: 1,
                  transform: "translateY(0)"
                }}
                onClick={() => setMenuOpen(false)}
              >
                Get In Touch <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        )}
      </AnimatePresence>

      <main>
        {/* Fullscreen Video Hero Section - White Theme style */}
        <section id="home" className="hero-vanguard min-h-screen">
          <div className="vanguard-video-layer">
            <video
              className="vanguard-video"
              autoPlay
              muted
              loop
              playsInline
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4"
            />
          </div>
          <div className="vanguard-overlay"></div>

          <div className="container vanguard-content">
            <div className="hero-content" style={{ textAlign: "left", margin: "0" }}>
              {/* Tagline */}
              <div className="vanguard-tagline animate-fade-up">
                <Crown size={14} /> 
                <span>Nivrutti Dandekar / Digital Portfolio</span>
              </div>

              {/* Main Heading (Podium Sharp, Dark Charcoal text) */}
              <h1 className="font-podium vanguard-title hero-dark-text uppercase mb-6">
                Design.
                <br />
                Disrupt.
                <br />
                Conquer.
              </h1>

              {/* Preserved Subtext / Description */}
              <p className="vanguard-description animate-fade-up-delay-2">
                I craft meaningful, intuitive and beautiful digital experiences that connect people with technology.
                Turning complex problems into elegant, user-centered solutions.
              </p>

              {/* CTA Row */}
              <div className="vanguard-cta-row animate-fade-up-delay-3">
                <a href="#projects" className="btn btn-vanguard-primary group">
                  See Our Work <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                
                <div className="vanguard-award">
                  <Award className="w-8 h-8" />
                  <div className="vanguard-award-text">
                    Top-Rated
                    <br />
                    Brand Studio
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="vanguard-stats-row animate-fade-up-delay-4">
                {[
                  { value: "250+", label: "Brands Transformed" },
                  { value: "95%", label: "Client Retention" },
                  { value: "10+", label: "Years in the Game" }
                ].map((stat, i) => (
                  <div key={i} className="vanguard-stat-item">
                    <span className="vanguard-stat-value">
                      {stat.value}
                    </span>
                    <span className="vanguard-stat-label">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section container">
          <span className="section-label reveal-up-sec">About Me</span>
          <div className="about-content">
            <div className="about-text reveal-up-sec">
              <h2>Designing with Purpose and Empathy</h2>
              <p className="body">
                My journey into UI/UX Design began with a deep curiosity about how people interact with
                digital products. I’m passionate about designing experiences that feel intuitive, meaningful and effortless
                for users.
              </p>
              <p className="body">
                Currently pursuing my Bachelors degree, I complement my academic learning with hands-on
                project experience, focusing on solving real problems through thoughtful and user-centered design. I enjoy
                balancing aesthetics with functionality to create interfaces that are both visually engaging and highly
                usable.
              </p>
              <p className="body">
                Outside of design, I draw inspiration from modern architecture, travel and Formula One;
                interests that shape the way I think about structure, precision and experience design.
              </p>
            </div>
            <div className="about-image reveal-up-sec">
              <Image 
                src="/assets/images/profile.jpg" 
                alt="Nivrutti Dandekar" 
                fill 
                sizes="(max-width: 768px) 100vw, 40vw"
                className="about-profile-img"
                priority
              />
            </div>
          </div>
        </section>

        {/* Brand New Mid Section (Vanguard Container + Marquee Scroller) */}
        <section className="container" style={{ padding: "80px 0" }}>
          {/* Card Container with Video Background */}
          <div className="mid-container">
            <div className="mid-video-layer">
              <video
                className="mid-video"
                autoPlay
                muted
                loop
                playsInline
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4"
              />
            </div>

            <div className="mid-content-wrapper">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ position: "relative", zIndex: 10 }}
              >
                <h2 className="mid-headline">
                  Foundation of the
                  <br />
                  new digital epoch
                </h2>
                <p className="mid-subheadline">
                  Designing products, powering ecosystems and laying the foundation of a decentralized web for enterprises, builders and communities alike.
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-contact-dark"
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Contact Us
                </motion.button>
              </motion.div>
            </div>

            {/* Floating Bottom Navbar */}
            <motion.nav 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              className="floating-bottom-nav"
            >
              <div className="circular-nav-logo">✦</div>
              <button 
                className="nav-text-btn"
                onClick={() => {
                  const el = document.getElementById("projects");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Products
              </button>
              <button 
                className="nav-text-btn"
                onClick={() => {
                  const el = document.getElementById("skills");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Docs
              </button>
              <button 
                className="btn-nav-touch"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get in touch <ChevronRight size={14} />
              </button>
            </motion.nav>
          </div>

          {/* Seamless Infinite Marquee Scroller */}
          <div className="marquee-wrapper">
            <div className="marquee-track">
              {/* Double render to loop seamlessly */}
              {[...marqueeLogos, ...marqueeLogos].map((logo, index) => (
                <div key={index} className="marquee-card group">
                  {/* Absolute gradient overlay on hover */}
                  <div 
                    className="marquee-card-gradient" 
                    style={{ background: logo.gradient }}
                  ></div>
                  
                  {/* Render the logo icon */}
                  {logo.svg}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-section">
          <div className="container">
            <div className="skills-header reveal-up-sec">
              <h2>Expertise & Creative Toolkit</h2>
              <p className="body">A look at my design and technical toolkit.</p>
            </div>

            <div className="skills-grid">
              {/* Card 1 */}
              <div className="skill-card reveal-up-sec">
                <h3>Core Skills</h3>
                <span className="subtitle">Design & Strategy</span>
                <ul className="skill-list body">
                  <li>UI/UX Design</li>
                  <li>User Research & Usability Testing</li>
                  <li>Wireframing & Prototyping</li>
                  <li>Interaction & Information Architecture</li>
                  <li>Design Systems & Visual Design</li>
                  <li>Responsive & Mobile-first Design</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="skill-card reveal-up-sec">
                <h3>Tools & Software</h3>
                <span className="subtitle">My Daily Drivers</span>
                <ul className="skill-list body">
                  <li>Figma</li>
                  <li>Adobe Illustrator</li>
                  <li>Adobe Photoshop</li>
                  <li>Notion</li>
                  <li>Antigravity</li>
                  <li>ChatGPT / Gemini</li>
                  <li>Lovable</li>
                </ul>
                <div className="skill-logos">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" 
                    alt="Figma"
                    className="skill-logo"
                  />
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
                    alt="Illustrator" 
                    className="skill-logo"
                  />
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
                    alt="Photoshop" 
                    className="skill-logo"
                  />
                </div>
              </div>

              {/* Card 3 */}
              <div className="skill-card reveal-up-sec">
                <h3>Additional Strengths</h3>
                <span className="subtitle">Beyond the Pixels</span>
                <ul className="skill-list body">
                  <li>Human-Centered Design Thinking</li>
                  <li>Accessibility (WCAG AA)</li>
                  <li>Motion & Micro-Interactions</li>
                  <li>Rapid Prototyping & Iteration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Work Highlights Section */}
        <section id="projects" className="container">
          <div className="projects-header reveal-up-sec">
            <div className="projects-header-left">
              <h2>Work Highlights</h2>
              <p className="body">A curated selection of my best design projects</p>
            </div>
            <Link href="/projects" className="btn btn-secondary">
              View All Projects <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="bento-grid reveal-up-sec">
            {/* Main Highlight */}
            <Link href="/projects/cranial-space" className="project-card bento-1">
              <Image 
                src="/assets/images/projects/cranial-center.png" 
                alt="Cranial Space" 
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="project-card-image"
              />
              <div className="project-card-info">
                <h3>Cranial Space</h3>
                <div className="project-type-pills">
                  <span className="type-pill">Platform</span>
                  <span className="type-pill">Web App</span>
                </div>
              </div>
            </Link>

            <Link href="/projects/hotspot-mobile" className="project-card bento-2">
              <Image 
                src="/assets/images/projects/hotspot-mobile.png" 
                alt="HotSpot Mobile" 
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="project-card-image"
              />
              <div className="project-card-info">
                <h3>HotSpot Mobile</h3>
                <div className="project-type-pills">
                  <span className="type-pill">Social</span>
                  <span className="type-pill">Mobile App</span>
                </div>
              </div>
            </Link>

            <Link href="/projects/fama-agriculture" className="project-card bento-3">
              <Image 
                src="/assets/images/projects/fama-center.png" 
                alt="FAMA Agriculture" 
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="project-card-image"
              />
              <div className="project-card-info">
                <h3>FAMA Agriculture</h3>
                <div className="project-type-pills">
                  <span className="type-pill">Agrotech</span>
                  <span className="type-pill">Web App</span>
                </div>
              </div>
            </Link>

            <Link href="/projects/bombay-spices" className="project-card bento-4">
              <Image 
                src="/assets/images/projects/bombay-spices.png" 
                alt="Bombay Spices" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="project-card-image"
              />
              <div className="project-card-info">
                <h3>Bombay Spices</h3>
                <div className="project-type-pills">
                  <span className="type-pill">Dashboard</span>
                  <span className="type-pill">Web App</span>
                </div>
              </div>
            </Link>

            <Link href="/projects/happihosts" className="project-card bento-5">
              <Image 
                src="/assets/images/projects/happihosts-cover.png" 
                alt="Happihosts" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="project-card-image"
              />
              <div className="project-card-info">
                <h3>Happihosts</h3>
                <div className="project-type-pills">
                  <span className="type-pill">Event Management</span>
                  <span className="type-pill">Web App</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Footer CTA Section */}
        <section id="contact" className="footer-cta container">
          <div className="reveal-up-sec">
            <h2>Let’s create something amazing together</h2>
            <p className="body-large">
              I’m currently available for freelance projects and open to discussing new opportunities.
              Feel free to reach out if you want to collaborate!
            </p>
            <a 
              href="https://www.linkedin.com/in/nivrutti-dandekar-71638768/" 
              className="btn btn-primary" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Say Hello <MessageCircle size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
