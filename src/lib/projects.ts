import type { StaticImageData } from "next/image";

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  desc: string;
  longDesc: string;
  hrefDemo?: string;
  hrefCode?: string;
  coverImage: string;
  challenges: string[];
  learnings: string[];
  images: string[];
  outcomes: string[];
};

export const projects: Project[] = [
  {
    slug: "blue-bird-haus",
    title: "Blue Bird Haus",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Appwrite",
      "Resend",
      "CI/CD",
      "Figma",
    ],
    desc: "Modern sushi restaurant site with smart reservations and an admin panel.",
    longDesc:
      "A fully responsive restaurant website with online menu, vibrant gallery, and a smart reservation system (seat limits, cutoff times, waitlist). Includes an admin dashboard for managing categories, items, and gallery uploads. Designed for appetizing UI, performance, accessibility, and SEO.",
    hrefDemo: "https://bluebirdhaus.online/",
    hrefCode: "https://github.com/SawSimonLinn/bluebirdhaussushi",
    images: [
      "/projects/project_0.png",
      "/projects/project_0a.png",
      "/projects/project_0b.png",
      "/projects/project_0c.png",
      "/projects/project_0d.png",
    ],
    coverImage: "/cover/bluebirdhaussushi.png",
    challenges: [
      "Implementing reservation logic (limits, cutoffs, waitlist).",
      "Building an easy admin for menu and gallery management.",
      "Keeping performance high with lots of media assets.",
    ],
    learnings: [
      "Full-stack flows with Next.js + Appwrite.",
      "Transactional email flows with Resend.",
      "SEO and Core Web Vitals tuning for content-heavy pages.",
    ],
    outcomes: [
      "Faster updates by staff via the admin dashboard.",
      "Smoother booking flow and fewer overbook issues.",
      "Improved local search presence with SEO-focused build.",
    ],
  },

  {
    slug: "bizboost-dashboard",
    title: "BizBoost Franchise Dashboard",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PlanetScale"],
    desc: "A comprehensive dashboard for managing franchise operations and analytics.",
    longDesc:
      "This dashboard provides a centralized platform for franchise owners to manage their operations, view analytics, and access resources. Built with Next.js, TypeScript, and Tailwind CSS, it features a modern design and intuitive user experience.",
    hrefDemo: "https://biz-boost-five.vercel.app/dashboard",
    hrefCode: "https://github.com/SawSimonLinn/BizBoost",
    images: [
      "/projects/project_12.png",
      "/projects/project_12a.png",
      "/projects/project_12b.png",
      "/projects/project_12c.png",
      "/projects/project_12d.png",
    ],
    coverImage: "/cover/bizboost.png",
    challenges: [
      "Integrating with various franchise management APIs.",
      "Ensuring data security and privacy for sensitive information.",
      "Designing a user-friendly interface for complex data.",
    ],
    learnings: [
      "Advanced API integration techniques with Next.js.",
      "Best practices for data security and user authentication.",
      "UI/UX design principles for data-heavy applications.",
    ],
    outcomes: [
      "Streamlined operations for franchise owners.",
      "Improved decision-making with real-time analytics.",
      "Positive feedback from users on the dashboard's usability.",
    ],
  },
  {
    slug: "arcade-portfolio",
    title: "Arcade Portfolio",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    desc: "An arcade-themed developer portfolio showcasing projects with playful animations.",
    longDesc:
      "This portfolio features a retro pixel-art design, dynamic project pages, and a responsive layout. Built with Next.js, TypeScript, and Tailwind CSS, it utilizes Framer Motion for smooth animations and transitions.",
    hrefDemo: "https://simonlinn.com/",
    hrefCode: "https://github.com/SawSimonLinn/simonlinn.com",
    images: [
      "/projects/project_11.png",
      "/projects/project_11a.png",
      "/projects/project_11b.png",
      "/projects/project_11c.png",
      "/projects/project_11d.png",
    ],
    coverImage: "/cover/pixel-portfolio.png",
    challenges: [
      "Implementing smooth animations with Framer Motion.",
      "Creating a responsive layout that works on all devices.",
      "Designing a playful and engaging user experience.",
    ],
    learnings: [
      "Advanced Next.js features for dynamic routing.",
      "Using TypeScript for type safety and better developer experience.",
      "Tailwind CSS for rapid UI development.",
    ],
    outcomes: [
      "A unique and memorable portfolio that stands out.",
      "Improved performance with optimized images and code splitting.",
      "Positive feedback from users on the design and usability.",
    ],
  },
  {
    slug: "news-explorer",
    title: "News Explorer",
    tags: ["React", "JavaScript", "REST API", "HTML", "CSS", "Figma"],
    desc: "News search and save app with responsive UI and auth.",
    longDesc:
      "A React app for searching the latest news via API and saving articles to a personal list. Features authenticated saves, error-handled search, and a fully responsive layout.",
    hrefDemo: "https://sawsimonlinn.github.io/se_project_newsexplorer/",
    hrefCode: "https://github.com/SawSimonLinn/se_project_newsexplorer",
    images: [
      "/projects/project_1.png",
      "/projects/project_1a.png",
      "/projects/project_1b.png",
      "/projects/project_1c.png",
    ],
    coverImage: "/cover/news-explorer.png",
    challenges: [
      "Handling API latency and rate limits gracefully.",
      "Designing clean states for loading/errors.",
      "Managing saved articles state across views.",
    ],
    learnings: [
      "Robust fetch patterns and state handling.",
      "Client-side auth flows for simple saves.",
      "Mobile-first layout and content density.",
    ],
    outcomes: [
      "Smooth search UX with clear feedback.",
      "Stable saves even on slow networks.",
      "Clean, accessible UI on all screen sizes.",
    ],
  },
  {
    slug: "wtwr",
    title: "WTWR (What to Wear)",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Figma", "CSS"],
    desc: "Weather-based outfit recommendations with auth and item CRUD.",
    longDesc:
      "A full-stack app that pulls live weather and suggests outfits. Users authenticate, manage wardrobe items (CRUD), and interact with reusable modals and components. Backend built with Node/Express + MongoDB.",
    hrefDemo: "https://wtwrapp.jumpingcrab.com/",
    hrefCode: "https://github.com/SawSimonLinn/se_project_react",
    images: [
      "/projects/project_2.png",
      "/projects/project_2a.png",
      "/projects/project_2b.png",
      "/projects/project_2c.png",
    ],
    coverImage: "/cover/wtwr-app.png",
    challenges: [
      "JWT auth and secure token storage.",
      "Designing item CRUD with clean UX.",
      "Keeping weather/UI updates responsive.",
    ],
    learnings: [
      "Auth middleware and protected routes.",
      "Reusable component patterns and modals.",
      "API integration and optimistic UI.",
    ],
    outcomes: [
      "Clear, friendly item management flow.",
      "Reliable auth with minimal friction.",
      "Snappy weather-driven suggestions.",
    ],
  },
  {
    slug: "code-heaven-studio",
    title: "Code Heaven Studio",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PlanetScale"],
    desc: "A portfolio website showcasing my freelance work and services.",
    longDesc:
      "This website serves as a portfolio for my freelance work, featuring case studies, testimonials, and a blog. Built with Next.js, TypeScript, and Tailwind CSS, it emphasizes a clean design and smooth user experience.",
    hrefDemo: "https://codeheavenstudio.com",
    hrefCode: "https://github.com/SawSimonLinn/codeheavenstudio",
    images: [
      "/projects/project_13.png",
      "/projects/project_13a.png",
      "/projects/project_13b.png",
      "/projects/project_13c.png",
      "/projects/project_13d.png",
    ],
    coverImage: "/cover/code-heaven-studio.png",
    challenges: [
      "Showcasing diverse projects effectively.",
      "Creating a cohesive brand identity.",
      "Implementing smooth animations and transitions.",
    ],
    learnings: [
      "Best practices for portfolio design.",
      "Effective use of testimonials and case studies.",
      "Advanced CSS techniques for animations.",
    ],
    outcomes: [
      "Increased inquiries and project leads.",
      "Positive feedback on design and usability.",
      "A strong personal brand presence online.",
    ],
  },
  {
    slug: "yc-directory",
    title: "YC Directory",
    tags: [
      "Next.js",
      "TypeScript",
      "Sanity",
      "Tailwind CSS",
      "Vercel",
      "Figma",
      "Sentry",
    ],
    desc: "Startup directory with CMS backend, search, and filters.",
    longDesc:
      "A Next.js directory app with Sanity as the CMS. Features dynamic routing/SSR, responsive grid, search + filter UI, and subtle animations. Deployed to Vercel with basic analytics/monitoring.",
    hrefDemo: "https://yc-directory.sawsimonlinn.com",
    hrefCode: "https://github.com/SawSimonLinn/yc_directory",
    images: [
      "/projects/project_3.png",
      "/projects/project_3a.png",
      "/projects/project_3b.png",
      "/projects/project_3c.png",
    ],
    coverImage: "/cover/ycdirectory.png",
    challenges: [
      "Schema and GROQ design in Sanity for flexible data.",
      "Fast filtering without over-fetching.",
      "Accessible animations and grid layout.",
    ],
    learnings: [
      "CMS-driven content modeling and queries.",
      "Hybrid SSR/ISR tradeoffs in Next.js.",
      "Production deploys and monitoring on Vercel.",
    ],
    outcomes: [
      "Simple content ops via Sanity studio.",
      "Fast, discoverable browsing for users.",
      "Clean foundation for future categories/tags.",
    ],
  },
  {
    slug: "eco-challenge-web-app",
    title: "Eco Challenge",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Figma"],
    desc: "Daily sustainability challenges with profiles and progress.",
    longDesc:
      "A full-stack app that helps users hit environmental goals with daily tasks. Includes signup/login, profile management, progress tracking, and a responsive UI.",
    hrefDemo: "https://ecochallengeapp.com/",
    hrefCode: "https://github.com/SawSimonLinn/eco-challenge",
    images: [
      "/projects/project_7.png",
      "/projects/project_7a.png",
      "/projects/project_7b.png",
      "/projects/project_7c.png",
    ],
    coverImage: "/cover/eco-challenge.png",
    challenges: [
      "Designing a motivating challenge flow.",
      "Syncing progress updates reliably.",
      "Keeping UI light and responsive.",
    ],
    learnings: [
      "RESTful API design and session handling.",
      "Simple gamification and feedback loops.",
      "Tailwind for fast, consistent UIs.",
    ],
    outcomes: [
      "Clear daily goals and streak feedback.",
      "Reduced drop-off via simple UX.",
      "Easy extension for new challenge types.",
    ],
  },
  {
    slug: "modern-nextjs-portfolio",
    title: "Modern Next.js Portfolio",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    desc: "Personal portfolio with multi-section design and theme switch.",
    longDesc:
      "A clean, responsive developer portfolio featuring scroll-snapped sections, dark/light theme switch, dynamic project routing, testimonials, and subtle motion.",
    hrefDemo: "https://www.sawsimonlinn.com/",
    hrefCode: "https://github.com/SawSimonLinn/nextjs-portfolio",
    images: [
      "/projects/project_5.png",
      "/projects/project_5a.png",
      "/projects/project_5b.png",
      "/projects/project_5c.png",
    ],
    coverImage: "/cover/nextjs.png",
    challenges: [
      "Keeping animations smooth and accessible.",
      "Designing content structure for clarity.",
      "Maintaining strong Lighthouse scores.",
    ],
    learnings: [
      "App Router patterns and metadata.",
      "Framer Motion primitives for micro-interactions.",
      "Theme handling and system preference sync.",
    ],
    outcomes: [
      "Faster recruiter scanning and navigation.",
      "Consistent styling and easy content updates.",
      "Good performance + SEO out of the box.",
    ],
  },
  {
    slug: "around-the-us",
    title: "Around the U.S.",
    tags: ["JavaScript", "HTML", "CSS", "OOP", "Figma", "Vercel"],
    desc: "Vanilla JS (OOP) app with interactive cards and clean structure.",
    longDesc:
      "A JavaScript OOP project featuring interactive content/cards, dynamic DOM updates, and a modular, maintainable codebase. Responsive design with custom CSS.",
    hrefDemo: "https://sawsimonlinn.github.io/se_project_aroundtheus/",
    hrefCode: "https://github.com/SawSimonLinn/se_project_aroundtheus",
    images: [
      "/projects/project_8.png",
      "/projects/project_8a.png",
      "/projects/project_8b.png",
      "/projects/project_8c.png",
    ],
    coverImage: "/cover/aroundtheus.png",
    challenges: [
      "Designing clear class responsibilities.",
      "Balancing simplicity with flexibility.",
      "Animating without heavy libraries.",
    ],
    learnings: [
      "OOP patterns and composition.",
      "DOM updates with minimal reflows.",
      "Responsive CSS without frameworks.",
    ],
    outcomes: [
      "Readable, modular code for future features.",
      "Smooth interactions with small bundle.",
      "Solid base for junior-friendly teaching.",
    ],
  },
  {
    slug: "drivio-google-drive-clone",
    title: "Google Drive Clone",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Appwrite",
      "OTP Verification",
    ],
    desc: "Drive-like file storage app with uploads, preview, and delete.",
    longDesc:
      "A Google Drive–style app using Appwrite for auth, DB, and storage. Users can upload/manage files, preview assets, and control access. Built with a clean, responsive UI.",
    hrefDemo: "https://drivio.sawsimonlinn.com",
    hrefCode: "https://github.com/SawSimonLinn/google-drive-clone",
    images: [
      "/projects/project_6.png",
      "/projects/project_6a.png",
      "/projects/project_6b.png",
      "/projects/project_6c.png",
    ],
    coverImage: "/cover/drivio-clone.png",
    challenges: [
      "Reliable uploads and preview handling.",
      "Access control and secure file rules.",
      "Keeping UI simple for non-technical users.",
    ],
    learnings: [
      "Appwrite storage and permissions.",
      "Protected routes and session flows.",
      "Tailwind patterns for dashboard UIs.",
    ],
    outcomes: [
      "Stable uploads with clear progress.",
      "Safer access via auth + rules.",
      "Easy file management on mobile and desktop.",
    ],
  },
  {
    slug: "award-winning-website",
    title: "Award Winning Website",
    tags: ["React", "Vite", "TypeScript", "HTML", "CSS"],
    desc: "Minimal, fast React site with animated scroll and clean system.",
    longDesc:
      "A modern, responsive website scaffolded with Vite. Features minimalistic layout, smooth scroll-based effects, optimized bundles, and a small component design system.",
    hrefDemo: "https://zentry.sawsimonlinn.com",
    hrefCode: "https://github.com/SawSimonLinn/jsm_award-winning-website",
    images: [
      "/projects/project_4.png",
      "/projects/project_4a.png",
      "/projects/project_4b.png",
      "/projects/project_4c.png",
    ],
    coverImage: "/cover/zentry-clone.png",
    challenges: [
      "Performance-first build and code splitting.",
      "Accessible motion and scroll effects.",
      "Keeping design minimal yet distinctive.",
    ],
    learnings: [
      "Vite tooling and fast HMR dev loop.",
      "Animation timing and intersection observers.",
      "Design tokens and reusable utilities.",
    ],
    outcomes: [
      "Quick loads and snappy navigation.",
      "Clean, readable sections across devices.",
      "Solid starting point for future pages.",
    ],
  },
  {
    slug: "jsm-movie-app",
    title: "JSM Movie App",
    tags: ["React", "JavaScript", "Tailwind CSS", "Appwrite", "TMDB API"],
    desc: "Movie explorer with TMDB data and Appwrite auth.",
    longDesc:
      "A modern movie explorer using the TMDB API for live data. Includes user auth with Appwrite, dynamic routes, responsive design, and custom components.",
    hrefDemo: "https://simonlinn.com/",
    hrefCode: "https://github.com/SawSimonLinn/jsm_movie_app",
    images: [
      "/projects/project_9.png",
      "/projects/project_9a.png",
      "/projects/project_9b.png",
      "/projects/project_9c.png",
    ],
    coverImage: "/cover/jsm_movie_app.png",
    challenges: [
      "Cleanly handling large API responses.",
      "Auth + state management with minimal boilerplate.",
      "Consistent UX across many content views.",
    ],
    learnings: [
      "API pagination, caching, and hydration.",
      "Lightweight auth flows with Appwrite.",
      "Tailwind for complex card grids.",
    ],
    outcomes: [
      "Fast browsing with clear loading states.",
      "Easy sign-in and personal lists (extendable).",
      "Polished UI that scales with content.",
    ],
  },
];

export const getProjectBySlug = (slug: string) => {
  return projects.find((p) => p.slug === slug);
};
