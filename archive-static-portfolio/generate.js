var fso = new ActiveXObject("Scripting.FileSystemObject");
var ForReading = 1, ForWriting = 2;

var projects = [
  { id: "cranial-space", name: "Cranial Space", tagline: "A platform designed to help UI/UX designers grow through structured feedback, community critique, and real-world design challenges.", tags: ["Web Platform", "UI/UX", "Community"], problem: "Designers often lack a structured, reliable space to receive actionable feedback, participate in rigorous critiques, and solve practical, real-world challenges.", impact: "Creates a centralized, growth-oriented hub that fosters mentorship, rigorous design thinking, and high-quality discussions.", gradient: "linear-gradient(135deg, rgba(88,38,206,0.8), rgba(28,21,50,0.8))", accent: "#9D74FF", nextId: "novance-ai", nextName: "Novance AI" },
  { id: "novance-ai", name: "Novance AI", tagline: "An AI-powered financial assistant that helps users understand, track, and improve their financial health with intuitive insights.", tags: ["Dashboard", "FinTech", "AI"], problem: "Users find it overwhelmingly complex to analyze personal finances across multiple accounts and rely on generic advice rather than personalized insights.", impact: "Empowers users with clear, actionable AI-driven financial insights that improve decision-making and savings rates.", gradient: "linear-gradient(135deg, rgba(0,183,168,0.8), rgba(4,41,40,0.8))", accent: "#00E5D1", nextId: "parul-university", nextName: "Parul University Student Portal" },
  { id: "parul-university", name: "Parul University Student Portal", tagline: "A redesigned university dashboard focused on improving usability, accessibility, and information hierarchy for students.", tags: ["Redesign", "Web App", "Education"], problem: "The legacy student portal was cluttered, non-responsive, and made critical tasks like course registration and grading difficult to navigate.", impact: "Reduced task completion time by 40% and significantly improved student satisfaction through a clean, accessible interface.", gradient: "linear-gradient(135deg, rgba(212,50,60,0.8), rgba(43,9,12,0.8))", accent: "#FF4D5A", nextId: "fama-agriculture", nextName: "FAMA – Agricultural Platform" },
  { id: "fama-agriculture", name: "FAMA – Agricultural Platform", tagline: "A web platform promoting sustainable agriculture and connecting communities with responsible farming initiatives.", tags: ["Web Platform", "Sustainability", "Community"], problem: "Local farmers struggled to connect with eco-conscious consumers, and consumers lacked transparency regarding farming practices.", impact: "Bridged the gap between local sustainable farms and consumers, fostering community engagement and increasing local farm revenue.", gradient: "linear-gradient(135deg, rgba(46,163,84,0.8), rgba(12,41,20,0.8))", accent: "#4DEB7E", nextId: "happihosts", nextName: "Happihosts" },
  { id: "happihosts", name: "Happihosts", tagline: "An event management platform for creating, managing, and tracking invitations and RSVPs seamlessly.", tags: ["Web App", "Event Management", "SaaS"], problem: "Organizing events involves juggling multiple tools for invitations, tracking, and communication, leading to disorganized planning.", impact: "Delivered a singular, unified platform that simplified event creation, enabling hosts to manage RSVPs with an elegant UI.", gradient: "linear-gradient(135deg, rgba(234,131,45,0.8), rgba(53,24,5,0.8))", accent: "#FFAA5A", nextId: "bombay-spices", nextName: "Bombay Spices Dashboard" },
  { id: "bombay-spices", name: "Bombay Spices Dashboard", tagline: "A loyalty and customer engagement dashboard for retail businesses to track rewards, promotions, and customer behavior.", tags: ["Dashboard", "B2B", "Analytics"], problem: "Retail managers lacked a centralized tool to view customer loyalty metrics and measure the effectiveness of active promotions.", impact: "Optimized promotional strategies by providing actionable visual metrics that directly improved customer retention rates.", gradient: "linear-gradient(135deg, rgba(168,64,32,0.8), rgba(50,18,8,0.8))", accent: "#FF7344", nextId: "snackstop-erp", nextName: "SnackStop ERP Dashboard" },
  { id: "snackstop-erp", name: "SnackStop ERP Dashboard", tagline: "A centralized analytics dashboard for retail chains to monitor sales, inventory, and performance across stores.", tags: ["Dashboard", "ERP", "Enterprise"], problem: "Franchise owners required an enterprise-grade solution to monitor complex inventory and sales data across multiple regions without feeling overwhelmed.", impact: "Streamlined inventory management with visual alerts and predictive insights, reducing stockouts by 25%.", gradient: "linear-gradient(135deg, rgba(41,105,176,0.8), rgba(9,27,47,0.8))", accent: "#61A5FA", nextId: "hotspot-mobile", nextName: "HotSpot Mobile" },
  { id: "hotspot-mobile", name: "HotSpot Mobile", tagline: "A nightlife discovery app helping users find events, track crowds, and explore venues in real-time.", tags: ["Mobile App", "Consumer", "Maps"], problem: "Users struggled to gauge the true vibe and crowd level of nightlife venues before physically arriving.", impact: "Created an engaging, vibrant map-centric interface that provides real-time heatmaps and social updates.", gradient: "linear-gradient(135deg, rgba(181,23,158,0.8), rgba(57,5,49,0.8))", accent: "#FF4DF0", nextId: "kotak-redesign", nextName: "Kotak Mahindra Bank App" },
  { id: "kotak-redesign", name: "Kotak Mahindra Bank App", tagline: "A simplified and user-friendly redesign of a banking app focusing on clarity, accessibility, and seamless transactions.", tags: ["Redesign", "Mobile App", "FinTech"], problem: "The existing banking app was feature-heavy, visually cluttered, and made core actions like transferring money tedious.", impact: "Redefined the banking experience into an intuitive, accessible layout, minimizing the steps required for essential banking operations.", gradient: "linear-gradient(135deg, rgba(204,0,0,0.8), rgba(60,4,4,0.8))", accent: "#FF4D4D", nextId: "utility-pay", nextName: "Utility Pay" },
  { id: "utility-pay", name: "Utility Pay", tagline: "A bill management app that helps users track, manage, and pay multiple utilities in one place.", tags: ["Mobile App", "FinTech", "Utility"], problem: "Tracking multiple utility bills across different provider portals leads to missed payments and user frustration.", impact: "Designed an elegant, unified dashboard that securely consolidates tracking and automates payment flows.", gradient: "linear-gradient(135deg, rgba(15,163,180,0.8), rgba(4,45,50,0.8))", accent: "#38EDFC", nextId: "cranial-space", nextName: "Cranial Space" }
];

for (var i = 0; i < projects.length; i++) {
  var p = projects[i];
  var template = "";
  template += "<!DOCTYPE html>\n";
  template += "<html lang='en'>\n";
  template += "<head>\n";
  template += "  <meta charset='UTF-8'>\n";
  template += "  <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n";
  template += "  <title>" + p.name + " - Case Study</title>\n";
  template += "  <link rel='stylesheet' href='css/global.css'>\n";
  template += "  <link rel='stylesheet' href='css/case-study.css'>\n";
  template += "  <style>\n";
  template += "    html.lenis { height: auto; }\n";
  template += "    .lenis.lenis-smooth { scroll-behavior: auto; }\n";
  template += "    .lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }\n";
  template += "    .lenis.lenis-stopped { overflow: hidden; }\n";
  template += "    nav { position: fixed; top: 0; width: 100%; padding: var(--space-md) 0; z-index: 100; background: rgba(5, 5, 5, 0.8); backdrop-filter: blur(20px); border-bottom: 1px solid var(--glass-border); }\n";
  template += "    .nav-container { display: flex; justify-content: space-between; align-items: center; }\n";
  template += "    .logo { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; }\n";
  template += "  </style>\n";
  template += "</head>\n";
  template += "<body>\n";
  template += "  <div class='custom-cursor'></div>\n";
  template += "  <nav><div class='container nav-container'><a href='index.html' class='logo'>ND.</a></div></nav>\n";

  template += "  <main>\n";

  template += "    <section class='cs-hero'>\n";
  template += "      <div class='cs-bg' style='background: " + p.gradient + "'></div>\n";
  template += "      <div class='container'>\n";
  template += "        <a href='index.html' class='back-btn reveal-up'>← Back to Portfolio</a>\n";
  template += "        <h1 class='cs-title reveal-up'>" + p.name + "</h1>\n";
  template += "        <p class='cs-tagline reveal-up'>" + p.tagline + "</p>\n";
  template += "        <div class='cs-meta reveal-up'>\n";
  template += "          <div class='cs-meta-item'><span class='cs-meta-label'>Role</span><span class='cs-meta-value'>Lead Designer</span></div>\n";
  template += "          <div class='cs-meta-item'><span class='cs-meta-label'>Type</span><span class='cs-meta-value'>" + p.tags[0] + "</span></div>\n";
  template += "          <div class='cs-meta-item'><span class='cs-meta-label'>Duration</span><span class='cs-meta-value'>2-3 Months</span></div>\n";
  template += "        </div>\n";
  template += "      </div>\n";
  template += "    </section>\n";

  template += "    <section class='cs-content-section container reveal-up'>\n";
  template += "      <div class='cs-grid'>\n";
  template += "        <div class='cs-sidebar'><h3>The Problem</h3></div>\n";
  template += "        <div class='cs-bodytext'><p>" + p.problem + "</p></div>\n";
  template += "      </div>\n";
  template += "    </section>\n";

  template += "    <section class='cs-content-section container reveal-up'>\n";
  template += "      <div class='cs-mockup glass-panel'>\n";
  template += "        <div style='width: 100%; height: 500px; display: flex; align-items: center; justify-content: center; background: " + p.gradient + "'>\n";
  template += "           <h2 style='font-size: 2rem; color: #fff; mix-blend-mode: overlay;'>Product Mockup Preview</h2>\n";
  template += "        </div>\n";
  template += "      </div>\n";
  template += "    </section>\n";

  template += "    <section class='cs-content-section container reveal-up'>\n";
  template += "      <div class='cs-grid'>\n";
  template += "        <div class='cs-sidebar'><h3 style='color: " + p.accent + "'>Expected Impact</h3></div>\n";
  template += "        <div class='cs-bodytext'><p>" + p.impact + "</p></div>\n";
  template += "      </div>\n";
  template += "    </section>\n";

  template += "    <a href='" + p.nextId + ".html' class='next-project reveal-up' style='display: block'>\n";
  template += "      <div class='container'>\n";
  template += "        <h4>Next Project</h4>\n";
  template += "        <h2>" + p.nextName + "</h2>\n";
  template += "      </div>\n";
  template += "    </a>\n";

  template += "  </main>\n";
  template += "  <footer style='padding: var(--space-xl) 0; border-top: 1px solid var(--glass-border); text-align: center;'><div class='container'><p class='copyright'>&copy; 2026 Nivrutti Dandekar.</p></div></footer>\n";
  template += "  <script src='https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js'></script>\n";
  template += "  <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js'></script>\n";
  template += "  <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js'></script>\n";
  template += "  <script>\n";
  template += "    const lenis = new Lenis({ duration: 1.2, smooth: true });\n";
  template += "    function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }\n";
  template += "    requestAnimationFrame(raf);\n";
  template += "    gsap.registerPlugin(ScrollTrigger);\n";
  template += "    const cursor = document.querySelector('.custom-cursor');\n";
  template += "    if(cursor) {\n";
  template += "      document.addEventListener('mousemove', e => { gsap.to(cursor, {x: e.clientX, y: e.clientY, duration: 0.1, ease: 'power2.out'}); });\n";
  template += "    }\n";
  template += "    gsap.from('.reveal-up', {\n";
  template += "      y: 40, opacity: 0, duration: 1, stagger: 0.1, ease: 'power3.out',\n";
  template += "      scrollTrigger: { trigger: 'body', start: 'top 80%' }\n";
  template += "    });\n";
  template += "    document.querySelectorAll('.cs-content-section.reveal-up').forEach(el => {\n";
  template += "      gsap.fromTo(el, {y: 60, opacity: 0}, {y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' }});\n";
  template += "    });\n";
  template += "  </script>\n";
  template += "</body>\n";
  template += "</html>\n";

  var f = fso.OpenTextFile(p.id + ".html", ForWriting, true);
  f.Write(template);
  f.Close();
}
WScript.Echo("Finished generating 10 physical HTML pages.");
