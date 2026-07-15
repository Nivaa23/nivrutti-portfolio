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
  const revealImgRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Setup scroll trigger reveal animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial state for all revealable elements outside the hero
    gsap.set(".reveal-up-sec", { y: 60, opacity: 0 });

    const ctx = gsap.context(() => {
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

  // Spotlight mouse track reveal loop
  useEffect(() => {
    const imgLayer = revealImgRef.current;
    if (!imgLayer) return;

    const SPOTLIGHT_R = 260;
    const mouse = { x: -999, y: -999 };
    const smooth = { x: -999, y: -999 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let frameId: number;

    const loop = () => {
      if (smooth.x === -999) {
        smooth.x = mouse.x;
        smooth.y = mouse.y;
      } else {
        smooth.x += (mouse.x - smooth.x) * 0.12;
        smooth.y += (mouse.y - smooth.y) * 0.12;
      }

      if (smooth.x !== -999) {
        const mask = `radial-gradient(circle ${SPOTLIGHT_R}px at ${smooth.x}px ${smooth.y}px, black 0%, black 40%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,0.4) 75%, rgba(0,0,0,0.12) 88%, transparent 100%)`;
        imgLayer.style.maskImage = mask;
        imgLayer.style.webkitMaskImage = mask;
        imgLayer.style.maskSize = "100% 100%";
        imgLayer.style.webkitMaskSize = "100% 100%";
      }

      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  // Split words for text reveal staggered delays
  const headlineText = "I craft meaningful, intuitive and beautiful digital experiences.";
  const words = headlineText.split(" ");

  return (
    <div ref={containerRef} style={{ backgroundColor: "#f9fafb" }}>
      {/* SPLASH OVERLAY */}
      <div className="splash" id="splash">
        <div className="splash-row splash-row-top">
          <div className="splash-box"></div>
          <div className="splash-box"></div>
          <div className="splash-box"></div>
          <div className="splash-box"></div>
          <div className="splash-box"></div>
        </div>
        <div className="splash-row splash-row-bottom">
          <div className="splash-box"></div>
          <div className="splash-box"></div>
          <div className="splash-box"></div>
          <div className="splash-box"></div>
          <div className="splash-box"></div>
        </div>
      </div>

      {/* FIXED LOGO */}
      <div className="logo-wrapper">
        <div className="inner">
          <Link href="/" aria-label="Home" className="logo font-podium tracking-wider uppercase text-2xl sm:text-3xl text-slate-900">
            ND.
          </Link>
        </div>
      </div>

      {/* FIXED BURGER BUTTON */}
      <div className="burger-wrapper">
        <div className="inner">
          <button 
            className={`burger-btn ${menuOpen ? "open" : ""}`} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>

      {/* DROPDOWN MENU PANEL */}
      <div className={`menu-panel ${menuOpen ? "open" : ""}`} id="menu-panel">
        <nav>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <div className="menu-contact">
          <a href="mailto:nivrutti.dandekar@gmail.com" className="menu-email">
            nivrutti.dandekar@gmail.com
          </a>
          <div className="menu-socials">
            <a href="https://www.linkedin.com/in/nivrutti-dandekar-71638768/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:nivrutti.dandekar@gmail.com">Email</a>
            <a href="#projects">Work</a>
          </div>
        </div>
        <div style={{ marginTop: "32px" }}>
          <button 
            className="menu-cta-btn" 
            onClick={() => { 
              setMenuOpen(false); 
              const el = document.getElementById("contact"); 
              if (el) el.scrollIntoView({ behavior: "smooth" }); 
            }}
          >
            <span className="menu-cta-bg"></span>
            <span className="menu-cta-text">Let's talk</span>
            <span className="menu-cta-circle">
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13L13 5M13 5H6M13 5V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </button>
        </div>
      </div>

      <main>
        {/* Fullscreen Spotlight Reveal Hero Section */}
        <section id="home" className="hero-spotlight">
          {/* Big background text behind image */}
          <div className="hero-big-text creator-text-animate">
            <h2>Designer</h2>
          </div>

          {/* Base image */}
          <div 
            className="hero-base-img hero-image-animate"
            style={{ backgroundImage: "url('https://soft-zoom-63098134.figma.site/_assets/v11/5c9f982199fde1d9b85a20e5396f0fa7bacaf9a3.png?w=2560')" }}
          ></div>

          {/* Reveal layer */}
          <div 
            ref={revealImgRef}
            className="hero-reveal-img" 
            style={{ backgroundImage: "url('https://soft-zoom-63098134.figma.site/_assets/v11/6be2165e31648955b4e071f4cf2a50bc572b9bfd.png?w=1536')" }}
          ></div>

          {/* Overlaid Content */}
          <div className="hero-content-spotlight">
            <div className="hero-content-inner">
              <h1 className="hero-headline" id="headline">
                {words.map((word, i) => (
                  <span 
                    key={i} 
                    className="word-reveal" 
                    style={{ animationDelay: `${1 + i * 0.06}s` }}
                  >
                    {word}
                  </span>
                ))}
              </h1>
              
              <button 
                className="cta-btn-wrapper cta-animate"
                onClick={() => {
                  const el = document.getElementById("projects");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="cta-btn-bg"></span>
                <span className="cta-btn-text">Start a project now</span>
                <span className="cta-btn-circle">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L13 5M13 5H6M13 5V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </button>
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
