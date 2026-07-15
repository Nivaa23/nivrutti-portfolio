"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileText, ArrowUpRight, MessageCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial state for all revealable elements
    gsap.set(".reveal-up", { y: 60, opacity: 0 });

    const ctx = gsap.context(() => {
      // Hero Animations
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
      const revealElements = document.querySelectorAll(".reveal-up");
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

      // Parallax Effect for Hero
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
    }, containerRef);

    // Refresh ScrollTrigger to ensure correct bounding heights
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <Navigation />

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-bg">
            <div className="spotlight"></div>
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Hi, I’m <span className="text-primary-color">Nivrutti Dandekar!</span>
              </h1>

              <h2 className="hero-subtitle-large">UI/UX Designer & Product Designer</h2>

              <p className="hero-desc body-large">
                I craft meaningful, intuitive and beautiful digital experiences that connect people with technology.
                Turning complex problems into elegant, user-centered solutions.
              </p>
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  View My Work <ArrowRight size={18} />
                </a>
                <a 
                  href="https://drive.google.com/file/d/16RZI4cFXjciBeey5vyGIDeyzzsXh9wfb/view?usp=drive_link" 
                  className="btn btn-secondary" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FileText size={18} /> View Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section container">
          <span className="section-label reveal-up">About Me</span>
          <div className="about-content">
            <div className="about-text reveal-up">
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
            <div className="about-image reveal-up">
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

        {/* Skills Section */}
        <section id="skills" className="skills-section">
          <div className="container">
            <div className="skills-header reveal-up">
              <h2>Expertise & Creative Toolkit</h2>
              <p className="body">A look at my design and technical toolkit.</p>
            </div>

            <div className="skills-grid">
              {/* Card 1 */}
              <div className="skill-card reveal-up">
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
              <div className="skill-card reveal-up">
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
              <div className="skill-card reveal-up">
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
          <div className="projects-header reveal-up">
            <div className="projects-header-left">
              <h2>Work Highlights</h2>
              <p className="body">A curated selection of my best design projects</p>
            </div>
            <Link href="/projects" className="btn btn-secondary">
              View All Projects <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="bento-grid reveal-up">
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
          <div className="reveal-up">
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
