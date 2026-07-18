"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MessageCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

// Filter categories
const categories = [
  { id: "all", label: "All" },
  { id: "concept", label: "Concept / Experimental" },
  { id: "dashboard", label: "Dashboard & Enterprise Tools" },
  { id: "product", label: "Product Design" },
  { id: "ux", label: "UX Case Studies - Redesign" },
  { id: "web", label: "Web Platforms & Websites" }
];

// Mapping of project ID to its HTML data-categories
const projectCategoryMap: Record<string, string[]> = {
  "bombay-spices": ["dashboard", "product"],
  "cranial-space": ["concept", "product"],
  "fama-agriculture": ["web"],
  "happihosts": ["web"],
  "hotspot-mobile": ["concept", "product"],
  "kotak-redesign": ["ux"],
  "novance-ai": ["product"],
  "parul-university": ["dashboard", "ux"],
  "punccrt": ["web"],
  "snackstop-erp": ["dashboard", "product"],
  "utility-pay": ["concept", "product"]
};

// Project short description / captions for the card listing page
const projectCaptions: Record<string, string> = {
  "bombay-spices": "A multi-store grocery brand focused on enhancing customer loyalty and increasing sales through data-driven promotions.",
  "cranial-space": "A collaborative platform designed to help UI/UX Designers grow through community critique.",
  "fama-agriculture": "Modern web platform built to promote sustainable agriculture.",
  "happihosts": "A seamless platform for creating beautiful digital invitations.",
  "hotspot-mobile": "A nightlife discovery app that helps users find nearby bars with real-time tracking.",
  "kotak-redesign": "A secure and user-friendly mobile banking login experience.",
  "novance-ai": "An AI-powered platform focused on simplifying complex workflows.",
  "parul-university": "Redesigned university portal aimed at improving usability.",
  "punccrt": "Informative conference website designed for seamless registration.",
  "snackstop-erp": "Comprehensive analytics dashboard providing real-time insights.",
  "utility-pay": "Mobile-first fintech app for billing management in one simple dashboard."
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const gridRef = useRef<HTMLDivElement>(null);

  // Filter projects based on active state
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    const projectCats = projectCategoryMap[project.id] || [];
    return projectCats.includes(activeFilter);
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial load animations
    gsap.from(".reveal-up", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
    });

    ScrollTrigger.refresh();
  }, []);

  // Animate filtering transitions
  const handleFilterClick = (filterId: string) => {
    if (filterId === activeFilter) return;

    const cards = gridRef.current?.querySelectorAll(".project-card");
    if (!cards || cards.length === 0) {
      setActiveFilter(filterId);
      return;
    }

    // Fade out
    gsap.to(cards, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        // Change state
        setActiveFilter(filterId);
        
        // NextJS renders new list. Wait a tick to animate fade-in
        setTimeout(() => {
          const newCards = gridRef.current?.querySelectorAll(".project-card");
          if (newCards) {
            gsap.fromTo(
              newCards,
              { opacity: 0, y: 30, scale: 0.95 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.08,
                ease: "back.out(1.5)",
                clearProps: "opacity, y, scale",
              }
            );
          }
          ScrollTrigger.refresh();
        }, 50);
      },
    });
  };

  // Determine Bento Span Class dynamically to ensure layout integrity
  const getBentoClass = (index: number, count: number) => {
    if (count === 1) return "p-bento-span-12";
    if (count === 2) return index === 0 ? "p-bento-span-8" : "p-bento-span-4";
    if (count === 3) return index === 0 ? "bento-3-featured" : "bento-3-small";

    const defaultSpans = [
      "p-bento-span-8",  // Bombay Spices (default index 0)
      "p-bento-span-4",  // Cranial Space (default index 1)
      "p-bento-span-4",  // FAMA (default index 2)
      "p-bento-span-8",  // Happihosts (default index 3)
      "p-bento-span-6",  // HotSpot Mobile (default index 4)
      "p-bento-span-6",  // Kotak Redesign (default index 5)
      "p-bento-span-4",  // Novance AI (default index 6)
      "p-bento-span-4",  // Parul University (default index 7)
      "p-bento-span-4",  // PUNCCRT (default index 8)
      "p-bento-span-8",  // Snack Stop (default index 9)
      "p-bento-span-4"   // Utility Pay (default index 10)
    ];

    return defaultSpans[index % defaultSpans.length];
  };

  return (
    <div>
      <Navigation />

      <main className="container" style={{ minHeight: "100vh" }}>
        <header className="case-study-hero reveal-up" style={{ borderBottom: "none", textAlign: "center", paddingTop: "180px", paddingBottom: "40px" }}>
          <Link href="/" className="back-btn" style={{ justifyContent: "center", marginBottom: "24px" }}>
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>

          <h1 className="hero-title">Innovation Archive</h1>
          <p className="hero-desc body-large" style={{ maxWidth: "600px", margin: "24px auto 48px" }}>
            An archive of my work, spanning product design, user research and experimental interfaces.
          </p>

          <div className="filter-container">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleFilterClick(cat.id)}
                className={`filter-pill ${activeFilter === cat.id ? "active" : ""}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </header>

        <div ref={gridRef} className="all-projects-grid reveal-up">
          {filteredProjects.map((project, index) => {
            const spanClass = getBentoClass(index, filteredProjects.length);
            const caption = projectCaptions[project.id] || project.tagline;

            return (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className={`project-card ${spanClass}`}
              >
                <Image
                  src={project.thumbnail}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="project-card-image"
                />
                <div className="project-card-info">
                  <h3>{project.name}</h3>
                  <p className="caption" style={{ color: "rgba(255,255,255,0.8)", marginBottom: "12px", marginTop: "4px" }}>
                    {caption}
                  </p>
                  <div className="project-type-pills">
                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span key={tagIndex} className="type-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer CTA Section */}
        <section id="contact" className="footer-cta container" style={{ borderTop: "1px solid var(--border-color)", marginTop: "80px" }}>
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
