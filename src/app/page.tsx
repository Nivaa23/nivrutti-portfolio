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
  MessageCircle,
  Layers,
  Search,
  GitCommit,
  Network,
  Palette,
  Smartphone,
  PenTool,
  Image as ImageIcon,
  BookOpen,
  Zap,
  Bot,
  Heart,
  Compass,
  Eye,
  Activity,
  FastForward
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";

// Marquee items config matching the user's specific skills list
const marqueeItems = [
  { name: "UI/UX Design", icon: "Layers", gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)" },
  { name: "User Research & Usability Testing", icon: "Search", gradient: "linear-gradient(135deg, #facc15 0%, #ca8a04 100%)" },
  { name: "Wireframing & Prototyping", icon: "GitCommit", gradient: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)" },
  { name: "Interaction & Information Architecture", icon: "Network", gradient: "linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)" },
  { name: "Design Systems & Visual Design", icon: "Palette", gradient: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)" },
  { name: "Responsive & Mobile-first Design", icon: "Smartphone", gradient: "linear-gradient(135deg, #84cc16 0%, #4d7c0f 100%)" },
  { name: "Figma", icon: "Layers", gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)" },
  { name: "Adobe Illustrator", icon: "PenTool", gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)" },
  { name: "Adobe Photoshop", icon: "Image", gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)" },
  { name: "Notion", icon: "BookOpen", gradient: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)" },
  { name: "Antigravity", icon: "Zap", gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)" },
  { name: "ChatGPT / Gemini", icon: "Bot", gradient: "linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)" },
  { name: "Lovable", icon: "Heart", gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)" },
  { name: "Human-Centered Design Thinking", icon: "Compass", gradient: "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)" },
  { name: "Accessibility (WCAG AA)", icon: "Eye", gradient: "linear-gradient(135deg, #06b6d4 0%, #0f766e 100%)" },
  { name: "Motion & Micro-Interactions", icon: "Activity", gradient: "linear-gradient(135deg, #a855f7 0%, #6b21a8 100%)" },
  { name: "Rapid Prototyping", icon: "FastForward", gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)" }
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Layers": return <Layers className="marquee-card-icon" size={20} />;
    case "Search": return <Search className="marquee-card-icon" size={20} />;
    case "GitCommit": return <GitCommit className="marquee-card-icon" size={20} />;
    case "Network": return <Network className="marquee-card-icon" size={20} />;
    case "Palette": return <Palette className="marquee-card-icon" size={20} />;
    case "Smartphone": return <Smartphone className="marquee-card-icon" size={20} />;
    case "PenTool": return <PenTool className="marquee-card-icon" size={20} />;
    case "Image": return <ImageIcon className="marquee-card-icon" size={20} />;
    case "BookOpen": return <BookOpen className="marquee-card-icon" size={20} />;
    case "Zap": return <Zap className="marquee-card-icon" size={20} />;
    case "Bot": return <Bot className="marquee-card-icon" size={20} />;
    case "Heart": return <Heart className="marquee-card-icon" size={20} />;
    case "Compass": return <Compass className="marquee-card-icon" size={20} />;
    case "Eye": return <Eye className="marquee-card-icon" size={20} />;
    case "Activity": return <Activity className="marquee-card-icon" size={20} />;
    case "FastForward": return <FastForward className="marquee-card-icon" size={20} />;
    default: return <Zap className="marquee-card-icon" size={20} />;
  }
};


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
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                <div key={index} className="marquee-card group">
                  {/* Absolute gradient overlay on hover */}
                  <div 
                    className="marquee-card-gradient" 
                    style={{ background: item.gradient }}
                  ></div>
                  
                  {/* Render the icon and text */}
                  {getIcon(item.icon)}
                  <span className="marquee-card-text">{item.name}</span>
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
