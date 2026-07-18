export interface ProjectSection {
  title: string;
  type: 'text' | 'list' | 'bento' | 'vision' | 'audit' | 'features';
  content?: string;
  items?: string[];
  sidebar?: {
    title: string;
    text: string;
    style?: Record<string, string>;
  };
  layoutType?: 'bento-5' | 'bento-3' | 'bento-4' | 'single';
  variantClass?: string;
  images?: string[];
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  tags: string[];
  role: string;
  duration: string;
  tools: string[];
  projectType: string;
  gradient: string;
  accent: string;
  thumbnail: string;
  sections: ProjectSection[];
  nextProjectId: string;
  nextProjectName: string;
}

export const projects: Project[] = [
  {
    id: "cranial-space",
    name: "Cranial Space",
    tagline: "A platform designed to help UI/UX designers grow through structured feedback, community critique, and real-world design challenges.",
    tags: ["Web Platform", "UI/UX", "Community"],
    role: "Lead Designer",
    duration: "2-3 Months",
    tools: ["Figma"],
    projectType: "UX Design & Strategy",
    gradient: "linear-gradient(135deg, rgba(88,38,206,0.8), rgba(28,21,50,0.8))",
    accent: "#9D74FF",
    thumbnail: "/assets/images/projects/cranial-space.png",
    nextProjectId: "novance-ai",
    nextProjectName: "Novance AI",
    sections: [
      {
        title: "The Problem",
        type: "list",
        content: "Designers often lack a structured, reliable space to receive actionable feedback, participate in rigorous critiques, and solve practical, real-world challenges.",
        items: [
          "Fragmented feedback loops on generalist platforms.",
          "Lack of structured critique methodologies tailored for product design.",
          "Limited exposure to real-world complexities and edge cases."
        ],
        sidebar: {
          title: "Opportunity",
          text: "There is an opportunity to create a feedback-driven design growth platform rather than just another portfolio-sharing platform."
        }
      },
      {
        title: "Product Vision",
        type: "vision",
        items: [
          "**Mission:** To empower UI/UX designers through community-driven critique, structured growth opportunities and industry-relevant exposure.",
          "**Vision:** To become the global launchpad for aspiring UI/UX designers by creating a nurturing environment that bridges learning, feedback and career acceleration.",
          "**Elevator Pitch:** Cranial Space is a design-focused platform that helps UI/UX designers grow faster through structured feedback, community engagement and portfolio-building tools."
        ]
      },
      {
        title: "Research & Insights",
        type: "list",
        content: "To understand the challenges designers face, I analyzed common patterns across design communities, portfolio platforms and learning platforms. Key insights included:",
        items: [
          "Designers often rely on random feedback from social media",
          "Most critiques are subjective and inconsistent",
          "Portfolio platforms focus on presentation rather than improvement",
          "Many designers want structured learning after courses"
        ]
      },
      {
        title: "Ideation & Product Strategy",
        type: "list",
        content: "The goal during ideation was to design a platform that actively helps designers improve, rather than just showcase their work. The platform structure was designed around three main pillars: Community Critique, Structured Growth, and Portfolio Development.",
        items: [
          "A UX Scoring system to evaluate design work",
          "Structured critique frameworks for feedback",
          "Design challenges based on real-world briefs",
          "Exportable critique reports that designers can attach to portfolios",
          "Mentorship-driven growth paths"
        ]
      },
      {
        title: "Key Features",
        type: "features",
        items: [
          "**Community UX Scoring System:** Designers receive structured feedback and scoring.",
          "**Community Critique Loop:** A feedback system where designers review each other’s work.",
          "**Real-World Design Challenges:** Industry-style design briefs to build strong portfolios.",
          "**Portfolio-Ready Critique Reports:** Exportable design feedback."
        ]
      },
      {
        title: "Final Design",
        type: "bento",
        content: "The final design system was focused on clarity, accessibility, and community interaction. Below is the high-fidelity representation of the core experience.",
        layoutType: "bento-5",
        images: [
          "/assets/images/projects/cranial-center.png",
          "/assets/images/projects/cranial-analytics.png",
          "/assets/images/projects/cranial-community.png",
          "/assets/images/projects/cranial-feedbacks.png",
          "/assets/images/projects/cranial-dashboard.png"
        ]
      },
      {
        title: "Expected Impact",
        type: "text",
        content: "Creates a centralized, growth-oriented hub that fosters mentorship, rigorous design thinking, and high-quality discussions. It aims to accelerate designers' career path from entry-level to industry-ready."
      }
    ]
  },
  {
    id: "novance-ai",
    name: "Novance AI",
    tagline: "An AI-powered financial assistant that helps users understand, track, and improve their financial health with intuitive insights.",
    tags: ["Dashboard", "FinTech", "AI"],
    role: "UI/UX Designer",
    duration: "2-3 Months",
    tools: ["Figma"],
    projectType: "Product Design",
    gradient: "linear-gradient(135deg, rgba(0,183,168,0.8), rgba(4,41,40,0.8))",
    accent: "#00E5D1",
    thumbnail: "/assets/images/projects/novance-ai.png",
    nextProjectId: "parul-university",
    nextProjectName: "Parul University Student Portal",
    sections: [
      {
        title: "The Problem",
        type: "list",
        content: "Users find it overwhelmingly complex to analyze personal finances across multiple accounts and rely on generic advice rather than personalized insights.",
        items: [
          "Data overload with static, difficult-to-read charts.",
          "Reactive rather than proactive financial tracking.",
          "Lack of personalized, contextual financial strategies."
        ]
      },
      {
        title: "UX Audit & Ideation",
        type: "audit",
        items: [
          "**What works:** Core dashboard layout and basic transaction history tracking.",
          "**What doesn't work:** High cognitive load due to complex charts, and lack of clear calls-to-action.",
          "**Proposed solution:** Simplify charts, use a card-based layout for insights, and introduce a floating action button for quick tasks."
        ]
      },
      {
        title: "Final Design",
        type: "bento",
        content: "The final dashboard layout optimizes data accessibility, providing simple navigation, real-time insights, and personalized suggestions.",
        layoutType: "single",
        images: [
          "/assets/images/projects/novance-ai.png"
        ]
      },
      {
        title: "Expected Impact",
        type: "list",
        content: "Empowers users with clear, actionable AI-driven financial insights that improve decision-making and savings rates. Key objectives achieved:",
        items: [
          "Reduced financial analysis time for users.",
          "Increased adoption of proactive budgeting habits.",
          "Improved visual clarity and decreased overall cognitive load."
        ]
      },
      {
        title: "Reflections & Learnings",
        type: "text",
        content: "This project emphasized the challenge of balancing complex financial data with clean design. Simplifying information visualization was critical to ensuring the assistant remains friendly and helpful."
      }
    ]
  },
  {
    id: "parul-university",
    name: "Parul University Student Portal",
    tagline: "A redesigned university dashboard focused on improving usability, accessibility, and information hierarchy for students.",
    tags: ["Redesign", "Web App", "Education"],
    role: "Lead UI/UX Designer",
    duration: "2-3 Months",
    tools: ["Figma"],
    projectType: "Academic Portal Redesign",
    gradient: "linear-gradient(135deg, rgba(212,50,60,0.8), rgba(43,9,12,0.8))",
    accent: "#FF4D5A",
    thumbnail: "/assets/images/projects/parul-university.png",
    nextProjectId: "fama-agriculture",
    nextProjectName: "FAMA – Agricultural Platform",
    sections: [
      {
        title: "Problem Statement",
        type: "list",
        content: "The legacy student portal was cluttered, non-responsive, and made critical tasks like course registration and grading difficult to navigate.",
        items: [
          "Poor information hierarchy leading to high cognitive load.",
          "Lack of responsive design for mobile devices.",
          "Accessibility issues hindering visually impaired students."
        ],
        sidebar: {
          title: "Why This Matters",
          text: "A student portal is central to college life. If it is hard to use, students experience daily frustration and miss deadlines."
        }
      },
      {
        title: "Design Goals",
        type: "list",
        content: "We established three core pillars for the portal overhaul:",
        items: [
          "Streamlined navigation",
          "WCAG compliance and accessibility",
          "Mobile-first responsive design"
        ]
      },
      {
        title: "UX Audit of the Existing Portal",
        type: "audit",
        items: [
          "**Homepage Clutter:** Too many links on the homepage with identical icons.",
          "**Navigation:** Critical sections like fee payment were buried deep within the menu.",
          "**Mobile Layout:** Text overflow and tiny buttons made the site unusable on phones."
        ]
      },
      {
        title: "Ideation & Exploration",
        type: "list",
        content: "We restructured the portal map, moving primary functions to a left-side sticky navigation panel. We designed card-based components to aggregate courses, attendance, and fee alerts into quick-view widgets.",
        items: [
          "Redesigned course enrollment steps into a progressive wizard.",
          "Optimized color contrast and added screen reader descriptions.",
          "Simplified dashboard view for quick scanability."
        ]
      },
      {
        title: "Final Design",
        type: "bento",
        content: "The final layout integrates dynamic widgets, clear typography, and a simplified workflow to reduce student task completion time.",
        layoutType: "single",
        images: [
          "/assets/images/projects/parul-university.png"
        ]
      },
      {
        title: "Reflections & Learnings",
        type: "text",
        content: "Redesigning a portal with an established user base requires a balance between modern visual standards and user familiarity. User testing showed that progressive disclosure was highly effective in simplifying complex forms."
      }
    ]
  },
  {
    id: "fama-agriculture",
    name: "FAMA – Agricultural Platform",
    tagline: "A web platform promoting sustainable agriculture and connecting communities with responsible farming initiatives.",
    tags: ["Web Platform", "Sustainability", "Community"],
    role: "Lead Designer",
    duration: "2-3 Months",
    tools: ["Figma"],
    projectType: "Eco-Platform Design",
    gradient: "linear-gradient(135deg, rgba(46,163,84,0.8), rgba(12,41,20,0.8))",
    accent: "#4DEB7E",
    thumbnail: "/assets/images/projects/fama.png",
    nextProjectId: "happihosts",
    nextProjectName: "Happihosts",
    sections: [
      {
        title: "The Problem",
        type: "list",
        content: "Local farmers struggled to connect with eco-conscious consumers, and consumers lacked transparency regarding farming practices.",
        items: [
          "Fragmented supply chain communication.",
          "Lack of educational resources on sustainable methods.",
          "Difficulty in verifying eco-friendly practices."
        ],
        sidebar: {
          title: "Why This Matters",
          text: "Sustainable agriculture benefits both the environment and local economies. Connecting community members directly with farms helps promote local food security and transparent practices."
        }
      },
      {
        title: "Design Goals",
        type: "list",
        content: "The primary design targets were set to establish:",
        items: [
          "Transparent supply chain UI",
          "Community building features",
          "Educational resource center"
        ]
      },
      {
        title: "Final Design",
        type: "bento",
        content: "The final design focuses on presenting agricultural initiatives through a structured and engaging digital experience.",
        layoutType: "bento-3",
        images: [
          "/assets/images/projects/fama-center.png",
          "/assets/images/projects/fama-landing.png",
          "/assets/images/projects/fama-about.png"
        ]
      },
      {
        title: "Expected Impact",
        type: "list",
        content: "Bridged the gap between local sustainable farms and consumers, fostering community engagement and increasing local farm revenue.",
        items: [
          "Improved connection between farms and communities",
          "Increased support for sustainable farming methods",
          "Better access to local organic produce"
        ]
      }
    ]
  },
  {
    id: "happihosts",
    name: "Happihosts",
    tagline: "An event management platform for creating, managing, and tracking invitations and RSVPs seamlessly.",
    tags: ["Web App", "Event Management", "SaaS"],
    role: "Lead UX Designer",
    duration: "2-3 Months",
    tools: ["Figma"],
    projectType: "SaaS Application",
    gradient: "linear-gradient(135deg, rgba(234,131,45,0.8), rgba(53,24,5,0.8))",
    accent: "#FFAA5A",
    thumbnail: "/assets/images/projects/happihosts.png",
    nextProjectId: "bombay-spices",
    nextProjectName: "Bombay Spices Dashboard",
    sections: [
      {
        title: "The Problem",
        type: "list",
        content: "Organizing events involves juggling multiple tools for invitations, tracking, and communication, leading to disorganized planning.",
        items: [
          "Disconnected guest lists and RSVP tracking.",
          "Inefficient communication channels with attendees.",
          "Lack of real-time update mechanisms."
        ],
        sidebar: {
          title: "The Vision",
          text: "An all-in-one hub that makes hosting stress-free and invitation flows delightful for guests."
        }
      },
      {
        title: "Design Goals",
        type: "list",
        content: "We targeted three specific operational goals:",
        items: [
          "Unified host dashboard",
          "Real-time RSVP tracking UI",
          "Seamless communication tools"
        ]
      },
      {
        title: "Final Design",
        type: "bento",
        content: "The final platform delivers a singular, unified platform that simplified event creation, enabling hosts to manage RSVPs with an elegant UI.",
        layoutType: "bento-5",
        images: [
          "/assets/images/projects/happihosts-cover.png",
          "/assets/images/projects/happihosts-dash.png",
          "/assets/images/projects/happihosts-editor.png",
          "/assets/images/projects/happihosts-library.png",
          "/assets/images/projects/happihosts-overview.png"
        ]
      },
      {
        title: "Expected Impact",
        type: "text",
        content: "Streamlines RSVP tracking, coordinates attendee communication, and provides hosts with actionable guest stats in real-time."
      }
    ]
  },
  {
    id: "bombay-spices",
    name: "Bombay Spices Dashboard",
    tagline: "A loyalty and customer engagement dashboard for retail businesses to track rewards, promotions, and customer behavior.",
    tags: ["Dashboard", "B2B", "Analytics"],
    role: "UI/UX Designer",
    duration: "3-4 Weeks",
    tools: ["Figma"],
    projectType: "Internship Project",
    gradient: "linear-gradient(135deg, rgba(168,64,32,0.8), rgba(50,18,8,0.8))",
    accent: "#FF7344",
    thumbnail: "/assets/images/projects/bombay-spices.png",
    nextProjectId: "snackstop-erp",
    nextProjectName: "SnackStop ERP Dashboard",
    sections: [
      {
        title: "Problem Statement",
        type: "list",
        content: "Retail businesses often struggle to maintain long-term customer engagement and encourage repeat purchases. Without a structured loyalty program, customers have limited incentives to return regularly.",
        items: [
          "Customers had no visibility into loyalty rewards.",
          "Promotions were not personalized.",
          "Businesses lacked insights into customer purchase behavior.",
          "Engagement between customers and the brand was limited."
        ],
        sidebar: {
          title: "Why This Matters",
          text: "Customer loyalty programs help businesses retain customers, increase repeat purchases and build long-term relationships."
        }
      },
      {
        title: "Design Goals",
        type: "list",
        content: "The primary objectives for designing the loyalty platform were to:",
        items: [
          "Create a digital loyalty program",
          "Improve customer engagement with the brand",
          "Provide visibility into rewards and offers",
          "Enable personalized promotions"
        ]
      },
      {
        title: "Ideation & Exploration",
        type: "list",
        content: "The ideation phase focused on designing a platform that makes loyalty rewards easy to understand and redeem.",
        items: [
          "Digital reward tracking",
          "Personalized tracking",
          "Simple loyalty point redemption system"
        ]
      },
      {
        title: "Wireframes",
        type: "list",
        content: "Wireframes were created to explore the layout and navigation of the loyalty platform. Key considerations included:",
        items: [
          "Highlighting loyalty points prominently",
          "Making reward redemption easy",
          "Structuring promotional offers clearly"
        ]
      },
      {
        title: "Final Design",
        type: "bento",
        content: "The final design focuses on improving customer engagement through a digital loyalty experience.",
        layoutType: "bento-5",
        images: [
          "/assets/images/projects/bombay-dashboard.png",
          "/assets/images/projects/bombay-analytics.png",
          "/assets/images/projects/bombay-inventory.png",
          "/assets/images/projects/bombay-loyalty.png",
          "/assets/images/projects/bombay-offers.png"
        ]
      },
      {
        title: "Expected Impact",
        type: "list",
        content: "The platform could potentially lead to:",
        items: [
          "Increased customer retention",
          "Higher engagement with promotions",
          "Better visibility into customer behavior"
        ]
      },
      {
        title: "Reflections & Learnings",
        type: "text",
        content: "This project helped me understand how loyalty systems can influence customer behavior and drive repeat purchases."
      }
    ]
  },
  {
    id: "snackstop-erp",
    name: "SnackStop ERP Dashboard",
    tagline: "A centralized analytics dashboard for retail chains to monitor sales, inventory, and performance across stores.",
    tags: ["Dashboard", "ERP", "Enterprise"],
    role: "UI/UX Designer",
    duration: "2-3 Months",
    tools: ["Figma"],
    projectType: "Enterprise Dashboard",
    gradient: "linear-gradient(135deg, rgba(41,105,176,0.8), rgba(9,27,47,0.8))",
    accent: "#61A5FA",
    thumbnail: "/assets/images/projects/snack-stop.png",
    nextProjectId: "hotspot-mobile",
    nextProjectName: "HotSpot Mobile",
    sections: [
      {
        title: "Problem Statement",
        type: "list",
        content: "Franchise owners required an enterprise-grade solution to monitor complex inventory and sales data across multiple regions without feeling overwhelmed.",
        items: [
          "High cognitive load from raw data tables.",
          "Difficulty in spotting inventory anomalies.",
          "Slow reporting leading to delayed operational decisions."
        ],
        sidebar: {
          title: "Core Challenge",
          text: "Transforming dense, multi-regional operational records into structured visual snapshots for fast action."
        }
      },
      {
        title: "Design Goals",
        type: "list",
        content: "The system targets three operational outcomes:",
        items: [
          "Scalable architecture",
          "Predictive analytics UI",
          "Macro to micro data drill-down"
        ]
      },
      {
        title: "UX Audit & Ideation",
        type: "audit",
        items: [
          "**Dense tables:** Text heavy tables with no visual highlights make error detection slow.",
          "**Context Switching:** Users had to switch tabs repeatedly to compare inventory vs sales.",
          "**Proposed Solution:** Build a unified panel with responsive inventory alerts and synced charts."
        ]
      },
      {
        title: "Final Design",
        type: "bento",
        content: "The final ERP dashboard interface features clean data widgets, threshold indicator colors, and visual graphs for real-time tracking.",
        layoutType: "single",
        images: [
          "/assets/images/projects/snack-stop.png"
        ]
      },
      {
        title: "Expected Impact",
        type: "list",
        content: "Streamlined inventory management with visual alerts and predictive insights, leading to:",
        items: [
          "Reduced stockout events by 25%.",
          "Improved store performance auditing times.",
          "Higher usability satisfaction scores from store owners."
        ]
      },
      {
        title: "Reflections & Learnings",
        type: "text",
        content: "Creating dashboards for business-critical operations requires minimizing screen noise. Visual indicators like color thresholds proved crucial in allowing managers to audit stores quickly."
      }
    ]
  },
  {
    id: "hotspot-mobile",
    name: "HotSpot Mobile",
    tagline: "A nightlife discovery app helping users find events, track crowds, and explore venues in real-time.",
    tags: ["Mobile App", "Consumer", "Maps"],
    role: "Lead UI/UX Designer",
    duration: "2-3 Months",
    tools: ["Figma"],
    projectType: "Mobile Design",
    gradient: "linear-gradient(135deg, rgba(181,23,158,0.8), rgba(57,5,49,0.8))",
    accent: "#FF4DF0",
    thumbnail: "/assets/images/projects/hotspot-mobile.png",
    nextProjectId: "kotak-redesign",
    nextProjectName: "Kotak Mahindra Bank App",
    sections: [
      {
        title: "The Problem",
        type: "list",
        content: "Users struggled to gauge the true vibe and crowd level of nightlife venues before physically arriving.",
        items: [
          "Stale information on standard review platforms.",
          "Lack of real-time social proof and dynamic mapping.",
          "Poor search filtering for specific nightlife experiences."
        ]
      },
      {
        title: "Design Goals",
        type: "list",
        content: "We prioritized three core aspects of the mobile experience:",
        items: [
          "Real-time heatmap integration",
          "Engaging social feed",
          "Frictionless discovery"
        ]
      },
      {
        title: "UX Audit of the Existing System",
        type: "audit",
        items: [
          "**Map Loading:** Complex visual styles delayed loading times on mobile networks.",
          "**List vs Map:** Disconnected search toggles confused users trying to map lists.",
          "**Proposed Improvements:** Implement a map-first navigation layout with toggle cards overlay."
        ]
      },
      {
        title: "Ideation & Exploration",
        type: "list",
        content: "We designed a dark-themed UI to match the night-out context, incorporating neon accent colors. Wireframes explored a split map/list interface and crowd-density indicators.",
        items: [
          "Interactive map showing color-coded hot zones.",
          "Vibe-check card tags based on live visitor surveys.",
          "One-tap ticket booking and rideshare integration."
        ]
      },
      {
        title: "Final Design",
        type: "bento",
        content: "The final design features a responsive map interface, neon highlights, and custom widgets built to capture the nightlife energy.",
        layoutType: "single",
        images: [
          "/assets/images/projects/hotspot-mobile.png"
        ]
      },
      {
        title: "Expected Impact",
        type: "text",
        content: "Created an engaging, vibrant map-centric interface that provides real-time heatmaps and social updates, reducing user arrival disappointment."
      },
      {
        title: "Reflections & Learnings",
        type: "text",
        content: "Designing for night use requires custom contrast schemes. The dark UI was not only an aesthetic choice but also a functional requirement for low-light usability."
      }
    ]
  },
  {
    id: "kotak-redesign",
    name: "Kotak Mahindra Bank App",
    tagline: "A simplified and user-friendly redesign of a banking app focusing on clarity, accessibility, and seamless transactions.",
    tags: ["Redesign", "Mobile App", "FinTech"],
    role: "Lead UI/UX Designer",
    duration: "2-3 Months",
    tools: ["Figma"],
    projectType: "Mobile Redesign",
    gradient: "linear-gradient(135deg, rgba(204,0,0,0.8), rgba(60,4,4,0.8))",
    accent: "#FF4D4D",
    thumbnail: "/assets/images/projects/kotak-redesign.png",
    nextProjectId: "utility-pay",
    nextProjectName: "Utility Pay",
    sections: [
      {
        title: "Problem Statement",
        type: "list",
        content: "The existing banking app was feature-heavy, visually cluttered, and made core actions like transferring money tedious.",
        items: [
          "Cluttered home screen prioritizing low-usage features.",
          "Multi-step, friction-heavy transaction flows.",
          "Inconsistent design language across modules."
        ],
        sidebar: {
          title: "Challenge",
          text: "Simplifying a highly complex portal without dropping business-critical features or alienating veteran users."
        }
      },
      {
        title: "Design Goals",
        type: "list",
        content: "We established three visual and functional guidelines:",
        items: [
          "Simplify core flows",
          "Unify design system",
          "Enhance accessibility"
        ]
      },
      {
        title: "UX Audit of the Existing App",
        type: "audit",
        items: [
          "**Visual Noise:** Banner ads took up 30% of the screen estate.",
          "**Transaction Steps:** Sending money to a contact required 6 taps.",
          "**Contrast Issues:** Tiny font and low contrast made readability poor for older users."
        ]
      },
      {
        title: "Ideation & Exploration",
        type: "list",
        content: "We restructured the homepage into custom segments: Quick Actions, Account Summary, and Useful Tools. We mapped out a 3-tap money transfer path.",
        items: [
          "Simplified money transfers via contact selection.",
          "Card details display toggles for privacy.",
          "Unified color palette using Kotak's red and blue."
        ]
      },
      {
        title: "Final Design",
        type: "bento",
        content: "The final application interface balances security requirements with frictionless UI, making everyday banking tasks feel immediate.",
        layoutType: "single",
        images: [
          "/assets/images/projects/kotak-redesign.png"
        ]
      },
      {
        title: "Reflections & Learnings",
        type: "text",
        content: "FinTech designs must prioritize trust. Every micro-transaction requires clear status feedback to ensure the user feels secure during their journey."
      }
    ]
  },
  {
    id: "utility-pay",
    name: "Utility Pay",
    tagline: "A bill management app that helps users track, manage, and pay multiple utilities in one place.",
    tags: ["Mobile App", "FinTech", "Utility"],
    role: "Lead UI/UX Designer",
    duration: "2-3 Months",
    tools: ["Figma"],
    projectType: "Mobile Application",
    gradient: "linear-gradient(135deg, rgba(15,163,180,0.8), rgba(4,45,50,0.8))",
    accent: "#38EDFC",
    thumbnail: "/assets/images/projects/utility-pay.png",
    nextProjectId: "punccrt",
    nextProjectName: "PUNCCRT",
    sections: [
      {
        title: "Problem Statement",
        type: "list",
        content: "Tracking multiple utility bills across different provider portals leads to missed payments and user frustration.",
        items: [
          "Fragmented payment platforms.",
          "Lack of centralized payment reminders.",
          "Difficulty in analyzing month-over-month utility spending."
        ]
      },
      {
        title: "Design Goals",
        type: "list",
        content: "The project focus was divided into three areas:",
        items: [
          "Centralized bill tracking",
          "Automated payment UI",
          "Spend analysis charts"
        ]
      },
      {
        title: "Research & Insights",
        type: "list",
        content: "Interviews with 12 households revealed that 75% of them had missed at least one bill in the last 6 months because they forgot due dates. Key insights:",
        items: [
          "Centralized tracking is preferred over auto-debit due to cash flow control concerns.",
          "Visualizing consumption trends drives users to save energy.",
          "Fast transaction receipts are vital to relieve payment anxiety."
        ]
      },
      {
        title: "Ideation & Exploration",
        type: "list",
        content: "We explored cards showing pending dues with clear deadline alerts. Spend analysis was mapped using bar and area charts for monthly comparisons.",
        items: [
          "Color-coded urgency alerts (red for overdue, yellow for upcoming, green for paid).",
          "Simple transaction verification step.",
          "Easy bill split options for shared apartments."
        ]
      },
      {
        title: "Final Design",
        type: "bento",
        content: "The final app features a clean, blue-green gradient, clear alerts, and an analytical dashboard for financial planning.",
        layoutType: "single",
        images: [
          "/assets/images/projects/utility-pay.png"
        ]
      },
      {
        title: "Reflections & Learnings",
        type: "text",
        content: "Simplifying utility tracking helps users stay on top of bills and reduces payment friction. Providing cash flow transparency increases user confidence in digital wallet applications."
      }
    ]
  },
  {
    id: "punccrt",
    name: "PUNCCRT",
    tagline: "Designed the official website for Parul University's National Conference on Cancer Research & Therapy (PUNCCRT 2025) to streamline schedules, abstract submissions, and collaborations.",
    tags: ["Web Design", "Conference", "Academic"],
    role: "Lead Designer",
    duration: "2-3 Weeks",
    tools: ["Figma"],
    projectType: "Academic Website",
    gradient: "linear-gradient(135deg, rgba(88,38,206,0.8), rgba(28,21,50,0.8))",
    accent: "#9D74FF",
    thumbnail: "/assets/images/projects/punccrt.png",
    nextProjectId: "cranial-space",
    nextProjectName: "Cranial Space",
    sections: [
      {
        title: "Problem Statement",
        type: "list",
        content: "The main challenge of the project was to design a website that could present complex academic information in a structured and accessible way while maintaining a professional and credible visual identity suitable for a scientific conference. The platform needed to accommodate multiple types of users with different goals.",
        items: [
          "Presenting large amounts of academic information without overwhelming users.",
          "Accommodating diverse user needs (Researchers, Clinicians, Students).",
          "Ensuring abstract submission and registration were easily accessible.",
          "Maintaining a professional, academic tone."
        ],
        sidebar: {
          title: "Why This Matters",
          text: "As the primary digital touchpoint for the conference, the website needed to communicate clearly to a diverse audience and ensure users could quickly navigate through complex academic sections without confusion."
        }
      },
      {
        title: "Understanding The Users",
        type: "list",
        content: "The conference website needed to cater to a diverse group of users, each with different needs and expectations:",
        items: [
          "**Researchers / Academicians:** Interested in conference themes, submission guidelines and presentation opportunities.",
          "**Healthcare Professionals / Clinicians:** Focused on exploring discussions around therapy and treatment advancements.",
          "**Students:** Looking for learning opportunities and exposure to current research.",
          "**General Participants:** Required quick access to event schedules, speaker info and registration."
        ]
      },
      {
        title: "Information Architecture",
        type: "text",
        content: "To make the website easy to navigate, the information was structured into clear and logical sections. The structure included key sections such as the homepage, conference overview, speaker information, call for abstracts, conference schedule, registration details and contact information. Organizing the content helped ensure users could quickly locate important information without searching through large amounts of text."
      },
      {
        title: "Visual Design & Layout",
        type: "list",
        content: "Wireframes defined the layout, ensuring key sections like the conference overview, abstract submission info and registration links were prominently placed. The visual design aimed to create a professional and trustworthy appearance.",
        items: [
          "Clean layout to improve readability and scanability.",
          "Typography chosen to maintain clarity across headings and body text.",
          "Color palette selected to reflect a formal, research-oriented tone.",
          "Clear visual hierarchy to highlight important actions."
        ]
      },
      {
        title: "Final Design & Outcome",
        type: "bento",
        content: "The final website provides a structured and user-friendly platform. The homepage introduces the conference and highlights key dates and themes. Dedicated sections provide detailed information about speakers, schedules and submission guidelines. By organizing content clearly, the website makes it easier for researchers, clinicians and participants to engage with the conference.",
        layoutType: "bento-3",
        variantClass: "punccrt-variant",
        images: [
          "/assets/images/projects/punccrt/cover.png",
          "/assets/images/projects/punccrt/theme.png",
          "/assets/images/projects/punccrt/overview.png"
        ]
      },
      {
        title: "Reflections & Learnings",
        type: "text",
        content: "Working on the PUNCCRT 2025 conference website provided valuable experience in designing a platform for a real academic event. The project required structuring large amounts of information in a way that remains accessible for a diverse group. It highlighted the importance of clarity and structure when presenting academic content."
      }
    ]
  }
];
